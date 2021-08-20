/* Local storage & session storage

//session storage seyfe aciq qaldigi muddetde depolanir bagladigimiz sildiyimiz teqdirde silinir.
 //key ve value deyerleri alir(sebze,xiyar);

 //buttonlar

 //const add = document.querySelector("#add");
 //const delet = document.querySelector("#delete");
 //const clear = document.querySelector("#clear");

//inputlar

//const addkey = document.querySelector("#addkey");
//const addvalue = document.querySelector("#addvalue");
//const deletekey = document.querySelector("#deletekey");

//add.addEventListener("click",addItem);
//clear.addEventListener("click",clearItems);
//delet.addEventListener("click",deleteItem);

//function addItem(e){
//    sessionStorage.setItem(addkey.value,addvalue.value);
//}

//function deleteItem(e){
//    sessionStorage.removeItem(deletekey.value);//problem var bax sonra

//}

//function clearItems(e){
//    sessionStorage.clear();

//}


//local storage-biz silmesek orda qalir

//set item
//localStorage.setItem("rsmos","burpe");
//localStorage.setItem("rsmos1",50);//stringe cevirib yazilir

//get item
//const value = localStorage.getItem("tekrar");
//console.log(value);
//console.log(typeof value);

//clear 
//localStorage.clear();

localStorage.setItem("rsmos","burpe");
//localStorage.setItem("rsmos1",50);

//console.log(localStorage.getItem("sport"));//deyer olmadigi ucun null donecek

if(localStorage.getItem("rsmos") === null){//sport
    console.log("yoxdur");
}
else{
    console.log("tapildi");
}

//local storage array yazdirma

const todos =["todo1","todo2","todo3",];

//localStorage.setItem("todos",todos);//adi yazdiracaq

//console.log(localStorage.getItem("todos"));//string olaraq gelecek

//jsondan iki element alacaqiq arreyi yaz

localStorage.setItem("todos",JSON.stringify(todos));//arrey kimi yazacaq

//const value = localStorage.getItem("todos");
const value = JSON.parse(localStorage.getItem("todos"));
console.log(value);
*/

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoInput.value;

    let todos;

    if(localStorage.getItem("todos") === null){
        todos =[];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));

    }


   todos.push(value);

   localStorage.setItem("todos",JSON.stringify(todos));






  e.preventDefault();
}