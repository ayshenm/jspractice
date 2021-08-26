document.getElementById("change").addEventListener("click",change);

function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangerate.host/latest",true);

    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText);
            //console.log(this.responseText);
            //console.log(response);
            //console.log(response.rates);//valyutalar yazilir
            //console.log(response.rates.TRY);//VALUTA DEYERI

            const rate = response.rates.TRY;
            //console.log(typeof response.rates.TRY);number
            //const amount = document.getElementById("amount").value;
            const amount = Number(document.getElementById("amount").value);
            //console.log(typeof document.getElementById("amount").value);string
            document.getElementById("tl").value = amount * rate;

            //console.log(amount * rate);//euroya 25 versek nece tl oldugunu verecek
        }
    }

    xhr.send();

}