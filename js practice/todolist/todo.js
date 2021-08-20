//elementleri secirik
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){//butun event listenerler
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);//seyfe yuklenende todolari yazilir
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}
function clearAllTodos(e){
    if(confirm("hamsinin silmeye eminsen?...")){
         //uzden todo qaldirma
         //todoList.innerHTML ="";//syfeni temizleyir yavas yontem

         //console.log(todoList.firstElementChild);
         while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);


         }
         localStorage.removeItem("todos");
         


    }

}
function filterTodos(e){
    //console.log(e.target.value);
    const filterValue = e.target.value.toLowerCase();
    const listItem = document.querySelectorAll(".list-group-item");

    listItem.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){
            //tapmadi

            listItem.setAttribute("style","display : none !important");
        }
        else{
            listItem.setAttribute("style","display : block");
        }

    })
}

function deleteTodo(e){
    //console.log(e.target);

    if(e.target.className === "fa fa-remove"){
        //console.log("sil");
        e.target.parentElement.parentElement.remove();// x vuranda lini silmek 
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","to do silindii...");
    }

}
function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);//arreyden deyer silme

        }
    });

   localStorage.setItem("todos",JSON.stringify(todos));

}
function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);

    })

}
function addTodo(e){
   const newTodo = todoInput.value.trim();//input deyer alma,trim bosluqlari legv edir
   
   if(newTodo === ""){//new todonun deyeri bossa
    /*
    <div class="alert alert-danger" role="alert">
                    This is a danger alert—check it out!
                  </div>
                  */

      showAlert("danger","lutfen todo giriniz...");

   }
   else{//bos deyilse
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);//todolarai local storage ekleme
    showAlert("success","Eklendi...");
   }

  



   e.preventDefault();
}

function getTodosFromStorage(){//storagede butun todolari almaq
    let todos;
    if(localStorage.getItem("todos") === null){
        todos =[];//yoxsa bos basladilacaq
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;

}
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
    
}
function showAlert(type,message){
    const alert = document.createElement("div");

    alert.className =`alert alert-${type}`;//xeberdarliq mesajlari

    alert.textContent = message;


    firstCardBody.appendChild(alert);//yeni yaratdigimizi ekranda yazdirmaq
    //alert.remove();//alerti silmek zaman; gorunmur settimeout la edeceyik

    window.setTimeout(function(){
        alert.remove();

    },1000);
}
function addTodoToUI(newTodo){//string deyerini listitem olaraq UI ekleyecek
   /*
   <li class="list-group-item d-flex justify-content-between">
                    ToDo1
                    <a href="#" class="delete-item">
                        <i class="fa fa-remove"></i>
                    </a>
                </li>
  */ 

  //listitem yaratma
  const listItem = document.createElement("li");
  //link yaratma
  const link = document.createElement("a");
  link.href="#";
  link.className = "delete-item";
  link.innerHTML = "<i class='fa fa-remove'></>";

  listItem.className = "list-group-item d-flex justify-content-between";

  //text node todo1 ekleme
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  //Todo liste list item elave etme
  todoList.appendChild(listItem);
  todoInput.value = "";//inputda qalan yazini temizlemek

}








