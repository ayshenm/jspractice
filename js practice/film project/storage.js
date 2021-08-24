function Storage(){

}

Storage.prototype.addFilmToStorage = function(newFilm){
    //console.log(newFilm);
    let films = this.getFilmsFromStorage();//arreyi almaq

    films.push(newFilm);//eleve edeceyik

    /* //arreyin ici bos oldugunu dusunub ojectleri elave edrik
       [
           {title:"aysen",director:"mirza",url:"yetim"},//icine string deyi object yazmis oluruq
           {title:"aysen",director:"mirza",url:"yetim"},
       ]

     */

       localStorage.setItem("films",JSON.stringify(films));//stringe cevrilir

    
}
Storage.prototype.getFilmsFromStorage =  function(){
    let films;

    if(localStorage.getItem("films") === null){//film yoxsa bos ARREY  YARATDIQ
        films =[];

    }
    else{//null donmurse
        films = JSON.parse(localStorage.getItem("films"));//ARREYE CEVIRDIK JSON PARSE



    }
    return films;//funksiyada arreyi donderme

}
Storage.prototype.deleteFilmFormStorage = function(filmTitle){
     let films = this.getFilmsFromStorage();

     films.forEach(function(film,index){
         if(film.title === filmTitle){//splice silme
            films.splice(index,1);

         }

     });

     localStorage.setItem("films",JSON.stringify(films));

}
Storage.prototype.clearAllFilmsFromStorage = function(){//local s temizlenecek
    localStorage.removeItem("films");//ve gorunmeyecek ekrandada lsdede

}