// EXERCICE: 
// 1°) Coder la fonction coupsIllimites()
// 2°) Coder la fonction enTroisCoupsMax()


// Tirer aléatoirement un nombre entre 1 et 10
// *******************************************
const rndMin = 1;
const rndMax = 10;

const nbrMagic = Math.floor(Math.random() * (rndMax - rndMin)) + rndMin; 




// ***********************************************************************
// Le joueur à un nombre de coups illimités pour trouver le nombre magique
// ***********************************************************************
function coupsIllimites() {
let nbrEntered = 0;

   while (1){
      nbrEntered = prompt ("Entrez un nombre entre 1 et 10");
      
      if (nbrEntered === null)
         break;
      
      if (nbrEntered != nbrMagic){
         if (nbrEntered < nbrMagic)
            alert ("Faux plus grand");
         if (nbrEntered > nbrMagic)
            alert ("Faux plus petit");
      }
      else {
         alert ("Bravo");
         break;
      }
   }
}



// ********************************************************
// Le joueur n'a que 3 coups pour trouver le nombre magique
// ********************************************************
function enTroisCoupsMax() {
   let nbrEntered = 0;
   let i = 1;

   while (i < 4){
      nbrEntered = prompt ("Entrez un nombre entre 1 et 10. Vous avez 3 chances");

      // Regarde si on clique sur le bouton 'Annuler' du prompt 
      if (nbrEntered === null)
         break;

      if (nbrEntered != nbrMagic){
         if (nbrEntered < nbrMagic)
            alert ("Faux plus grand");
         if (nbrEntered > nbrMagic)
            alert ("Faux plus petit");
      }
      else {
         alert ("Bravo");
         break;
      }
      i++;
   }   
}



function initBtn(){
    let btn = document.getElementById('btnStart');
    btn.addEventListener('click', () => enTroisCoupsMax());
   // btn.addEventListener('click', () => coupsIllimites());
}

initBtn();