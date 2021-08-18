/* window object
//console.log(this.document);//html documentasiyasini yazdirir

let value;
value = document.all;//butun html yazdirir
value = document.all.length;//html de ki documentasiyanin sayin yazdiracaq
value = document.all[0];//0ci indexde yeni 1ci yerde ne oldugunu gosterir
value = document.all[6];//6ci indexde ne oldugunu yazdirir.


value = document.all[document.all.length -1];//documentasiyada sonuncu elementi yazdiracaq
//for dongusu ile document uzerinde geze bilerik

const elements = document.all;

for(let i=0; i<elements.length; i++){
    console.log(elements[i]);
}

foreach istifade etme
element.forEach(function(element){
    //console.log(element);//error verecek bunun ucun arreye cevirmeliyik

})

const colections = Array.from(document.all);
colections.forEach(function(collection){
    console.log(collection);//bu halda geze bileceyik
})

value = document.all[9];//body verecek
value = document.body;//body ni deyerleri ile yazdiracaq
value = document.head;//head etiketini yazdiracaq
value = document.location;//seyfenin yer bilgilerini yazdiracaq
value = document.location.hostname;//hostneme yazdiracaq
value = document.location.port;//portun yazdiracaq
value = document.location.URL;//URLsin yazdiracaq
value = document.characterSet;//utf 8 yazdiracaq

scripts

value = document.scripts;//script leri yazdirir
value = document.scripts.length;//nece script oldugunu yazdirir
value = document.scripts[0];//1ci yerde 0ci indexde duran scripti yazdirir

links

value = document.links;//html de olan linkleri yani a etiketleri gelir
value = document.links.length;//nece etiket var yazdirir
value = document.links[0];//1ci yerde 0ci indexde duran scripti yazdirir
value = document.links[document.links.length -1];//sonuncu linki yeni a etiketini yazdiracaq
value = document.links[document.links.length -1].getAttribute("class");//axrinci linkin classini yazdiracaq ve ya
value = document.links[document.links.length -1].className;//yene axrinincinin class deyerinin yazdirmagin yardimci yolu
value = document.links[document.links.length -1].getAttribute("href");//axrinincinin a nin hrefinin deyerinin # yazdiracaq
value = document.links[document.links.length -1].classList;//axrincinin class deyerlerinin ayriliqda yazdiracaq

forms

value = document.forms;//html document formslari yazdiri
value = document.forms.length;//saylarinin yazdirir
value = document.forms[0];//0ci indexde yeni birinci yerde olani yazdiri
value = document.forms["form"];
value = document.forms[0].id;//1ci yerde olan 0ci indexdeki id ni yazdirir
value = document.forms[0].getAttribute("id");//eyni seyi verecek yuxardaki ile
value = document.forms[0].name;//name ozelliyini ala bilerik
value = document.forms[0].getAttribute("name");//bu qaydada almaq olar




value = document.forms[0].method;//hansi metod oldugunu yazdira bilerik

console.log(value);



Element secme

id gore element secme

let element;

element = document.querySelector("#todo-form");//yaxud
element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

class a gore element secme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("list-group-item")[0];//ilk li elementini almaq
element = document.getElementsByClassName("card-header");//card  headeri secme


element tag e gore secim etme

element = document.getElementsByTagName("li");//lileri sececek
element = document.getElementsByTagName("div");//seyfedeki butun divleri ala bilerik

query selector tek bir element donecek all secilmese

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");
element = document.querySelector(".list-group-item");//teki sececek
element = document.querySelector("li");//tek bir li yazdiracaq
element = document.querySelector("div");//tek bir divi yazdiracaq


queryselectorall-toplu secim ucun

element = document.querySelectorAll(".list-group-item");//butun lileri yazdiracaq.nodelist verecek
element = document.querySelectorAll("div");//butun divleri yazdiracaq

foreachle geze bilerik
element.forEach(function(el){
    console.log(el);

});

console.log(element);


element silme.ozellik deyistirme

const element = document.querySelector("#clear-todos");

console.log(element.id);//id yazdiracaq
console.log(element.className);//classin yazdiracaq
console.log(element.classList);//ayriliqda classlari yadiracaq
console.log(element.textContent);//ancaq yazilari yazdiracaq
console.log(element.innerHTML);//html etiketleri daxil butun yazilari alir
console.log(element.href);//seyfenin hrefin gosterir


style ve element ozellikleri deyistirme

console.log(element.style);//butun css ozellikleri gelir
element.className = "btn btn-primary";//rengin deyisdik
element.style.color = "#000";//yazinin rengin deyisdik
element.style.marginLeft ="40px";//saga dogru hereket etdirdik/element.href ="https://www.youtube.com/watch?v=KQwqcAmkTMY";//link elave etdik
element.target ="_blank";//linki yeni seyfede acdirdiq

console.log(element.textContent);//ancaq yazilari verir,iceriyi deyisdirmek ucun
element.textContent ="Babat Show";//deyisdik yazini
element.textContent = "<span>silin</span>"//hamsin yazi kimi qebul edecek ona gore innerhtml istifqade etmeliyik
element.innerHTML ="<span style ='color:yellow'>silin</span>";//htmlde yazdiracaq


li ustunde deyisiklikler

const elements = document.querySelectorAll(".list-group-item");//nodelist geleek
elements.forEach(function(el){
    el.style.color ="red";//todo rengin deyisdik
    el.style.background = "#eee";//todolarin arxa rengin desdim
    console.log(el);
})

ferqli secimler

let element2 = document.querySelector("li");//1ci li yazdiracaq
let element2 = document.querySelector("li:first-child");//buda hemcinin
let element2 = document.querySelector("li:last-child");//sonuncu li goturecek
let element2 = document.querySelector("li:nth-child(2)");//2ci li ni verecek

element2 = document.querySelectorAll("li:nth-child(odd)");//tek yerde olan(1,3,5) yazdiracaq
element2 = document.querySelectorAll("li:nth-child(even)");//cutleri yazdiracaq 2,4,6 ve.s

element2.forEach(function(el){
   el.style.background ="#ccc";//2,4cu todolarin arxa rengini deyisdik
   el.style.color = "white";//2,4 cu todolarin yazi rengini deyisdik

})

console.log(element2);

console.log(elements);


dom elementlerinin uzerinde gezinme

let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");


value = todoList;//list groupu yazdirdiq
value = todo;//2ci li yazdirdi
value = cardrow;//card ve row classlari geldi

child Nodes todolist usaqlari

value = todoList.childNodes;//9 text gelir oda alta kecdiyi ucun olur yanasi yazdiran zaman bu hal bas vermir setir atlamani childd kimi qebul edir
value = todoList.childNodes[0];//setir atlamalarida sayir eger istemesek

children ozelliyi ancaq usaqlari almaq ucun

value = todoList.children;//ancaq elementler 4dene gelir
value = todoList.children[0];//ilk childreni yazdiracaq
value = todoList.children[todoList.children.length - 1];//sonuncu childreni yazdirir
value = todoList.children[2].textContent ="silindi";//text contectiin deyisdik 3cunun


value = cardrow;//divi
value = cardrow.children;//childrenlerin yazdiracaq
value = cardrow.children[2];//ikinci indexdeki 3usagi geldi
value = cardrow.children[2].children;//3cu child altindakilari yazdirdi
value = cardrow.children[2].children[1].textContent ="fuck";//h5in text contentin deyisdik


value = todoList;//lilerin hamsi yazilir
value = todoList.children[0];//1ci child yazdirir
value = todoList.firstElementChild;//eynisin verecek bize
value = todoList.lastElementChild;//son child verecek bize
value = todoList.children.length;//nece elementi oldugunu yazdiracaq
value = todoList.childElementCount;//daha qisa yolla element sayinin tapdiq


value = cardrow;//divi aliriq
value = cardrow.parentElement;//usteki elementi tapir
value = cardrow.parentElement.parentElement;//bir ust elementi yazdirdiq


 element siblings

value = todo;//2ci li yazdirir
value = todo.previousElementSibling;//usteki liye yeni todo1 e getdi
value = todo.nextElementSibling;//bir sonraki todo3 gedecek
value = todo.nextElementSibling.nextElementSibling;//2adlayarq diger siblings todo4 gedir

value = todo.previousElementSibling.previousElementSibling;//null deyer dondurecek todo1den sonra siblings olmadigi ucun

console.log(value);


dinamic element yaratma
<a id="clear-todos" class="btn btn-dark" href="#">Butun taslaki sil</a>
const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.youtube.com/watch?v=KQwqcAmkTMY";
newLink.target ="_blank";

newLink.appendChild(document.createTextNode("ferqli yere get"));

textcontent
newLink.textContent ="ferqli yere git";//guvenli yontem deyil

console.log(cardbody);//sonuna nese yazini text contentle yazdira bilmerik,herseyi silib yerine kecir
cardbody.textContent ="gvdghvdgvgfv";//calisan zaman card body butun xususiyyetleri getdi ancaq yazi qaldi

text node == normal textdi her terefe silime olmadan elave ede bilirik

const text = document.createTextNode("hello");
cardbody.appendChild(text);//en sona text elave etdik
console.log(cardbody);

cardbody.appendChild(newLink);
console.log(newLink);


//dinamic element silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

//remove metodu
//todos[0].remove();//1ci lini silecek todo1
//todos[1].remove();//2ci todo2 silinecek

//remove child

//todoList.removeChild(todoList.lastElementChild);//axrincini silecek todo4
todoList.removeChild(todos[3])//4cunu silir todo4

console.log(todos);
//console.log(todoList);


//elementleri deyistirme replace

//<h5 class="card-title" id="tasks-title">Todolar</h5>

const cardbody = document.querySelectorAll(".card-body")[1];

const newElement = document.createElement("h3");

newElement.className = "card-title";
newElement.id = "task-title";
newElement.textContent = "yeni todolar"

//kohne element
const oldElement = document.querySelector("#tasks-title");

//deyisdirmek
cardbody.replaceChild(newElement,oldElement);
console.log(newElement);



//dinamic atribut deyistirme ekleme ve silme

const todoInput = document.getElementById("todo");
let element;

element = todoInput;//inputu yazdirir
element = todoInput.classList;//classlarin yazdirir(domtocenlist)
//element = todoInput.classList.length;//sayini yazdiracaq

//class elave et

todoInput.className = "form-control";//veya
//todoInput.classList.add("newclass1");//elave olundu
//todoInput.classList.add("newclass2");//elave olundu
//todoInput.classList.remove("form-control");//silindi


element = todoInput;
element = todoInput.placeholder;//veya
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","hello");//place icini deyisdik
todoInput.setAttribute("title","Input");//omayai elave etdik
todoInput.removeAttribute("name")//atribut silme

element = todoInput;
//element = todoInput.hasAttribute("required");//varsa tru3e,yoxsa false yazacaq
//element = todoInput.hasAttribute("name");//true donderdi oldugu ucun

console.log(element);
*/


