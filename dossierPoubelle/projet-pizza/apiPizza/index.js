// products 
// ingredients_text_with_allergens_fr POUR LES INGREDIENTS
// product_name_fr POUR LE NOM DE LA PIZZA
// image_url POUR LIMAGE

class PizzaOff {
    constructor (nom, ingredients, image){
        this.nom = nom;
        this.ingredients = ingredients;
        this.image = image;
    }
    afficherPizza (){
        console.log ('NOM', this.nom, '\n', 'INGREDIENTS', this.ingredients, '\n' ,'IMAGE', this.image);
    }
}


let pizzas = [];

function recupererPizzaEtPlacerDansTableau (){

    let url = "https://fr.openfoodfacts.org/categorie/pizzas.json";

    let req = new XMLHttpRequest();
    req.open ('GET', url);
    req.responseType = 'json';
    req.send();

    req.onload = () => {
        if (req.readyState == XMLHttpRequest.DONE){
            if (req.status == 200){
                for (let i = 0; i < req.response.page_count; i++){
                    let response = req.response;
                    let productName = response.products[i].product_name_fr;
                    let productImage = response.products[i].image_url;
                    let productIngredients = response.products[i].ingredients_text_with_allergens_fr;

                    let pizza = new PizzaOff(productName, productIngredients, productImage);
                    pizzas.push(pizza) ;
                }
                showPizzas();
            }
        }
    }   
}


recupererPizzaEtPlacerDansTableau();

function showPizzas (){
    
    let pizzaDOM =  document.querySelector('.resultatPizza');


    for (let i = 0; i<pizzas.length; i++){

        let divCard = document.createElement ('div');
        divCard.classList.add('card');
        
        let pizzaImages = document.createElement('img');
        pizzaImages.classList.add ('card-image');
        pizzaImages.src = pizzas[i].image;
        pizzaImages.alt = 'pizza';
        
        let pizzaH3 = document.createElement('h3');
        pizzaH3.classList.add('card-H3');
        pizzaH3.innerHTML = pizzas[i].nom;
        
        let pizzaParagraphe = document.createElement('p');
        pizzaParagraphe.classList.add('card-paragraphe');
        pizzaParagraphe.innerHTML = pizzas[i].ingredients;


        pizzaDOM.appendChild(divCard);
        divCard.appendChild (pizzaImages);
        divCard.appendChild(pizzaH3);
        divCard.appendChild(pizzaParagraphe); 
    }

}
