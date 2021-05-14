/*
    1) Click sur le bouton afficher
        Texte du bouton => 'cacher'
        Afficher le message secret
    2) Click sur le bouton cacher
        Texte du bouton => 'afficher'
        Masquer le message secret
*/

/* Initialisations */
let btn = document.querySelector ('button');
let div = document.querySelector ('div'); 

/* Rends invisble la div */
div.style.visibility = 'hidden';


function clickedBtn (){
    /* Le message est cache et il y a ecris afficher */
    if (btn.innerHTML == 'Afficher'){
        btn.innerHTML =  'Cacher';
        div.style.visibility = 'visible';
    }

    /* Le message est afficher et il y a ecris cacher */
    else{
        btn.innerHTML = 'Afficher';
        div.style.visibility = 'hidden';
    }

}

btn.addEventListener ('click', clickedBtn);


let cb = document.querySelector ('input');
cb.addEventListener ('change', () => {
    document.body.classList.toggle ('dark-theme');
    div.classList.toggle ('dark-themed-text');
});

