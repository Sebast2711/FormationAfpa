

let brandlogo = document.querySelector('#brand-logo');
let brandp = document.querySelector ('#brand-p');


function changeDeFenetre (){

    window.location.href = "../index.html";
}


brandlogo.addEventListener ('click', changeDeFenetre);
brandp.addEventListener ('click', changeDeFenetre);