class Pizza {
	constructor(nomPizza, prixPizza, ingredientPizza, vegetarienne = false) {
		this.nom = nomPizza;
		this.prix = prixPizza;
		this.ingredients = ingredientPizza;
        this.imageUrl = "../images/pizzasImages/pizza-" + nomPizza +".jpg";
		this.vegetarienne = vegetarienne;
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
}

let tabPizza = [];

pizza1 = new Pizza ('chickenfajita-epice', 13, ['Sauce Tomate', 'Cheddar', 'mozzarella', 'Poulet épicé au épices fajita', 'poivrons rouges', 'poivrons jaunes', 'oignons', 'piments Jalapenos']);
tabPizza.push(pizza1);

pizza2 = new Pizza('chickenfajita', 11.50, ['Sauce Tomate', 'Cheddar', 'mozzarella', 'Poulet épicé au épices fajita', 'poivrons rouges', 'poivrons jaunes', 'oignons']);
tabPizza.push(pizza2);

pizza3 = new Pizza ('4fromages', 12, ['Sauce Tomate', 'creme fraiche', 'mozzarella', 'fromage de chevre', 'emmental', "fourme d'ambert AOP"], true);
tabPizza.push(pizza3);

pizza4 = new Pizza ('bpm', 12.50, ['Sauce barbecue', 'mozzarella', 'hache de boeuf', 'filet de poulet roti', 'merguez']);
tabPizza.push(pizza4);

pizza5 = new Pizza ('pepperonilovers', 9.50, ['Sauce Tomate', 'mozzarella', 'saucisse pepperoni']);
tabPizza.push (pizza5);

pizza6 = new Pizza ('queen', 9, ['Sauce Tomate', 'mozzarella', 'jambon', 'champignon']);
tabPizza.push(pizza6);

pizza7 = new Pizza ('montagnarde', 11, ['creme fraiche', 'mozzarella', 'jambon cru', 'fromage a raclette', 'champignon']);
tabPizza.push(pizza7);

pizza8 = new Pizza ('supreme', 14, ['Sauce Tomate', 'mozzarella', 'hache de boeuf', 'saucisse pepperoni', 'champignon', 'oignons', 'poivrons vert']);
tabPizza.push(pizza8);

pizza9 = new Pizza ('raclette', 10.50, ['creme fraiche', 'mozzarella', 'pommes de terre', 'lardons', 'fromage a raclette']);
tabPizza.push(pizza9);

pizza10 = new Pizza ('chevremiel', 9, ['creme fraiche', 'mozzarella', 'fromage de chevre', 'miel'], true);
tabPizza.push(pizza10);

pizza11 = new Pizza ('chickenbbq', 12.50, ['Sauce Barbecue', 'mozzarella', 'filet de poulet roti', 'oignons', 'champignon', 'poivrons vert']);
tabPizza.push(pizza11);

pizza12 = new Pizza('orientale', 11, ['Sauce Tomate', 'mozzarella','merguez', 'champignon']);
tabPizza.push(pizza12);

pizza13 = new Pizza('margherita', 7, ['Sauce Tomate', 'mozzarella'], true);
tabPizza.push(pizza13);

pizza14 = new Pizza ('nordique', 14, ['creme fraiche', 'mozzarella', 'saumon fume de Norvege']);
tabPizza.push(pizza14);

pizza15 = new Pizza('texanebbq', 13.50,['Sauce Barbecue','mozzarella', 'hache de boeuf', 'jambon', 'lardons','champignon', 'oignons']);
tabPizza.push(pizza15);

pizza16 = new Pizza ('vegetarienne', 11.50, ['Sauce Tomate', 'mozzarella', 'champignon', 'oignons', 'poivrons vert', 'tomates', 'olives noires'], true);
tabPizza.push(pizza16);

pizza17 = new Pizza ('campagnarde', 10, ['creme fraiche', 'mozzarella', 'lardons', 'oignons', 'champignon']);
tabPizza.push(pizza17);

pizza18 = new Pizza ('kasbah', 12, ['Sauce Tomate', 'mozzarella', 'emince de poulet', 'tomates', 'oignons', 'sauce blanche kebab']);
tabPizza.push(pizza18);

pizza19 = new Pizza ('hawaiennejambon', 10, ['Sauce Tomate', 'mozzarella', 'jambon','ananas']);
tabPizza.push(pizza19);

pizza20 = new Pizza ('spicyhotone', 11, ['Sauce Tomate', 'mozzarella', 'hache de boeuf', 'piment jalapenos', 'oignons','tomates']);
tabPizza.push(pizza20);

pizza21 = new Pizza ('samourai', 9.50, ['Sauce tomate', 'mozzarella', 'merguez', 'filet de poulet roti', 'oignons', 'sauce samourai']);
tabPizza.push(pizza21);

pizza22 = new Pizza ('chickenparmesan', 13, ['Sauce Tomate', 'mozzarella', 'filet de poulet roti', 'tomates', 'parmigiano reggiano AOP']);
tabPizza.push (pizza22);

pizza23 = new Pizza ('provencale', 10, ['Sauce Tomate', 'mozzarella','thon', 'tomates','oignons','olives noires']);
tabPizza.push(pizza23);



afficher6pizzas(tabPizza);