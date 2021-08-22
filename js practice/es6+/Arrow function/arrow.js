/*//es5 function

const hello = function(){
    console.log("hello");
}
hello();

//es6 arrow function

const salam =() =>{

    console.log("salam");
}
salam();

const merhaba = (firstName,lastName) => {
    console.log("merhaba",firstName,lastName);

}
merhaba("Aysen","Mirza");

const gunaydin = (firstName) => {//tek parametrle is gorerken firstname monterezelerin yazmasaqda olar
    console.log("gunaydin",firstName);

}
gunaydin("Aysen");


const ruma = firstName => {//moterezesiz
    console.log("ruma",firstName);

}
ruma("Elcan");//icinde deyer olmazsa () yazilmalidir


const alo = firstName => console.log("alo",firstName);

alo("Elish");//suslu parantezleride yazmayib consolu yanina getire bilerik


//2parametr gonderdikde


const aloy = (firstName,lastName) => console.log("aloy",firstName,lastName);

aloy("Elish","Mecnunova");//suslu parantezleride yazmayib consolu yanina getire bilerik

//es5 function
const cube = function(x){
    return x * x * x;
}
console.log(cube(4));


//es6 arrow function

const cubes =(x) =>{
    return x * x * x;
    
};
console.log(cubes(4));


//dahada qisaladib returunsuz ve moterezesiz yazdira bilerik

const cubess =(x) => x * x * x * x;//return oldugunu anlayir yazmasaqda
console.log(cubess(3));



//Destructing-arrey ve objectlerin icinde deyer almagin asan yolu

//es5de

let number1,number2;

arr = [100,200,300,400];

number1 =arr[0];
number2 =arr[1];
console.log(number1,number2);

//es6da arrey destruction

let number3,number4;

arr1=[1,2,3,4];

number3=arr1[0];
number4=arr1[1];

[number3,number4] = arr1;

console.log(number3,number4);


//daha qisa yol

//let number5,number6;

arr2=[102,202,303,4];

//number5=arr1[0];
//number6=arr1[1];

[number5,number6] = arr2;//const,let,var yaza bilerik

console.log(number5,number6);


// object destruction

const numbers ={
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
};
//a,b ve c deyerini basqa deyerlere atamaq

//const{number1,number2,number3} = numbers;//objectin icinden aldigimiza gore{istifade edirik}
//console.log(number1,number2,number3);//objetin icindeki adlari consta atamaliyiq

const{a,c,e} = numbers;
console.log(a,c,e);

//basqa adla adlandirmaq ucun

const{a:number1,c:number2,e:number3} = numbers;
console.log(number1,number2,number3);





//es6da function destruction

//arrww function

const getLangs = () => {
    return["phyton","Java","C++"];

}//veya
//const getLangs = () => ["phyton","Java","C++"];

const[lang1,lang2,lang3] = getLangs();
console.log(lang1,lang2,lang3);

//object

const person = {
    name: "Ayisha Mirza",
    year: 1996,
    salary:4000,
    showInfos : () => console.log("bilgiler gosterildi")
}

const{name:isim,year:dtarixi,salary:maas,showInfos:bilgigoster} = person;

console.log(isim,dtarixi,maas);
bilgigoster();



//spread operator

const langs =["phyton","Java","C++","Php"];
console.log(langs);

//yanasi arreysiz bele yazdirmaq olar
console.log(langs[0],langs[1],langs[2],langs[3]);

//spread operatorla asan yazim ...den istifade olunur
console.log(...langs);

//const langs2 =["javascript","c#"];//digerleri ile birge yazdirmaq istesek kohne usulla
//const langs2 =["javascript","c#",langs[0],langs[1],langs[2],langs[3]];//bu qaydada
//console.log(langs2);

//daha asan yolla spread operatoru ile yazim
const langs2 =["javascript","c#",...langs];
console.log(langs2);



 //const numbers = [1,2,3,4,5,6,7,8,9];

 //const [a,b] = numbers;
 //console.log(a,b);

//geride qalanlari bir arreye atamaq ucun
 //const [a,b,...numbers2] = numbers;
 //console.log(numbers2);


 const addNumbers = (a,b,c) => {
     console.log(a+b+c);
 }
const numberss =[100,200,300,];
//addNumbers(numberss[0],numberss[1],numberss[2]);
addNumbers(...numberss);//spread operator


//for in for of donguleri

const person = {
    name: "Aisha Mirza",
    age: 25,
    salary:3000
};

const langs =["phyton","Java","C++","Php"];

const name ="Aisha";


//for in
//objet uzerinde gezinme
for(let prop in person){
    //console.log(prop);//personun icindekileri yazdirdi,ozelliyin deyerin yazdirmir
    console.log(prop,person[prop]);//deyerininde yazdiracaq
}

//arrey uzerinde for in le gezinme

for (let index in langs){
    //console.log(index);//indexin yazdirir
    console.log(index,langs[index]);//indexe qarsiliq gelen langs yazdirir.

}


//string uzerinde gezinme
const name ="Aisha";
for (let index in name){
    //console.log(index);//index yazdirir
    console.log(index,name[index]);//index qarsi gelen deyeri yazdirir
}


//for of ojectlerin uzerinde geze bilmirik

const person = {
    name: "Aisha Mirza",
    age: 25,
    salary:3000
};
const name ="Aisha";

for (let value of person){
    console.log(value);//typeof error verecek gezmek olmayacaq

}

//arrey uzerinde olar

const langs =["phyton","Java","C++","Php"];
for(let value of langs){
    console.log(value);//deyerleri yazdiracaq 
}


//strigleri ise
const name ="Aisha";
for(let character of name){
    console.log(character);
}


//map (key ve value )deyerlerinin alir

let myMap = new Map();//map yaratmaq

//console.log(typeof myMap);
//console.log(myMap);

const key1 ="Aisha";
const key2 ={a:10,b:20};
const key3 = () => 2;//arrow function

//set

myMap.set(key1,"string");
myMap.set(key2,"object literal");
myMap.set(key3,"Function deger")

//get

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);

//map olcusu
console.log(myMap.size);


const cities = new Map();

cities.set("Baki",5);
cities.set("Gence",145);
cities.set("Sumqayit",40);

//foreachle bunlarin ustunde gezinme
cities.forEach(function(value,key){
    console.log(key,value);
})

//for of la gezinme
for(let value of cities){
    console.log(value);//arrey verecek ayri ayri almaq ucun ise
}

for(let [key,value]of cities){//destructing kimi
    console.log(key,value);//adi qaydada yazilacaq
}

//map keys lerini almaq ucun
 
for(let key of cities.keys()){
    console.log(key);
}

//mapdan deyerleri valueleride ala bilerik

for (let value of cities.values()){
    console.log(value);
}

//arreylerden map yaratma

const arrey = [["key1","value1"],["key2","value2"]];

const lastMap = new Map(arrey);

console.log(lastMap);

//map dan arrey yaratma

const citie = new Map();

citie.set("Ramana",63);
citie.set("Roma",632);
citie.set("Rabat",634);

const array = Array.from(citie);//mapdan arrey yaratma
//[["Ramana",63],  ["Roma",632], ["Rabat",634] ]//yaranan qurulus
console.log(array);


//REFERANS TIPLER tekrar

// refereans ve premetiv tiplerin ferqleri


let a = "Ayseh";
let b = "Ayseh";

if(a === b){
    console.log("esit");//iki eyni deyer qarsilasdirila bilir primitiv veri tipinde

}

let arrat1 =[1,2,3,4,5];
let arrat2 =[1,2,3,4,5];
if(arrat1 === arrat2){
    console.log("beraber")//false donecek
}
//primitiv deyerlerde a===b deyende yerler sorgulanir,referans veri tipinde ise referanslar sorgulanir(bellekdeki adresler)

const person1 ={
    name: "Aisha",
    age: 25
}

const person2 ={
    name: "Aisha",
    age: 25
}
if(person1 === person2){
    console.log("netu")//yere gore sorgulanib false donecek
}

const cit = new Map();

cit.set("Dubay",96);
cit.set("Ankara",56);
const key =[1,2,3];
cit.set(key,"Array");

//console.log(cit.get("Dubay"));//primitiv odugu ucun reqem8i console yazdirir
//console.log(cit.get([1,2,3]));//undefined deyer donecek
console.log(cit.get(key));


//ES6 SETS ARREYLERE BENZEYIR BIR deyeri bir defe dasiyir

const myset = new Set();//map kimi yaradiririq

myset.add(100);//elave etmek
myset.add(100);//xeta vermeyecek amma elavede etmeyecek
myset.add(3.14);
myset.add("Aisha");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:10,b:2});

//tek tek yazmaq yerine belede ede bilerik
const myset2 = new Set([100,3.14,"Aisha"]);

console.log(myset);
console.log(myset2);

//nece element oldugunu yazdirmaq
console.log(myset.size);
console.log(myset2.size);

//delete metodu deyer varsa silinecek,deyer yoxsa hecbir xeta vermeyecek
//myset.delete("Aisha");
console.log(myset);//silindi

//has metodu-deyer verib orda oldugunu sorgulaya bilerik

console.log(myset.has("Aisha"));//oldugu ucun true donecek
console.log(myset.has("elis"));//false doecek
console.log(myset.has([1,2,3]));//false deyer  qaytaracaq

//forEach

myset.forEach(function(value){
    console.log(value);

})

//for of

for(let value of myset){
    console.log(value);
}
//setlerden arrey yaratma
const array1 = Array.from(myset);
console.log(array1);
*/






