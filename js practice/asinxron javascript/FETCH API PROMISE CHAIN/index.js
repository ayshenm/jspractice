/*function getData(data){//promise objesi donduren funksiya
    return new Promise(function(resolve,reject){//olumlu deyer-resolve,olumsuz deyer reject
         setTimeout(function(){

            resolve("olumlu sonuc");

         },5000);
    });

}

getData("hello").then(function(response){
    console.log(response);

});
 //console.log(getData("hello"));//biz






function getData(data){//promise objesi donduren funksiya
    return new Promise(function(resolve,reject){//olumlu deyer-resolve,olumsuz deyer reject
         setTimeout(function(){

            reject("olumsuz sonuc");

         },6000);
    });

}
getData("salam").catch(function(err){
    console.log(err);
})
 //console.log(getData("salam"));//biz




 //reject ve resorve bir istifadesi

 function getData(data){//promise objesi donduren funksiya
    return new Promise(function(resolve,reject){//olumlu deyer-resolve,olumsuz deyer reject
         setTimeout(function(){

            if(typeof data === "string"){
                //olumlu
                resolve(data);

            }
            else{
                //olumsuz
                reject("lutfen string deyer gir");

            }

         },5000);
    });

}

getData("hello").then(function(response){
    console.log( "gelen deyer " + response);
}).catch(function(err){
    console.log(err);
});



//new error

function getData(data){//promise objesi donduren funksiya
    return new Promise(function(resolve,reject){//olumlu deyer-resolve,olumsuz deyer reject
         setTimeout(function(){

            if(typeof data === "string"){
                //olumlu
                resolve(data);

            }
            else{
                //olumsuz
                reject(new Error("lutfen string deyer gir"));//mende olmadi

            }

         },5000);
    });

}

getData("hello").then(function(response){
    console.log( "gelen deyer " + response);
}).catch(function(err){
    console.error(err);
});


//arrow function kimi yazma
function getData(data){//promise objesi donduren funksiya
    return new Promise(function(resolve,reject){//olumlu deyer-resolve,olumsuz deyer reject
         setTimeout(function(){

            if(typeof data === "string"){
                //olumlu
                resolve(data);

            }
            else{
                //olumsuz
                reject(new Error("lutfen string deyer gir"));//mende olmadi

            }

         },5000);
    });

}

getData("hello").then(response =>console.log("gelen deyer " + response))
.catch(function(err){
    console.error(err);
});
 

function addTwo(number){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number +2);

            }
            else{//string gonderilibse
                reject(new Error("lutfen dogru girininiz"));

            }

        },3000)

    });
}

addTwo(10).then(function(response){
    console.log(response);
    return response + 2;
}).catch(function(err){
    console.log(err);
});

addTwo("hello").then(function(response){
    console.log(response);
    return response + 2;
}).catch(function(err){
    console.error(err);
});
*/


//FETCH API - dosyadan veri cekme
/*
function getTextFile(){

    fetch("example.txt")
    .then(response => response.text());
        //console.log(response);  
    .then(data => console.log(data))      
    .catch(err => console.log(err));//sytax error verdi sorus

    //console.log(window);

}
getTextFile();
*/

//FETCH API - JSON veri cekme localdan
/*
function getJsonFile(){
    fetch("example.json")
    //.then(response => console.log(response))//jsona cevirmek ucun
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}
getJsonFile();
*/

//FETCH API - Rest apiden melumat cekmek
/*
function getExternalApi(){
    fetch("")
    .then(response => response.json)
    .then(data => console.log)
    .catch(err => console.log(err));
}
getExternalApi();
*/

/*
//Fetchpromise ile http istekleri Get Post put delete  

//GET REQUEST

class Request{
    get(url){//get request
        return new Promise((resolve,reject) =>{
            fetch(url)
            //.then(response => response.text())//text verecek
            //.then(data => console.log(typeof data))//tipi string
            .then(response => response.json())//json verecek
            .then(data =>  resolve(data))//tipi object
            .catch(err => reject(err));
        
        })
       


    }
}
const request = new Request();
let albums;
request.get("https://jsonplaceholder.typicode.com/albums")
.then(data =>{//qisaldib data yerine albums yaza bilerik albums=data silib
    albums = data
    console.log(albums);
}).catch(err => console.log(err));

//console.log(albums);undefined xetasi verib gecikecek ona gore then icinde yazilmalidir
*/


/*
//POST  REQUEST

class Request{
    post(url,data){//post request
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
            
        })
            
            
        
      


    }
}
const request = new Request();
request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));
*/


/*
//PUT VE DELETE REQUEST

class Request{
    put(url,data){//put request
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
            
        })
            
            
        
      


    }
}
const request = new Request();
request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"Tarkan Karma"})
.then(album => console.log(album))
.catch(err => console.log(err));//error verdi yene
*/


/*
// DELETE REQUEST

class Request{
    Delete(url){//delete request
        return new Promise((resolve,reject) => {
            fetch("https://jsonplaceholder.typicode.com/albums/1",{
                method: 'Delete',
                
                
            }).then(response => resolve("basarili"))
              .catch(err => reject(err));
        } 
            
    

    }
}
const request = new Request();
request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message) )
.catch(err => console.log(err));//error verdi yene
*/