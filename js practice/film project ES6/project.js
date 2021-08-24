const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films ");


//object yaratmir stacit etmisik

//BUTUN EVENTLERI YUKLEME

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){//local s ana s yazdirma
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);


    });

    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);

    
}

function addFilm(e){
    const title = titleElement.value;//icindeki deyeri almaq
    const director = directorElement.value;
    const url = urlElement.value;


    if(title === "" || director === "" || url === ""){//her hansi biri bossa
        //xeta mesaji
       UI.displayMessages("bos yerleri doldurun...","danger")//1.mesaji yeri,2.tipi(danger,success ve s);


    }
    else{
        //yeni film yaratma
        const newFilm = new Film(title,director,url);


        UI.addFilmToUI(newFilm);//arayuze film ekleme
        storage.addFilmToStorage(newFilm);//storage film yerlesdirme
        UI.displayMessages("Film elave edildi...","success");//bildiris mesaji
    }

    //inputda qalan yazilari silme
   UI.clearInputs(titleElement,directorElement,urlElement);






    e.preventDefault();
}
function deleteFilm(e){
    //console.log(e.target)//eventi yarandigi yeri gosterir

    if(e.target.id === "delete-film"){//id busa sil
        UI.deleteFilmFromUI(e.target);//ani gonderir
        Storage.deleteFilmFormStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);//qardasi tap sil
        
        
        UI.displayMessages("silme islemi baslat...","success");

    }
}
function clearAllFilms(){//qaldirma islemleri
    if(confirm("eminsen?...")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();

    }
    
}
UI.prototype.clearAllFilmsFromUI = function(){

    const filmList = document.querySelector("#films");
    
    //filmList.innerHTML = "";//bu yol yavas calisir
    while(filmList.firstElementChild !== null){//child oldugu surece
        filmList.firstElementChild.remove();//childlari silecek 

    }
}