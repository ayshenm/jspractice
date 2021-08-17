//xeta yazdirmaq;

//console.warn("fuck");
//console.error("js danger");
//console.clear();

//primitive types;

//number type
//var a = 20;//number type
//var b = 3.14;//number type
//var c = 40;
//console.log(a,b,c);
//console.log(typeof a);

//string type
//var name = "Aisha";
//console.log(name);
//console.log(typeof name);//string

//boolean type//true&false
//var a =true;
//console.log(a);
//console.log( typeof a);

//null type
//var a = null;//bos bir deyerdir;
//console.log(a);
//console.log(typeof a);

//underfined type//tanimlanmamis deyer;

//var a;//bele yazib deyer vermedikde
//a=5;
//console.log(a);


//Referance types;

//Array type
//var numbers =[1,2,3,4,5,6,7,8];
//console.log(numbers);
//console.log(numbers.length);
//console.log(typeof numbers);
//console.log(numbers[5]);


//person type

//var person ={
    //name:"Aisha Mirza",
    //age: 25

//}
//console.log(person);
//console.log(typeof person);//referans tiplerin hamsi type objectdi


//date type

//var date = new Date();
//console.log(date);
//console.log(typeof date);


//function object

//var hello = function(){
   // console.log("hello");
//}
//console.log("hello");
//console.log(typeof hello);

//primitive and referance ferqi

//var a = 10;
//var b = a;
//console.log(a,b);
//a = 30;//a nin deyeri deyisecek b ise evvelki aldigi a deyerinde qalacaq
//console.log(a,b);

//var a = [1,2,3];
//var b = a;
//a.push(4);
//console.log(b);


//degiskenler var,let,const

//var

//var name = "Aisha Mirza"
//console.log(name);
//name = "Aysen";
//console.log(name);

//let

//let name = "Aysen Mirzeyeva";
//let name = "en Mi";//tanimlamayacaq xeta verecek

//console.log(name);
//name = "Ayse";
//console.log(name);

//const

//const name = "Aysen Mirzeyeva";
//console.log(name);
//name = "dfghfjhf";
//console.log(name);//type error verecek tekrar deyer vermek olmaz

//const = a;//yaninda deyerini tanimlamaq lazimdi yoxsa xeta verecek
//a = 10;
//console.log(a);

//const c = [1,2,3,4,5,6,7,8,9];

//console.log(c);
//c = [1,5,8,9,7,6];
//console.log(c);//type xetasi verecek;
//c.push(10);//a referans etdiyi yeri deyisdiyimiz ucun xeta vermedi
//console.log(c);

//type deyisimi

//let value;
//veritipin stringe cevirme

//value = 123
//console.log(typeof value);//number

//number type  stringe cevirme

//value = String(123);
//console.log(typeof value);
//value = String(true);
//console.log(typeof value);

//alternativ
//value = (20).toString();

//veritipin sayiya cevirme,veri tipi cevrilmirse NaN deyer donecek
//value = Number("123");
//value = Number(null);
//value = Number(undefined);//cevire bilmediyimiz ucun Nan (bir sayi deyil);
//value = Number("hello");//cevirlmeyecek NaN;
//value = Number(function(){console.log()});//cevirlmeyecek NaN;
//value = Number([1,2,3,5,4,85]);//cevirlmeyecek NaN;

//reqemler number e cevrilir ve null (0)deyeri;

//value = Number("3.14");//cevrilecek

//const b = "aisha" + 25;
//console.log(b);
//const c = "25"+56;
//console.log(c);//toplamaq istesek
//const c = Number("25")+56;
//console.log(c);

//console.log(value);
//console.log(typeof value)


//Math operatorlari

//let value;

//const value1 = 10;
// const value2 = 4;

//arikmatik operatorlar
//console.log(value1 + value2);//toplama
//console.log(value1 - value2);//cixma
//console.log(value1 * value2);//vurma
//console.log(value1 / value2);//bolme
//console.log(value1 % value2);//agacli bolme yolu

//value = Math.PI;//pi nin deyerin yazdirir

