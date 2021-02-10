

let brandlogo = document.querySelector('#brand-logo');
let brandp = document.querySelector ('#brand-p');
let navHamburger = document.querySelector('#hamburger-icon');

function changeDeFenetre (){
    window.location.href = "../index.html";
}


brandlogo.addEventListener ('click', changeDeFenetre);
brandp.addEventListener ('click', changeDeFenetre);

navHamburger.addEventListener('click', ()=>{
    let menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
});
