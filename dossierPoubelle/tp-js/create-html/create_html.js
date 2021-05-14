/********************************/
/* supprimer la div '#a-supprimer' */
/********************************/

let asupprimer = document.getElementById ('a-supprimer');
asupprimer.remove();


/********************************************************/
/* Ajouter une div rouge avec un titre h1 blanc centrer */
/********************************************************/

// Ajout de ma div au DOM
let headerDiv = document.createElement ("div");
document.body.append(headerDiv);
headerDiv.classList.add ('headerDiv');

// Style de ma div
headerDiv.style.backgroundColor = 'red';
headerDiv.style.padding = '50px';

// Ajout du titre a l'interieur de ma div
let headerTitleDiv = document.querySelector ('.headerDiv');

let headerTitle = document.createElement ("h1");
headerTitle.textContent = 'Bienvenue';
headerTitleDiv.append(headerTitle);

// Style de mon titre
headerTitle.style.color = 'white';
headerTitle.style.textAlign = 'center';


/***********************************************/
/* Ajouter une div avec deux <a> a l'interieur */
/***********************************************/

// Ajout de ma div jaune au DOM
let bodyDiv = document.createElement ("div");
document.body.append(bodyDiv);
bodyDiv.classList.add ('bodyDiv');

// Style de ma div jaune
bodyDiv.style.backgroundColor = 'yellow';
bodyDiv.style.padding = '10px';


// Ajout de mes ancres au DOM
bodyDiv.innerHTML = "<a href = 'index.html'> Accueil </a> / <a href = 'contact.html'> Contact </a> ";


/*************************/
/* Ajouter un paragraphe */
/*************************/

let paragraphe =  document.createElement ('p');
paragraphe.textContent = 'Ceci est un paragraphe ajoute en javascript !';
document.body.append (paragraphe);

// Style de mon paragraphe
paragraphe.style.padding = '10px';







/******/
/* OU */
/******/






let divHeader = document.createElement ("div");
divHeader.innerHTML = "<h1> Bienvenue </h1>";
divHeader.style.backgroundColor = 'red';
divHeader.style.padding = '50px';
divHeader.style.color = 'white';
divHeader.style.textAlign = 'center';



let divBody = document.createElement ("div");
divBody.innerHTML = '<a href = "index.html"> Accueil</a> / <a href = "contact.html"> Contact </a>'
divBody.style.backgroundColor = 'yellow';
divBody.style.padding = '10px';



let texte = document.createElement ('p');
texte.textContent = 'Ce paragraphe est cree en javascript';
texte.style.padding = '10px';


document.body.append (divHeader, divBody, texte);





