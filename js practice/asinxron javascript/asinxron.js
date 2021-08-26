//sinxron islemler
//asinxron yapilar
//Ajax,Fetch,Node.js

/*Ajax ve Json

//key ve value deyerleri alir Json
Ajax-Asinxron Javascript and XML;veri alma ve veri gondermeni asinxron edir seyfeni gozletmir
seyfe yenilenmeden asinxron veri almmaga komek edir.arxa planda geden asinxron
islemler sayesinde
XHR objesi sayesinde asinxron veri alib gonderebilirik
veriller hem json hemde XML formatinda gelir rest ip json dondurur

Http status kodlari:
200:ok;her hansi istek sixintisiz calisirsa
403:forbidden;
404:not faound; olmayan seyfe
505:Internal server error

ready State
Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready


document.querySelector("#btn").addEventListener("click",function(){
    //XMLHttpRequest

   const xhr = new XMLHttpRequest();
   xhr.onprogress = function(){
       console.log("prosess islenir",this.readyState);
   }
   xhr.onload = function(){
       //console.log(this.readyState);
       if(this.status === 200){
           console.log(this.responseText);
           document.querySelector("#ajax").textContent = this.responseText;
       }
   }
    //console.log(xhr);

  //  xhr.onreadystatechange = function(){
        //console.log(this.readyState);
        //console.log(this.status);
    //    if(this.status == 200 && this.readyState == 4){
            //respons hazir
    //        console.log(this.responseText);//kohne usul
    //    }
   // }
    xhr.open("GET","example.txt",true);



    xhr.send();


});
*/