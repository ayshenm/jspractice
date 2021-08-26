/*
API nedir?-appilication programing Interface
bir appin birnece funksiyasinin basqa applar terefinden istifadesini goren arayuz
Request ve Response(istek ve cavab);

REST API nedir?-web applar arasinda elaqe yaratmaq ucundur Rest apilerinde Soap da var
Rest olduqca suretli uc hisseden stateless,http,jsondan ibaretdir

HTTP ISTEKLERI(REQUEST)

GET: eNDPOINTLERE(URL) GORE BELLI VERILERI ALIR
POST: ENDPOINTLERE (URL) GORE BELLI BIR VERIYI GONDERIR
PUT: ENDPOINTLERE (URL) GORE BELLI BIR VERIYI GUNCELLER
DELETE: ENDPOINTLERE (URL) GORE BELLI BIR VERIYI SILER

API ENDPOINTLERI

GET https://api.example.com/posts - Mene butun postlari gonderileri getir;
GET https://api.example.com/posts/10 -id 10 olan veriyi getir demekdir
POST https://api.example.com/posts - posta yeni deyer yazsaq orda yeni post yaranacaq
PUT https://api.example.com/posts/1 - bu sefer yeni gonderdiyimize gore id 1 olan veriyi guncelleyecek
DELETE https://api.example.com/posts/1 - id si 1 olan postumuzu silecek



//SET TIMEOUT(belli bir vaxt sonra baslatmaq) SETINTERVAL

//console.log(this);
//set timeout yaratma

setTimeout(function(){
    console.log("hello");

},2000);//2saniye sonra consola yazi yazilir



//Set interval-beli vaxt araliginda funkisyani tekrar tekrar calisdirir

//let i = 0;
//setInterval(function(){
 //   console.log("sayi:",i);
 //   i++

//},1000);

//durdurmaq ucun Clear Intervaldan istifa edirik eks halda program bitince davam edecek

let i = 0;
let value = setInterval(function(){
    console.log("sayi:",i);
    i++

},1000);
document.getElementById("btn").addEventListener("click",function(){
       clearInterval(value);//durdura basanda dayanacaq
});


//CALLBACK funksiyalari

const langs = ["Phyton","Java","C++"];
//console.log(langs);
langs.forEach(function(lang){
    console.log(lang);
});

document.getElementById("btn").addEventListener("click",function(){
    console.log("tikla");

});


//function process1(){
//    setTimeout(function(){
//        console.log("Process 1");
//
 //   },3000);
 //   //console.log("Process 1");

//}

//function process2(){
//    setInterval(function(){
//        console.log("Process 2");
//    },2000);
    //console.log("Process 2")
//}

//process1();//3saniye sonra bu
//process2();//isleyecek
//console.log("hello");

//proess ikinin birinciden sonra baslamagiin isteyirikse

function process3(callback){
    setTimeout(function(){
        console.log("Process 3");
        callback();//birinci 3 isledi sonra 4

    },3000);
    //console.log("Process 1");

}

function process4(){
    setInterval(function(){
        console.log("Process 4");
    },2000);
    //console.log("Process 2")
}

process3(process4);//3saniye sonra bu
//process4();//isleyecek
//console.log("hello");

const langs = ["Phyton","Java","C++"];

function addLang(lang,callback){

    setTimeout(function(){
        langs.push(lang);
        console.log("eklendi");
        callback();

    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang)

        });

    },1000);
}
addLang("javascript",getAllLangs);
//getAllLangs();//asinxron

//ARROW FUNCTION BIND VE THIS ARASINDA ELAQE

const person = {
    age:25,

    //tellAge : function(){//this-personu gosterir
    //    console.log(this);
    //    console.log(this.age);//funksiyanin icinde istifade etdiyimiz this bu objecti gosterir(person)
    //}.bind(this)//etsek icerdeki this windoun thisine donecek

    //globaldaaki this-windowu gosterir,hecbir funksiyain icinde deyil persona daxil olsada
    //basqa yol

    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }
   



}
person.tellAge();
*/



