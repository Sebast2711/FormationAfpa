<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\Category;
use App\Repository\ProductRepository;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class ApiController extends AbstractController
{
    
    /**
    * @Route("/api", name="api", methods={"GET"})
    */
    public function index(ProductRepository $prodRepo, NormalizerInterface $normalizer): Response {
        //1- Recupération des données produits avec le Repository Products
        $products=$prodRepo->findAll();
 
        // dd($products);
 
        // 2- Normalisation des données
 
        // Ne pas oublié le param NormalizerInterface et son namespace
        // Cela permet de convertir les objets sous forme "conprehensible"
 
        // Attention une erreur pete : A circular reference has been detected when serializing the object of class "App\Entity\Products" (configured limit: 1).
        // Pour palier a cette erreur: Faire une sélection des attributs à normaliser dans Entity Products
        // Dans Entity Products -> Ajout annotaion @Groups avec le namespace correspondant 
 
        $normalizerProd= $normalizer->normalize($products,null,['groups' => 'prod_get']);
 
        //3- Encodage sous format json des données
        // Si on encode les données avant de les avoir normalisé on récupérer un tableau vide
        $jsonData = json_encode($normalizerProd);
 
        // dd($jsonData);
 

        //4- Envoyer la réponse au 'client'
        $response= new Response($jsonData, 200, [
            "Content-Type"=> "application/json"
        ]);
        return $response;


    }


// public function index(ProductsRepository $prodRepo, SerializerInterface $serializer): Response{
    // // **********************************//
    // // Fonction avec un SerializerInterface (version simplifier)
    // // **********************************//

    // // 1- Recupération des données produits
    // $products = $prodRepo->findAll();

    // // 2- Serialisation des données
    // // Normalisation + Encodage
    // $jsonData = $serializer->serialize($products, 'json', ['groups'=>'prod_get']);

    // // 3- Envoyer la réponse au 'client'
    // // $response= new Response($jsonData, 200, [
    // //     "Content-Type"=> "application/json"
    // // ]);

    // // 3bis- Envoie réponse au client - Version siplifié
    // $response = new JsonResponse($jsonData, 200, [], true);
    // return $response;
    // }

    // public function index(ProductsRepository $prodRepo): Response{
        // // **********************************//
        // // Avec methode json du controller (version simplifier ++++++)
        // // **********************************//
    
        // $products = $prodRepo->findAll();
        // $response = $this->json($products, 200, [],['groups'=>'prod_get']);
        // return $response;
    
        // return $this->json($prodRepo->findAll(), 200, [],['groups'=>'prod_get']);
    // }
        


    // **********************************//
    // Fonction Pour créer une category depuis l'api
    // **********************************//
    /**
     * @Route("/api/category/new", name="api_new_category", methods={"POST"})
     */
    public function addCategory(Request $request, SerializerInterface $serializer, EntityManagerInterface $manager, ValidatorInterface $validator): Response{

        try{
            // 1 - Extraire les données reçues dans la requête
            $categoryData = $request->getContent();
            //dd($categoryData);

            // 2 - Deserialiser les données reçues -> seralizerInterface permet aussi de le faire 
            $category = $serializer->deserialize($categoryData, Category::class, "json");
            // dd($category);


            // Validation de la nouvelle catégorie avant écriture en base de données
            $errors = $validator->validate($category);
            if (count($errors) > 0){
                return $this->json($errors, 400);
            }

            // 3 - Envoyer les données dans la bdd
            $manager->persist($category);
            $manager->flush();

            // 201 = Création réussie
            return $this->json($category, 201,[],['groups'=>'prod_get']);
        }
        catch (NotEncodableValueException $ex){
            return $this->json([
                'status' => 400,
                'message' => $ex -> getMessage()
            ]);
        }
        
    }

    // **********************************//
    // Fonction va chercher une category selon l'id
    // **********************************//
    /**
     * @Route("/api/category/{id}", name="api_GetOne_category", methods="GET")
     */
     // On peut passer directement par la classe Categories
    public function viewCategory(Category $cat): Response{
        return $this->json($cat, 200, [],['groups'=>'prod_get']);
    }

    /**
     * @Route("/api/product/new", name="api_new_product", methods="POST")
     */
    public function addProduct(Request $request, SerializerInterface $serializer, EntityManagerInterface $manager, CategoryRepository $catRepo, ValidatorInterface $validator): Response{
       
       
        try {
            // 1- Extraction les données de la requete
            $productData = $request->getContent();
            // dd($productData);

            // 2 - Deserialiser les données reçues -> seralizerInterface permet aussi de le faire 
            $product = $serializer->deserialize($productData, Product::class,'json');

            // dd($product);

            

            // Validation du nouveaux produit avant écriture en base de données
            $errors = $validator->validate($product);
            if (count($errors)>0){
                return $this->json($errors, 400);
            }

            // 3 - Etablir la relation entre products et categories
            $category = $product->getCategory(); // Extraction de la catégorie du produit reçu
            $getCategory = $catRepo->findOneby(['name'=>$category->getName()]);
            
            $product->setCategory($getCategory);

            // 4 - Envoie des données dans la base de donnée
            $manager->persist($product);
            $manager->flush();

            // 201 = Création réussie
            return $this->json($product,201,[],['groups'=>'prod_get']);
        }

        catch (NotEncodableValueException $ex) {
            return $this->json([
                'status' => 400,
                'message' => $ex->getMessage()
            ]);
        }
    
    }





}
