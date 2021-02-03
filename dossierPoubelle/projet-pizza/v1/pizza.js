let pizzas = ['4fromages', 'reine', 'calzone', 'vegetarienne'];

function afficherPizzas(nbPizzas = pizzas.length) {
    
    console.log('******************');
    console.log ('Liste des pizzas');
    console.log('******************');

    pizzas.sort();
    let tmpPizzas =[];
    tmpPizzas = pizzas.slice(pizzas.length - nbPizzas);

    if (tmpPizzas.length > 0){
        for (let i = 0; i<tmpPizzas.length; i++ ){
            console.log ('pizza #', i+1,'' ,   tmpPizzas[i]);
        }
    }
    else {
        console.log ('Aucune pizzas disponible');
    }
}



function ajouterPizza( nomPizzaAAjouter ) {

    if (!pizzas.includes(nomPizzaAAjouter)){
        pizzas.push(nomPizzaAAjouter);
    }

}

ajouterPizza ('reine');
ajouterPizza ('chorizo');
afficherPizzas(3);
afficherPizzas();


