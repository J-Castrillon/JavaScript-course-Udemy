'use strict';

window.addEventListener('load',()=>{
    let pelicula = {
        pelicula1:{
            titulo: "Batman",
            año: 2020,
            pais: "US"
        },
        pelicula2:{
            titulo: "Superman",
            año: 2010,
            pais: "US"
        },
        pelicula3:{
            titulo: "Rory",
            año: 2008,
            pais: "Colombia"
        }
    };

    let obj = document.querySelector('.json');
    let title = document.createElement("h2");
    title.innerHTML = "Películas ---- JSON";
    obj.append(title);
    
    

    for(let index in pelicula){
        let p = document.createElement("p");
        obj.append(p);
        p.append(pelicula[index].titulo + " - " + pelicula[index].año);
    }


    //Ahora cuando queremos traer el objeto, para que pueda ser un objeto JSON usable, necesitamos convertirlo
    //de nuevo, de no ser así, lo que nos trae es un string, y no podremos acceder a las propiedades de ese objeto. 
    //JSON.parse; conversión necesaria;
});

