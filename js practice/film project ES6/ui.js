//function UI(){

//}
//es6
class UI{

    static addFilmToUI(newFilm){

        //console.log(newFilm);
            /*
             <tr>
            <td><img src="" class="img-fluid"> </td>
             <td></td>
             <td></td>
             <td><a href="#" id="delete-film"></a></td>
            </tr>
            */
        
            const filmList = document.querySelector("#films");
            //console.log(filmList);
            filmList.innerHTML += `
            <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
             <td>${newFilm.title}</td>
             <td>${newFilm.director}</td>
             <td><a href="#" id="delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
    
            `;
    }
    //inputun deyerini bosa beraber etmek
    static clearInputs(element1,element2,element3){
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }
    
    //xeta mesaji yazdirma
    static displayMessages (message,type){
        const cardBody = document.querySelectorAll(".card-body")[0];
    
        //alert divini yaratmaq
        const div = document.createElement("div");
    
        div.className = `alert alert-${type}`;//type-success,danger ve s.
        div.textContent = message;
    
        //ekleme
        cardBody.appendChild(div);//orda qalir
    
        //belli muddet sonra silinmeyin isteyirikse
    
        setTimeout(function(){
            div.remove();//silmek
    
        },1000);
    
    
    }
    static loadAllFilms(films){
        const filmList = document.querySelector("#films");
        //storage den melumat yazdirmaq
        films.forEach(function(film){
            filmList.innerHTML += `<tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
             <td>${film.title}</td>
             <td>${film.director}</td>
             <td><a href="#" id="delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>`;
        });
    
    }
      static deleteFilmFromUI(element){//filmi silme
        element.parentElement.parentElement.remove();//td ye gelir tr silir
    }
}

