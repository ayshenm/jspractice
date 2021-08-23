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




//obyektyonumlu programa
//constructorlar ve object yaratma

console.log(this);

const emp1 ={//object literal
    name: "Aisha",
    age:  25,
    showInfos:function(){console.log("Bilgiler yiklendi")}
};
const emp2 = {
    name: "Elcan",
    age: 23

}
//emp1.salary = 4000;
//emp1.showInfos();
//console.log(emp1);

//constructor yaratma


//function Employe(){//boyuk herfle baslamagi onemlidir
//    this.name = "Aysen";//this deyende employe nezerde tutulur
//}
    

const emp3 = new Employe();//employeden yaradiriq
const emp4 = new Employe();
console.log(emp3);
console.log(emp4);

//daha dogru qayda beledir

function Employe(name,age,salary){
      this.name = name;
      this.age = age;
      this.salary = salary;

      //console.log(this);
      this.showInfos = function(){console.log(this.name,this.age,this.salary)};
}
 const emp5 = new Employe("Aisa",25,1000);
 const emp6 = new Employe("Eli",70,700);

 emp5.showInfos();
 emp6.showInfos();
//console.log(emp5);
//console.log(emp6);


//Prototype lar - iki obyektin ortaq ozellikleri prototypde toplanir

function Employe(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function (){
        console.log("yazdirilir")
    }
    this.toString = function(){
        console.log("employe obje")
    };
}
const emp7 = new Employe("riva", 55);
console.log(emp7);
const emp8 = new Employe("hal", 7);
console.log(emp8);

emp7.showInfos();
emp8.showInfos();

emp7.toString();
console.log(emp7.toString());//object object yazilacaq

function Employ (name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("Ad:" + this.name + "yas" + this.age);
    }
}
const emp8 = new Employ("roya",7);
const emp9 = new Employ("arzu", 8);

console.log(emp8);
console.log(emp9);




function Employy (name,age){
    this.name = name;
    this.age = age;
   
}

Employy.prototype.showInfos = function(){
    console.log("Ad:" + this.name + "yas" + this.age);//prototipe yazildi
}




const emp18 = new Employy("royil",17);
const emp19 = new Employy("arzuy", 18);
emp18.showInfos();

console.log(emp18);
console.log(emp19);


//Object create();prototype basqa elementden almaq ucun

const obj ={
    test1:function(){
        console.log("Test 1");
    },
    test2:function(){
        console.log("Test 2");
    }
}
//console.log(obj);

const emp = Object.create(obj);
emp.name =  "ayi";
emp.age = 9;
console.log(emp);


function Person(){

}
Person.prototype.test1 = function(){
    console.log("test 1");
}

Person.prototype.test2 = function(){
    console.log("test 2");
}

//const person = new Person();
//console.log(person);

function Emplo(name,age){
    this.name = name;
    this.age = age;

}
Emplo.prototype=Object.create(Person.prototype);
Emplo.prototype.myTest = function(){
    console.log(myTest);
}

const emo = new Emplo("ayise",25);
console.log(emo);

emo.test1();


//function prototype-CALL,APPLY BIND FUNKSIYALRI
//basqa constraktiri cagirmaq ucun call apply istifade ede bilerik
const obj1 ={
    number1:10,
    number2:20
};

const obj2 ={
    number1:30,
    number2:40
};

function addNumbers(number3,number4){
    //console.log(this);
    //console.log(this.number1);
    console.log(this.number1 + this.number2 + number3 + number4);//this-obj1 ve this.obj2 nin yerine kecir
}
//addNumbers(100,200);
//call cagirmasaq this windowsu gosterecek ve consola NaN yazilacaq!
//addNumbers.call(obj1,100,200);
//addNumbers.call(obj2,100,200);



//apply metodu call daki kimi yox array seklinde verilmelidir

//addNumbers.apply(obj1,[300,500]);//number3,number4
//addNumbers.apply(obj2,[6,8]);//number3,number4

//bind ojectleri bir birine baglayir,en cox eventlerle istifade olunur

function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}
const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);



console.log(copyFunc1(1,5));
console.log(copyFunc2(8,2));


//prototype tabanli kalitim(inheritance) basqa obyektden ozellikleri miras alma
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function(){
    console.log("Isim: " + this.name  + " yas " + this.age);
}

//const person = new Person("Elis",23);
//console.log(person);

function Employe(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    Person.call(this,name,age);
}
Employe.prototype = Object.create(Person.prototype);
Employe.prototype.toString = function(){
    console.log("Employe");
}
//overriding ve ya legv etme
Employe.prototype.showInfos = function(){
    console.log("Isim: " + this.name  + " yas " + this.age  + " maas: " + this.salary);
}


const emp = new Employe("Mustafa",25,4000);
//console.log(emp);
//emp.showInfos();
//emp.toString();
//console.log(emp.toString());

console.log(emp);


//es6 classlari

//kohne stilde

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.showInfos = function(){
    console.log("Isim: " + this.name + "Yas: " + this.age + "Maas: " + this.salary);

}
const emp = new Employee("Aysen",25,4000);
console.log(emp);


//es6 da bele yazilir classlarla'

class Employ{
    constructor(name,age,salary){//function uyazmasaqda isleyr
        this.name = name;
        this.age = age;
        this.salary = salary;

    }
    showInfos(){
       console.log( "Isim: "  +  this.name + " Yas: " + this.age + " Maas: " + this.salary);
    }
}
const emp = new Employ("Gulsen",75,890);
//console.log(emp);
emp.showInfos();


//Static metodlar
 
class Cebr{


    cube(x){
        console.log(x * x * x);
    }
}
const math = new Cebr();
math.cube(3);
console.log(math);

//static

class Hero{


  static  square(x){
        console.log(x * x * x);
    }
}
Hero.square(7);


//kalitim- inheritance es6

class Person{//superclass baseclass
    constructor(name,age,salary){
        this. name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log( "Isim: "  +  this.name + " Yas: " + this.age + " Maas: " + this.salary);
    }
}
class Emplo extends Person{//derivedclass,subclass,childclass
    constructor(name,age,salary){
        //this.name = name;
        //this.age = age;
        super(name,age,salary) //yuxaridaki costructoru istifade edeceyimizi soyleyecek//call etdiklerin etdi
        //super.showInfos()  //yuxaridaki constructorun infosun alacaq         
        this.salary = salary;
    }
    showInfos(){//overriding
        console.log( "Isim: "  +  this.name + " Yas: " + this.age + " Maas: " + this.salary);
    }//bu isleyyecem burda oldugu ucun
    toString(){//overriding
        console.log("Emplo");
    }
    raiseSalary(amount){//extra metod
        this.salary =  this.salary + amount;

    }
}
const emp = new Emplo("Ravid",20,5000);
emp.raiseSalary(25);
//emp.showInfos()//yuxari construktordan miras oldugu ucun yazilacaq
//console.log(emp);
emp.showInfos();
emp.toString();
*/