/********************************************************
Selectionner les Elements
Masquer le message d'erreur
Generation du nombre magique
Verifier la reponse du joueur
Tester la reponse du joueur par rapport au nombre magique
*********************************************************/



function calculNbrMagic(rndMin, rndMax) {
    let nbrMagic = Math.floor(Math.random() * (rndMax - rndMin)) + rndMin; 
    return nbrMagic;
}
let nbrMagic = calculNbrMagic(1,10);



let divReponse = document.querySelector ('#reponseUtilisateur');
let texteReponse = document.querySelector('#texte');
let btn = document.querySelector ('#submit');
let formulaire = document.querySelector ('form');

let btnReset = document.querySelector ('#reset');
let i = 1;

btnReset.addEventListener('click', ()=>{

    texteReponse.disabled = false;
    btn.disabled = false;
    divReponse.innerHTML = '';
    nbrMagic = calculNbrMagic (1,10);
    i=1;

});


texteReponse.addEventListener ('input', ()=>{
    let parStatusText = document.querySelector ('#statusTexte');

    
    if ((texteReponse.value >= 1 && texteReponse.value <= 10) || texteReponse.value == ""){
        parStatusText.innerHTML = '';
    }
    else {
        parStatusText.innerHTML = 'Donnez un chiffre compris entre 1 et 10';
    }

});




formulaire.addEventListener ('submit', (event) => {
    event.preventDefault();
    console.log ('nbrMagic = ', nbrMagic);

    if ( texteReponse.value > 0 &&  texteReponse.value < 11 ){
        if (texteReponse.value < nbrMagic){
            let sousdivReponse = document.createElement('div');
            sousdivReponse.classList.add ('tropPetit', 'sousdiv');
            sousdivReponse.innerHTML = '#' + i + ' (' + texteReponse.value + ') ' + 'Le nombre magic est plus grand';

            divReponse.prepend (sousdivReponse);
        }

        if (texteReponse.value > nbrMagic){
            let sousdivReponse = document.createElement('div');
            sousdivReponse.classList.add ('tropGrand', 'sousdiv');
            sousdivReponse.innerHTML =  '#' + i + ' (' + texteReponse.value + ') ' + 'Le nombre magic est plus petit';
            divReponse.prepend (sousdivReponse);
        }
        
        if (texteReponse.value == nbrMagic){
            let sousdivReponse = document.createElement('div');
            sousdivReponse.classList.add ('egal', 'sousdiv');
            sousdivReponse.innerHTML = '#'+ i + ' (' + texteReponse.value + ') ' + 'Vous avez trouver le nombre magique';
            divReponse.prepend (sousdivReponse);

            texteReponse.disabled = true;
            btn.disabled = true;        
        }

        texteReponse.value = "";
        i++;
    }
});



