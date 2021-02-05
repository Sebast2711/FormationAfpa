class Pizza {
	constructor(nomPizza, prixPizza, ingredientPizza, vegetarienne = false) {
		this.nom = nomPizza;
		this.prix = prixPizza;
		this.ingredients = ingredientPizza;
		this.vegetarienne = vegetarienne;
	}

	afficherPizza() {
		let vegetarienne;
		this.vegetarienne ? (vegetarienne = "(v)") : (vegetarienne = "");
		console.log("Nom de la pizza : ",this.nom,"\nPrix de la pizza : ",this.prix,"€","\nIngredients : ",this.ingredients.join(", "),vegetarienne,"\n");
	}
}

class PizzaPerso extends Pizza {

    static PRIX_DE_BASE = 7;
    static PRIX_INGREDIENT = 1.5;
    static COUNT_PIZZA = 0;

    constructor (nom,ingredients, vegetarienne){
        super("Perso",0,ingredients, vegetarienne);
        PizzaPerso.COUNT_PIZZA++;
        this.num_pizza = PizzaPerso.COUNT_PIZZA;
        this.nom = "Perso " +  this.num_pizza.toString();
        this.calculPrix();
    }

    calculPrix (){
        this.prix =  PizzaPerso.PRIX_DE_BASE;
        this.prix += this.ingredients.length * PizzaPerso.PRIX_INGREDIENT;
        return this.prix;
    }
}




let pizza1 = new Pizza('3 fromages', 10.50, ['Tomate', 'Mozzarela', 'Gorgozonla', 'Parmesan'], true);
let pizza2 = new Pizza('vegetarienne', 8.50, ['Tomate', 'poivron', 'aubergine', 'origan'], true);
let pizza3 = new Pizza('calzone', 9.50, ['Tomate', 'jambon', 'Mozzarela', 'oeuf', 'champignons']);
let pizza4 = new Pizza('reine', 8.50, ['Tomate', 'jambon', 'Mozzarela', 'champignons']);
let pizza5 = new Pizza('tartiflette', 11.50, ['Crème', 'Pomme de terre', 'reblochon', 'lardon']);
let pizza6 = new Pizza('choco-noisette', 10.50, ['Crème', 'chocolat', 'noisettes grillées']);
let pizzaPerso1 = new PizzaPerso ('confiture', ['confiture'], true );
let pizzaPerso2 = new PizzaPerso ('complete' , ['merguez', 'poulet', 'fromage', 'tomate', 'mayonnaise'], false);


let tabPizza = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6, pizzaPerso1, pizzaPerso2];

function afficherPizzaVegetarienne() {
	let maVar;
	tabPizza.forEach((pizza) => {
		pizza.vegetarienne ? pizza.afficherPizza() : (maVar = "");
	});
}

function affichePizzaSansTomate() {
	tabPizza.forEach((pizza) => {
        if (!(pizza.ingredients.includes ('Tomate') || pizza.ingredients.includes ('tomate'))){
            pizza.afficherPizza();
        }
	});
}

function afficherPizzaSous10E(){
    let i = 0;
    tabPizza.forEach ((pizza) =>{
        pizza.prix < 10? pizza.afficherPizza(): i = -1;
    });
}



