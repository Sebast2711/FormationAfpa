// const btn = document.querySelectorAll('button');

// function random(number) {
//     return Math.floor(Math.random() * (number+1));
//   } 

// function clickedBtn(e) {
//   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   e.target.style.backgroundColor = rndCol;
//   console.log (e);
// }

// for (i=0; i < btn.length; i++){
//   btn[i].addEventListener ('click', clickedBtn);
// }


// btn.ondblclick = clickedBtn;
// window.addEventListener ('keyup', clickedBtn);
// window.onkeyup= clickedBtn;
// btn.onmouseout = clickedBtn;



// btn.addEventListener ('click', function color(){
//     document.body.style.backgroundColor = 'red';
// });

function gestion_mouseover () {
  document.body.style.backgroundColor = 'green';
}

const btn = document.querySelector ('button');

btn.addEventListener ('mouseover', gestion_mouseover);
btn.addEventListener ('mouseover', () =>{
  btn.style.fontSize = '3em';
});

btn.removeEventListener ('mouseover', gestion_mouseover);


btn.addEventListener('mouseout', () =>{
  btn.style.fontSize = '1em';
  console.log ('1');
});








