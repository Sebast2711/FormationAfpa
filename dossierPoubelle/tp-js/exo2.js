let Tab = [
    ['chevre', 'poule', 'cheval'],
    ['rouge', 'orange', 'bleu'],
    ['Janvier', 'Fevrier', 'Mars', 'Juin']
];

/* Afficher animaux, couleurs, mois de l'annee  */
function  afficheAnimal (){
    for (let i = 0 ; i < Tab[0].length; i++)
        console.log ('* ' + Tab[0][i]); 
}

function afficheCouleur(){
    for (let i = 0 ; i < Tab[1].length; i++)
        console.log ('* ' + Tab[1][i]);     
}

function afficheMoisDeLannee (){
    for (let i = 0 ; i < Tab[2].length; i++)
        console.log ('* ' + Tab[2][i]);
}
    