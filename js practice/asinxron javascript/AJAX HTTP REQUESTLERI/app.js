//ajax callback, http request get

//kohne yontem 1ci yol

/*
class Request {


    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    //get request

    get(url){

        this.xhr.open("GET",url);//baglanti acik
        const temp = this;//temp requesti gosterir

        this.xhr.onload = function(){//undefined verecek
            //console.log(this);
            //if(this.xhr.status === 200){
             //   console.log(this.xhr.responseText);
            //}
            if(temp.xhr.status === 200){//xeta almamaq ucun thisleri temp yaziriq
                  console.log(temp.xhr.responseText);
               }
        }


        this.xhr.send();

    }
}
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums");
*/

//ikinci yol
/*
class Request {


    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    //get request

    get(url){

        this.xhr.open("GET",url);//baglanti acik
        

        this.xhr.onload = function(){//undefined verecek
            //console.log(this);
            //if(this.xhr.status === 200){
             //   console.log(this.xhr.responseText);
            //}
            //if(this.xhr.status === 200){//xeta almamaq ucun thisleri temp yaziriq
            //      console.log(this.xhr.responseText);
             //  }
             if(this.status === 200){//xeta almamaq ucun thisleri temp yaziriq
                      console.log(this.responseText);//xhr silib this saxlasaq bizim dosyani gosterecek
                   }
        }


        this.xhr.send();

    }
}
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums");
*/

//3cu yol
/*
class Request {


    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    //get request

    get(url){

        this.xhr.open("GET",url);//baglanti acik
        

        this.xhr.onload = function(){//undefined verecek
            
            if(this.xhr.status === 200){//xeta almamaq ucun thisleri temp yaziriq
                  console.log(this.xhr.responseText);
               }
        }.bind(this)//funksiyanin colunde oldugumuz ucun requesti gosterecek


        this.xhr.send();

    }
}
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums");
*/



/*//4cu yol ASAN get sorgu gonderme


class Request {


    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    //get request

    get(url,callback){//asinxron olmasi ucun

        this.xhr.open("GET",url);//baglanti acik
        

        this.xhr.onload = () => {//undefined verecek
            //console.log(this);REQUESTI YAZDIRIR
            if(this.xhr.status === 200){//xeta almamaq ucun thisleri temp yaziriq
                  //console.log(this.xhr.responseText);//JSONU VERDI BIZE//consolla deyil callbaca yazdiracagiq
                  callback(null,this.xhr.responseText);//isteyimiz bitdi
               }//status 200deyilse else yazilir
               else{
                   //xeta durumu
                   callback("xeta yarandi",null);

               }
        };


        this.xhr.send();

    }
}
const request = new Request();

//request.get("https://jsonplaceholder.typicode.com/albums");
//donen deyeri tapmaq ucun
const albums = request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if(err === null){
        //basarili
        console.log(response);

    }
    else{
        //xeta yarandi
        console.log(err);
    }
   

});


 request.get("https://jsonplaceholder.typicode.com/albums/51",function(err,response){//id 51 olani yazdiracaq
    if(err === null){
        //basarili
        console.log(response);

    }
    else{
        //xeta yarandi
        console.log(err);
    }
   

});
*/

/*
//POST REQUEST
class Request {


    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json");//json deyer gondereceyimizi deyirik

        this.xhr.onload = () => {
           
            if(this.xhr.status === 201){
                //basarili
                callback(null,this.xhr.responseText);
            }
            else{
                callback("her hansi xeta yarandi",null);
            }

        }

        this.xhr.send(JSON.stringify(data));



    }
}
const request = new Request();



   

request.post("https://jsonplaceholder.typicode.com/albums/",{userId:2,title:"thriller"},function(err,album){
    if(err === null){
        console.log(album);

    }
    else{
        console.log(err);
    }

})
*/

/*
//Put request
class Request {


    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json");//json deyer gondereceyimizi deyirik

        this.xhr.onload = () => {
           
            if(this.xhr.status === 200){
                //basarili
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Put Request:her hansi xeta yarandi",null);
            }

        }

        this.xhr.send(JSON.stringify(data));



    }
}
const request = new Request();

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Karma"},function(err,album){
    if(err === null){
        console.log(album);

    }
    else{
        console.log(err);
    }

})
*/

//Delete requesti

class Request {


    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    

    delete(url,callback){//asinxron olmasi ucun

        this.xhr.open("DELETE",url);//baglanti acik
        

        this.xhr.onload = () => {//undefined verecek
            //console.log(this);REQUESTI YAZDIRIR
            if(this.xhr.status === 200){//xeta almamaq ucun thisleri temp yaziriq
                  //console.log(this.xhr.responseText);//JSONU VERDI BIZE//consolla deyil callbaca yazdiracagiq
                  callback(null,this.xhr.responseText);//isteyimiz bitdi
               }//status 200deyilse else yazilir
               else{
                   //xeta durumu
                   callback(" Delete Request: xeta yarandi",null);

               }
        };


        this.xhr.send();

    }
}
const request = new Request();
request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){//id 51 olani yazdiracaq
    if(err === null){
        //basarili
        console.log(response);

    }
    else{
        //xeta yarandi
        console.log(err);
    }
   

});