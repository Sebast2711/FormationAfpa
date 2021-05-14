<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\Category;
use App\Form\ProductType;
use App\Form\CategoryType;
use App\Repository\ProductRepository;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class StoreController extends AbstractController
{
    /**
     * @Route("/", name="store")
     */
    public function index(): Response
    {
        return $this->render('store/index.html.twig');
    }
    
    /**
     * @Route ("/store/products", name="products")
     */
    public function showProducts(ProductRepository $repo){
        $products = $repo->findAll();

        return $this->render("store/products.html.twig", [
            "products" => $products
        ]);
    }

    /**
     * @Route ("/store/categories", name="categories")
     */
    public function showCategories(CategoryRepository $repo){
        $categories = $repo->findAll();

        return $this->render("store/categories.html.twig", [
            "categories" => $categories
        ]);
    }
    


    /**
     * @Route ("/store/categories/addCategory", name="addCategory")
     * @Route ("/store/categories/updateCategory/{id}", name="updateCategory")
     */

    public function addAndUpdateCategory (Category $category = null, EntityManagerInterface $manager, Request $req){

        if (!$category){
            $category = new Category();
        }
        $form = $this -> createForm(CategoryType::class, $category);
        
        $form -> handleRequest($req);
        if ($form->isSubmitted() && $form->isValid()){
            $manager->persist($category);
            $manager->flush();
            return $this->redirectToRoute("categories");
        }


        return $this->render("/store/categoryUpdates.html.twig", [
            "formCategory" => $form->createView(), 
            "mode" => $category->getId() !== null
        ]);
    }


    /**
     * @Route ("/store/categories/remove/{id}", name="removeCategory")
     */
    public function removeCategory (Category $category, EntityManagerInterface $manager){
        $manager -> remove($category);
        $manager -> flush();
        return $this->redirectToRoute("categories");
    }


    /**
     * @Route ("/store/products/addProduct", name="addProduct")
     * @Route ("/store/products/updateProduct/{id}", name="updateProduct")
     * @IsGranted("ROLE_ADMIN", statusCode=401, message="Accès refusé") 
     */
    
    public function addAndUpdateProduct (Product $product = null, EntityManagerInterface $manager, Request $req){


        $faker = \Faker\Factory::create('fr_FR');

        if (!$product){
            $product = new Product();
        }

        $form = $this->createForm(ProductType::class, $product);

        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid()){

            // If the product doesn't have an id then it means it is not in the DB so we add a new reference 
            if(!$product->getId()){
                $reference = "#PDT".time().$faker->randomNumber();
                $product->setReference($reference);
            }

            $manager->persist($product);
            $manager->flush();
            return $this->redirectToRoute("products");
        }



        return $this->render("/store/productUpdates.html.twig", [
            "formProduct" => $form->createView(),
            "mode" => $product->getId() !== null
        ]);
    }

    
    /**
     * @Route ("/store/products/remove/{id}", name="removeProduct")
     */
    public function removeProduct (Product $product, EntityManagerInterface $manager){

        try {
            $this -> denyAccessUnlessGranted("ROLE_ADMIN");
            // If access is granted
            $manager -> remove($product);
            $manager -> flush();
        }
        catch (AccessDeniedException $ex){
            $this -> addFlash('error', "Vous n'avez pas accès a cette ressource");
        }
        finally {
            return $this->redirectToRoute("products");
        }
    }

}
