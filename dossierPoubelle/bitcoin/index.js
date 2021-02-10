
let url = "https://blockchain.info/ticker";


let monTimer = setInterval(() => {
 
let req = new XMLHttpRequest();
req.open ('GET', url);
req.responseType = 'json';
req.send();


req.onload = () => {
    if (req.readyState == XMLHttpRequest.DONE){
        if (req.status == 200){
            let response = req.response;
            let prixEnEuros = response.EUR.last;            
            let prixBitcoin = document.getElementById ('prixBitcoin');
            prixBitcoin.innerHTML = prixEnEuros + ' €';
            console.log (prixEnEuros);

        }
    }
}   
}, 5000);