//value = Math.round(3.6);//sayilari yuxari yuvarlayir (4);3.5den asagini asagi yuvarlayir
//value = Math.round(3.2);//3olacaq

//value = Math.ceil(3.2)//direk yuxari yuvarayir 4 yazacaq;
//value = Math.ceil(3.7);//4verecek yene

//value = Math.floor(3.2);//asagi yuvarlayacaq 3 yazacaq
//value = Math.floor(3.7);//yene 3yuvarlayacaq

//value = Math.sqrt(16);//kok alma
//value = Math.sqrt(31);

//value = Math.abs(-10);//modulun alir 
//value = Math.abs(-50);

//value = Math.pow(8,3)//kub ve kvadrati tapmaq ucun
//value = Math.pow(2,2);

//value = Math.max(100,35,1000,85);//en yuksek sayini yazdirir
//value = Math.min(100,35,1000,85);//en kiciyini yazdirir


//value = Math.random();//0ve 1 arasinda rastgele deyer yazdiri 0 daxildir 1 daxil deyil;
//value = Math.random() *20;//0-la 20arasinda deyerler yazdiracaq
//value = Math.random() * 20 +1;//1le 20arasinda deyerleri yazdirir.
//value = Math.floor( Math.random() * 20 +1);//onluq deyer kimi istedikde bele yaziriq
//console.log(value);


//string metodlari

//let value;
//const firstName = "Ayisha";
//const lastName = "Mirzeyeva";
//const langs = "Java,Phyton,C++";

//value = firstName + " "+ lastName;//bosluq buraxmasaq bitisik yazilacaq
//value = "Elcan Huseynov";
//value+="Roma"//value = value + "Roma";
//value = firstName.length;//nece karakter oldugunu yazdirir

//string metodlari
//concat

//value = firstName.concat(" ",lastName," ",langs);//uc uca string elave etmek ucun
 //tolowercase()
//value = firstName.toLowerCase();//butun herfleri balaca yazir
//touppercase()
//value = firstName.toUpperCase();//butun herfleri boyuk yazir
//index yazdirmaq
//value = firstName[5];//index yazdirmaq(a(0-index),y(1),i(2),s(3),h(4),a(5))
//value = firstName.length -1;//son indexi yazdiracaq;ve yaxud
//value = firstName[firstName.length - 1];//seklindede yazmaq olar stringin uzunlugun bilmediyimz durumlarda

//indexof  karakterin harda oldugunu gosterir herfi yazmaqla hansi indexde oldugunu yazdirir

//value = firstName.indexOf("h");//4cu yerde oldugunu yazdirdi
//value = firstName.indexOf("c");//olmayan herf axtardiqda -1 dyerin q2aytarir

//charat()
//value = firstName.charAt(0);//index qeyd etmekle hemin indexdeki herfi yazdiri
//value = firstName.charAt(firstName.length - 1);//sonuncu herfi alir


//split//parcalayir

//value = langs.split(",");//vergule gore parcalayib ayrica arreyde yazdiracaq


//replace()//deyerin yerine basqa deyer yazdirma

//value = langs.replace("Phyton","css");

//includes//sorgulamaq ucun yeni deyer varmi yoxmu
//value = langs.includes("Java");//tapsa true donur
//value = langs.includes("asp-net");//tapmasa false donur
//console.log(value);


//template literal
//const name = "Aisha Mirza";
//const department = "Texnologiya";
//const salary = 8000;

//const a = "Isim:" + name +"\n"+"bolum:"+department+"\n"+"maas:"+salary;
//daha asan yazilis
//const a = `isim:${name}\nbolum:${department}\nmaas:${8000}` 
//body yazi yazdirma
  //const html = "<ul>" +
  //             "<li>"+ name + "</li>" +
  //             "<li>"+ department + "</li>"+
  //              "<li>" + salary + "</li>"+
  //              "</ul>";

//template literal ile daha asan yazi

//const html = `
 //       <ul>
 //      <li>${name}</li>
  //      <li>${department}</li>
  //      <li>${salary}</li>
  //      </ul>


`;
//document.body.innerHTML = html;

