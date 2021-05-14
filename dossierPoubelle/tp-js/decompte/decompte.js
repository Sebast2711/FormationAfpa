/* Au clic du bouton faire un decompte de 10 a 0 */

btn = document.querySelector ('button');
let p = document.createElement ('p');
document.body.append(p);


phraseDeBase = document.getElementById ('phraseDeBase');
phraseBoutonAppuyer = document.getElementById ('phraseBoutonAppuyer');
phraseBoutonAppuyer.style.display = 'none';


// Quand le bouton est clicker
btn.addEventListener ('click', () => {
    phraseBoutonAppuyer.style.display = 'block';
    phraseDeBase.style.display = 'none';
    p.innerHTML = '';
    let i = 10;
    let monInterval = setInterval ( ()=>{
        p.innerHTML     = i  + '<br>';
        i--;
        if (i < 1 ){
            clearInterval(monInterval);
            setTimeout (() => { 
                p.innerHTML = 'Bah en fait non !';
                // p.innerHTML += 'STOP'  
            } , 1000);
        }
    } , 1000);
});