
/*const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("submit eventi");//yenilendiyi ucun submit qalmir


    e.preventDefault();//submit eventi yazilacaq
}

//filterInput.onfocus = function(){
//    console.log("hello");//1ci yontem
//}
//filterInput.addEventListener("focus",function(e){
//     console.log(e);//eventi yazdirdirdiq
//     console.log(e.type);//tipini yazdirir
//     console.log(e.target);//eventin harda yarandigini yazir
//     console.log(e.target.placeholder);//placeholderin icin yazdirir
//     console.log(e.target.className);//classi yazdirir
 //   //console.log("hello");
//});


//Keyboard eventleri

//keypress herfler ve sayilar qebul edilir diger tuslar gorunmur

//document.addEventListener("keypress", run);

//function run(e){
    //console.log(e.which);// karakterin asci tablosundaki deyerini yazdirir (0dan 255 daxil) neye basdigimizi yazdirir
    //console.log("hello");
    //console.log(e.key);//karakterini hansina basdigimizi yazdirir
//}


//keyup- tusu buraxdan sonra isleyir basili saxla burax

//document.addEventListener("keyup", run);
//function run (e){
//    console.log(e.key);

//}
//praktika

//const header = document.querySelector(".card-header");
//const todoInput = document.querySelector("#todo");

//todoInput.addEventListener("keyup",changeText);

//function changeText(e){
 //   header.textContent = e.target.value;//todo list deyisdim
//    //console.log(e.target.value);//elementin icindeki yazini alma
//}


//keydown -klaviatura ustundeki butun tuslari duyarli hala getirir

//document.addEventListener("keydown", run);
//function run (e){
 //   console.log(e.key);
//}


//MOUSE EVENTLERI

const cardbody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

//click eventi-tiklayanda yaranir

//title.addEventListener("click",run);

//function run(e){
 //   console.log(e.type);//todolara vurduqca tetiklenir
//}

//duble click eventi

//title.addEventListener("dblclick",run);

//function run(e){
 //   console.log(e.type);//todolara vurduqca tetiklenir
//}

//mouse down eventi keydown benzeyir

//title.addEventListener("mousedown",run);

//function run(e){
  //  console.log(e.type);//ustune vuran kimi yaranir
//}

//mouse up eventi keyup benzeyir elimi biraxanda yazir

//title.addEventListener("mouseup",run);

//function run(e){
//    console.log(e.type);//ustune vuran kimi yaranir
//}


//mouseover-biz elementin ustune gelen kimi tetiklenir,basqa elementlere girendede tetiklenecekdi

//cardbody.addEventListener("mouseover",run);

//function run(e){
//   console.log(e.type);//ustune vuran kimi yaranir
//}

//mouseout-elementden cixarken olusur

//title.addEventListener("mouseout",run);

//function run(e){
//    console.log(e.type);
//}


//mouseenter event

cardbody.addEventListener("mouseenter",run);

function run(e){
   console.log(e.type);//giren kimi tetillenecek
}

//console.log(cardbody);


//mouse leave //cixdiqdan sonra tetillenir

cardbody.addEventListener("mouseleave",run);

function run(e){
   console.log(e.type);//giren kimi tetillenecek
}

//console.log(cardbody);



// Input eventler

const filter = document.querySelector("#filter");

//document.addEventListener("DOMContentLoaded",load);//seyfedeki hersey yuklendikden sonra icra olunur
//
//function load(e){
//    console.log("seyfe yuklendi");//seyfe yukleneden sonra yazi gelir
//}

//Focus -input alanin focuslanda tetiklenir

filter.addEventListener("focus",run);

function run(e){
    console.log(e.type);
}


//Blur -eventi cixdiqdan sonra inputdan tetiklenir

filter.addEventListener("blur",run);

function run(e){
    console.log(e.type);
}


//Paste kopyalama eventi yapisdirma,herhansi seyfeni kopyalayib yapsdiranda tetiklenir

filter.addEventListener("paste",run);

function run(e){
    console.log(e.type);
}


//Copy eventi inputdaki yazinin kopyalayanda  tetiklenir

filter.addEventListener("copy",run);

function run(e){
    console.log(e.type);
}

//Cut eventi yazinin kesende tetiklenir

filter.addEventListener("cut",run);

function run(e){
    console.log(e.type);
}

//Select eventi belli yazinin yada tamamini secdikde tetiklenir

filter.addEventListener("select",run);

function run(e){
    console.log(e.type);
}




//Event CEPTURING bUBBLING JS YE OZEL YOX DOCUMENTE OZELDIR

//EVENT bubling qabarciqlanaraq yuxaridaki elementlerede event atayir

//document.querySelector(".container").addEventListener("click",function(){
//    console.log("Div Container");//butun seyfeye qabarciqlanir
//});

//document.querySelector(".card.row").addEventListener("click",function(){
//    console.log("Card Row");//butun seyfeye qabarciqlanir
//});

//document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//    console.log("Card Body");//butun seyfeye qabarciqlanir
//});



// event cepturing ve ya delegation-olay tutma secilen elementi her hansi alt elementie tesir edir secilir

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

function run(e){
    //console.log("hello");//cardbody icinde ne varsa hamsina tesir edir
    if(e.target.className === "fa fa-remove"){
        console.log("sime isi");//xlara vuranda gelir
    }
     if(e.target.id === "filter"){
         console.log("filtirleme");//iputa vuranda gelir
     }
     if(e.target.id === "clear-todos"){
         console.log("tumunu sil");//a ya vuranda
     }
    //console.log(e.target);//harda oldugunu gore bilerik
}

*/



