<?php 

namespace App\Services\Cart;

use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class CartService {

    protected $session;
    protected $productRepository;

    public function __construct(SessionInterface $session, ProductRepository $productRepository){
        $this -> session = $session; 
        $this -> productRepository = $productRepository;
    }

    public function add(int $id) {
        
        $panier = $this -> session -> get('panier', []);
        if (!empty($panier[$id]))
            $panier[$id] ++;
        else 
            $panier[$id] = 1;

        $this -> session -> set('panier', $panier);
    }

    public function delete (int $id){
        $panier = $this -> session -> get('panier');
        if(!empty ($panier)) {
            unset($panier[$id]);
        }
        $this -> session -> set ('panier', $panier);
    }


    public function getCartData() : array {

        $panier = $this -> session -> get('panier', []);
        $data = [];
        foreach ($panier as $prodId => $quantity){
            $data []= [
                "product" => $this -> productRepository -> find($prodId),
                "quantity" => $quantity   
            ];
        }
      return $data;
    }

    public function getCartTotal (array $data) : float {
        $totalPanier = 0;
        foreach ($data as $item) {
            $totalPanier += $item['product']->getPrice() * $item['quantity'];
        }
        return $totalPanier;
    }

}


?>