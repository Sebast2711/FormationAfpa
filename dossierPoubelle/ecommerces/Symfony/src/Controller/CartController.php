<?php

namespace App\Controller;

use App\Services\Cart\CartService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CartController extends AbstractController
{

    // Version service

    /**
     * @Route("/panier", name="panier")
     */

    public function index(CartService $cart): Response {
        $data = $cart -> getCartData();
        $totalPanier = $cart -> getCartTotal($data);

        return $this->render('cart/index.html.twig', [
            'controller_name' => 'CartController',
            'panier' => $data,
            'totalPanier' => $totalPanier
        ]);
    }


    /**
     * @Route ("/panier/ajouter/{id}", name="addToCart")
     */

    // Version service
    public function addToCart(int $id, CartService $cart){
        $cart -> add($id);
        return $this->redirectToRoute('products');
    }

    /**
     * @Route ("/panier/supprimer/{id}", name="deleteFromCart" )
     */


    public function deleteProductFromCart(int $id, CartService $cart){
        $cart -> delete ($id);
        return $this -> redirectToRoute("panier");
    }


/*

    Version Controller

        public function index(SessionInterface $session, ProductRepository $repo): Response
    {

        // 1. Recuperer le panier
        $panier = $session -> get('panier', []);
        // 2. Stocker les informations des produits du panier
        $data = [];
        foreach ($panier as $prodId => $quantity){
            $data []= [
                "product" => $repo -> find($prodId),
                 "quantity" => $quantity   
            ];
        }
        
        $totalPanier = 0;
        foreach ($data as $item) {
            $totalPanier += $item['product']->getPrice() * $item['quantity'];
        }


        return $this->render('cart/index.html.twig', [
            'controller_name' => 'CartController',
            'panier' => $data,
            'totalPanier' => $totalPanier
        ]);
    }




    Version dans le controller 
    public function addToCart(int $id, Request $req){

        // Get the cart if not null else get a new array
        $session = $req -> getSession();
        $panier = $session  -> get('panier', []);
        if (!empty($panier[$id])){
            $panier[$id] ++;
        }
        else {
            $panier[$id] = 1;
        }

        $session -> set('panier', $panier);


        
        return $this->redirectToRoute('products');
    }


        public function deleteProductFromCart(int $id, SessionInterface $session ){
        $panier = $session -> get('panier');
        if(!empty ($panier)) {
            unset($panier[$id]);
        }
        $session -> set ('panier', $panier);

        return $this -> redirectToRoute("panier");

    }
    */

}
