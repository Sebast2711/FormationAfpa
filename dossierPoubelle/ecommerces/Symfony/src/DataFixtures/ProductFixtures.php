<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ProductFixtures extends Fixture {

    public function load(ObjectManager $manager) {

        $faker = \Faker\Factory::create('fr_FR');


        // Categories
        for ($i = 1; $i <= mt_rand(2, 6); $i++ ){
            // Creating a new Category Object
            $category = new Category();
            $category -> setName ($faker->word(2))  
                      -> setDescription(join(" ", $faker->paragraphs(4)));
            $manager -> persist($category);

            // Products
            for ($j = 1; $j <= mt_rand(1,6); $j++){
                // Creating a new Product Object
                $product = new Product();

                // Unique reference
                $reference = "#PDT" . time() . $faker->randomNumber();

                // Random images 
                $bgColor = str_replace("#", "", $faker->hexcolor()); 
                $textColor = str_replace("#", "", $faker->hexcolor()); 
                $xSize = $faker->numberBetween(200, 600);
                $ySize = $faker->numberBetween(200, 600); 
                $image = "https://dummyimage.com/$xSize/$ySize/$bgColor/$textColor";


                $product -> setName ($faker->word(4))
                         -> setReference($reference)
                         -> setDescription(join(" ", $faker->paragraphs(8)))
                         -> setPrice($faker->randomFloat(2, 0, 500))
                         -> setQuantity($faker->numberBetween(1, 100))
                         -> setImage($image)
                         -> setCategory($category);
                $manager -> persist($product);

            }
        }
        // Put in DB
        $manager->flush();
    }
}
