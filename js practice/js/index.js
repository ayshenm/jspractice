/*arreyler
let value;

const numbers = [5,12,18,22,32,1,8,9];
const numbers2 = new Array(1,2,3,4,5,6);//yarada bilerik

const langs = ["phyton","java","c++","Javascript"];
const a = ["hello",22,null,undefined,3.17];
value = numbers.length;//uzunlugun verecek
value = numbers[5];//indexi yazdirir
value = numbers[7];//yada
value = numbers[numbers.length-1];

//her hansi indexi deyistirmek numbers[2] = 1000;
value = numbers;

indexof reqem hansi indexde oldugunu tapir
value =numbers.indexOf(1000);

array sonuna deyer elave etmek -push
numbers.push(70);
value = numbers;

arreyin evveline deyer elave etme
numbers.unshift(99);
value = numbers;

arreyin sonundan deyer silme
numbers.pop();
value = numbers;

arreyin basindan deyer silme
numbers.shift();
value = numbers;

belli reqemleri silmek meselen 3qeder sayir 3u silmir 0dan 3dek
numbers.splice(0,3);
value = numbers;

arrey tam ters cevirme
numbers.reverse();
value = numbers;

arrey siralama
value = numbers.sort();//1ci reqemler baxib ardicilliqla siralayir

balacadan boyuye siralamaq
value = numbers.sort(function(x,y){
    return x-y;
});

 boyuyden balacaya siralamaq
value = numbers.sort(function(x,y){
    return y-x;
});
console.log(value)



//oBJECTLER
let value;

const programmer = {
   name:"Aisha Mirza",
   age: 25,
   email:"mirzeyevamiray8@gmail.com",
  lang: ["java","javascript","phyton"],

  address:{
       city: "Baku",
      street: "M.Hadi 136",
        
   },
    work: function(){
    console.log("isleyir");

    }
}

value = programmer;
value = programmer.email;//veya genelolaraq
value = programmer["email"];

value=programmer.lang;//dilleri yazdirir

value = programmer.address.city;//seheri almaq

programmer.work();//metodu cagirirq

obyektlerden yaranan arrey
const programmers =[
    {name: "Aisha Mirza",age:25},
    {name:"Elcan Ramos",age:30},
];
value = programmers[0];
value = programmers[0].name;

console.log(value);


Date object
let value;
const now = new Date();//hazirki vaxti almaq
console.log(now);
const date1 = new Date("2-09-1996 08:03:08");//veya
const date2 = new Date("February 9 1996");
const date3 = new Date ("02/09/1996");

value = date1;
value = date1.getMonth();//ayi yazdirir 0 dan baslayaraq
value = date1.getFullYear();//ili yazdirir
value = date1.getDate();//doguldugun gun yazdiririr
value = date1.getDay();//heftenin gunun yazdiracaq

value = date1.getHours();//saat; yazdiracaq
value = date1.getMinutes();//deqiqeni yazdiracaq
value = date1.getSeconds();//saniyeni yazdiracaq
value = date1.getMilliseconds();//millisaniye

tarix deyisdirme
date1.setMonth(9);//ayi deyisdirdik
date1.setFullYear(2021);//ili deyisdik
date1.setDate(22);//dogum gunun deyisdik
date1.setHours(0);//saati deyisdik
date1.setMinutes(10);//deqiqe
date1.setSeconds(15);//saniye
value = date1;
console.log(value);

kosullar karsilastirma operatorlari

//==;
console.log(2==2);//beraberliyi yoxlayir true olacaq
console.log("js"=="angular");//duz olmadigi ucun false olacaqconsole.log("2"==2);//stringe cevrildiyi ucun diger terefde true deyeri donur
console.log(2==="2");//tipininde yoxladigi ucun false olacaq

//!= beraber deyilse;
console.log(2!==4); true
console.log(2!==2); false

 <kicikdir,>boyudur
console.log(2<4);//true
console.log(2>4);//false

//boyuk ve ya beraberdir >=

console.log(4>=2);//true\
console.log(2<=2);//true
console.log(1>=2);//false


//mentiqsel operatorlar

//! operatoru
console.log(!(2==2));//false

&& and operatoru hamsi true deyer olmalidir bir sehv olsa hamsin sehv qebul edir

console.log(4==2)&&("Aisha"=="Aisha");//false yazilacaq
console.log(2==2)&&(4==4);//true

Or operatoru || 1dogru 5 sehv olsada dogrunu goturecek

console.log((4==2)||("aisha"=="aisha"));
console.log((2==2)||("ehmed"=="mehmed"));

if else

const error = true;

if(error==true){
    console.log("dogru");
}

const error =true; 
if(error == true){
    console.log("dogru");
}
console.log("fff");


const error = false;

if(error == true){
    console.log("xeta");
}
else{
   console.log("danger");//buranin islemesi yuxaridaki if e bagli
}

const user ="mmc";//"mty"
if( user === "mmc"){
    console.log("tapildi");
}
else{
    console.log("yoxdur");
}

const prosess = "1";

 if(prosess === "1"){
    console.log("islem:1")
}
else if(prosess === "2"){
    console.log("islem:2")
}
else if(prosess === "3"){
 /  console.log("islem:3")
}
 else if(prosess === "4"){
    console.log("islem:4")
}
else{
    console.log("error");
}


//ternary operator

const number = 120;
if(number === 100){
    console.log("beraber");
}
else{
 console.log("beraber deyil");
}//veya

console.log(number === 100 ? "beraberdir" : "sayi beraber deyil");
if(number === 100){//burda bir emr varsa motereze istifade etmeye bilerik
    console.log("100dur")
}
belede yazmaq olar
if (number === 100) console.log("sayi 100");
else console.log("100 deyil");



//switch case;if elselerin yerine istifade olunur

const prosess = 2;//12;

switch(prosess){
    case 1:
        console.log("islem1");
        break;//duz oldugu teqdirde islemir sonlandirib cixir,break yazmasaq sehde olsa ondan asagidakilarda consolda yazdirilacaq
    case 2:
         console.log("islem2");
         break;  
    case 3:
        console.log("islem3");
        break;  
    default:
        console.log("gecersiz") ;  
        break;  //yazsaqda olar yazmasaqda  hamsin yoxlayir olmasa default donur

}


//Funksiyalar IIEF ve anonim funksiyalar

function hello(name = "bilgi yox",age="bilgi netu"){
    //if(typeof name === "undefined") name ="bilgi yox";
    //if(typeof age === "undefined") age = "bilgi netu";
    console.log(`Isim: ${name} Yas: ${age}`);
}
hello("Aisha",25);//function call/funksiya cagirmaq
//hello();//tanimlaya bilerik icine deyer yazdira bileriik
hello("Elcan",30);//

hello();//deyer yazmadigim ucun undefined yazacaq //bilgi yox bilgi netu kimi adlandira bilerik

hello("elis")//name yazdiracaq yas bilgi netu qalacaq

//return funksiya icinden deyer dondurme,funksiyani sonlandirir altina ne yazsaq calismayacaq

function square(x){
    //console.log(x*x);
    return x * x;
    console.log("hello");//hec vaxt calismaz returndan sonra
}
function cube(x){
    //console.log(x*x*x);
    return x*x*x;
}
let a = square(12);//belede yaza bilirik:let a = cube(square(12));
a = cube(a);//NaN verecek return donmediyi ucun
console.log(a);

function hello(){
   return "hello";
}
console.log(hello());//birbasa bele yaza bilerik
hello();

//function expression-funksiyani deyiskene beraber etme

const hello = function(name){
    console.log("hello" + name);
};
hello("Aisha");


//Immediately Invoked Function Expression IIFE(tanimlandigi yerde isleyen funksiyalar)

(function(name){
    console.log("hello:" + name);
})("aisha");//bos olanda undefined donecek


//function ve metod eyni sheydi,
const database ={
    host: "localhost",
    add: function(){
        console.log("elavelendi");
    },
    get:function(){
        console.log("elde edildi");
    },
    update: function(id){
        console.log(`id: ${id} guncellendi`);
    },
    delete: function(id){
        console.log(`id: ${id} silindi`);
    }
}
console.log(database.host);

database.add();

database.delete(10);//10 id yerine kecdi


//Looplar while,do while,for,for in

//while dongusu

//let i = 0;
//while(i<10){// set odenildiyi teqdirde oz icinde donecek i++yazmasaq sonsuz dongu yaranacaq
   
//    console.log(i);

 //   i++;//i=i+1seklinde yazmaq olar
//}

 //let i = 10;

 //while(i>0){
 //    console.log(i);

     //i--;//i=i-1
     //i = i - 2;//2defe azaltmaq
  //   i-=2;


 //}

 //break and continue

 //let i =0;
 //while(i<10){
 //    console.log(i);
 //    if(i==5){
 //        break;//dogrudusa dongu sonlanacaq
 //    }
 //    i++;
 //}

 let i =0;
 while(i<10){//sonsuz donguye girir engellem ucun continueden evvel i++ yazmaliyiq
     if(i ==3 || i==5){
         i++;
      continue;  //alti calistirmadan en basa gedir 
     }
     console.log(i);
     i++;
 }
 

 // do while dongusu
 let i =0;
 do {
     console.log(i);   
     i++;//sert odenmesede bir defe calisir
 }while(i<10);


 //for dongusu

 //const langs =["Java","Phyton","C++"];
 //let index = 0;
 //while (index< langs.length){
 //    console.log(langs[index]);
  //   index++;

 //}

 //const langs =["Java","Phyton","C++"];
 //let index = 0;

 //for (let index =0; index < langs.length; index++){//iterasyon tek tek gezdik elementler uzerin
 //    console.log(langs[index]);

 //}
const langs =["Java","Phyton","C++"];

langs.forEach(function(lang,index){
    console.log(lang,index);//dyerleri js ozu gonderir

});

//Map() funksionu tek tek deyer almaq ucun

const users = [
    {name:"Aysen",age:25},
    {name:"elis",age:15},
    {name:"elcan",age:8}
];
const names = users.map(function(user){//aysen,elis,elcan
    return user.name;
});
const ages = users.map(function(user){//25,15,8
    return user.age;
})
console.log(ages);
console.log(names);
 

//for in funksiyasi

const users = {
    name:"Aysen",
    age:25
};
for (let key in users){//keyle gezecek
    console.log(key,users[key]);//name,age yazdiracaq
} 


//window obyekti icindekiler

//console.log(window);//yazdirir this,window eynidi
//console.log(this);//ustunde oldugumuz documentasiya
//console.log(this.alert("hello"));//ekrana yazdirir

//alert
//alert("Hello");//ekrana qutu cixarir
//const cavab = confirm("eminsen?");
//console.log(cavab);//tamam bassaq true,iptal bassaq false deyer donecek
 
//if(confirm("eminsen?")){
//    console.log("sil getsin");
//}
//else{
//    console.log("silme");
//}

//prompt input alma

const cavab = prompt("2+2=?");
if(cavab == "4"){
    console.log("dogru");
}
else{
    console.log("dogru deyil");
}
//console.log(cavab);


let value;
value = window.location;//saytin unvani
value = window.location.host;//saytin hostu
value = window.location.hostname;//hostname adi
value = window.location.port;//portun verecek
value = window.location.href;//hal hazirki address

//if (confirm("seyfe yenilensin?")){
 //   window.location.reload;//istifadeci istese yenilenecek;
//}
//else{
//   console.log("seyfe yenilenmedi");
//}

value = window.outerHeight;//seyfede olan herseyi qebul ederek hundurluyu yazdirir
value = window.outerWidth;//cubuqlar daxil enini olcecek


value = window.innerHeight;//devtools dan yuxari pencerinin hundurluyunu yazir
value = window.innerWidth;//cubuqlari olcuye qatmadan genisliyi yazdirir
value = window.scrollX;//yatay yonde scroll olcusu gosterir
value = window.scrollY;//dikey yonde scrool olcusunun yazdirir


console.log(value);


//scope kapsam kavrami

//global scope- hec bir funksiyanin  icinde olmayanlar

var value1 = 10;
let value2 = 20;
const value3 = 30;

//function gun(){
//    var value1 = 40;
//    var value2 = 50;
//    var value3 = 60;
  
//    console.log(value1,value2,value3);
//}
//gun();


//block scope -her hansi funksiyanin ifin icinde olan deyerler

if(true){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;//block icindeki var lar kenardada cagirarken gelirler const ve let ise gelmir

    console.log(value1,value2,value3); 
}

//console.log(a);
//console.log(b);
//console.log(c);

console.log(value1,value2,value3);

//function a(){//function scope 

}

var database ="12345";

if(true){//let ve const istifade etmeliyik.
   var database ="8552211"; //blocda deyisiklik edende coldekininde deyyeri deyisir ve geri gelmir
}
*/