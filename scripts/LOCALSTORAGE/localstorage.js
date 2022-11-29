'use strict';

window.addEventListener('load',()=>{
    //Comprobación de que el navegador si sea compatible con el localstorage; 
    if(typeof(Storage) != "undefined"){
        console.log("Esta disponible el localstorage");
    }else{
        console.log("NO esta disponible el localstorage");

    }

    // El almacenamiento web, a veces conocido como almacenamiento DOM, 
    // proporciona a las aplicaciones web métodos y protocolos para almacenar datos del lado del cliente.

    //Para almacenar datos en el localstorage (.setItem), necesitamos darle una clave y un valor, así vamos a poder 
    //detectar cada elemento que halla allí guardado; 
    localStorage.setItem("valor1","Este es mi primer elemento en el localstorage");
    localStorage.setItem("valor2","Este es el segundo elemento");

    //Para leer un dato almacenado en el localstorage (.getItem), podemos ubicarlo por medio de su clave
    let obj = document.querySelector('.local');
    let p = document.createElement("p");
    p.innerHTML = localStorage.getItem("valor1"); 
    obj.append(p);

    //Para almacenar un objeto en el localstorage debemos primero convertirlo a un string por el intercambio de los datos; 
    let persona = {
        nombre: "Julián",
        apellido: "Castrillón",
        años: 20
    }

    localStorage.setItem("persona",JSON.stringify(persona)); //Conversión; 
    //De no realizar la conversión lo que puede suceder es que se almacene como [object object];

    //Ahora cuando queremos traer el objeto, para que pueda ser un objeto JSON usable, necesitamos convertirlo
    //de nuevo, de no ser así, lo que nos trae es un string, y no podremos acceder a las propiedades de ese objeto. 
    let conversion = JSON.parse(localStorage.getItem("persona")); //conversión necesaria; 
    console.log(conversion); 
    //De esta manera conversión nos trae el objeto con el cual podremos interactuar con sus propiedades; 

    //Para eliminar uno de los datos del localStorage desde el código (.removeItem), podemos realizar; 
    localStorage.removeItem("valor2"); //Lo ha eliminado; 

    //Para vacear todo el localStorage desde el código (.clear) hacemos; 
    // localStorage.clear();

    //NOTA: Si al ejecutar esto, no se nos elimina la información del documento lo más posible es porque se está 
    //ejecutando en cascada por lo cual ya luego de pintado no se elimina a no ser que yo le pase un innerHTML; 

    
    //---------------------Ejercicio LOCALSTORAGE-----------------------//
    //añadir en lista, borrar; 
    let añadir = document.querySelector('.añade');
    
    añadir.addEventListener('submit',()=>{
        let pelicula = document.querySelector('#pelicula').value;
        if(pelicula.length >= 1 ){
            localStorage.setItem(pelicula,pelicula); 
        };
    });

    //Crear una lista y añadir cada elemento; 
    let lista = document.querySelector('.lista'); 
    for(let i in localStorage){
        if(typeof(localStorage[i]) == "string"){
            let li = document.createElement("li"); 
            li.append(localStorage[i]); 
            lista.append(li);
        }
    }
    
    //Eliminar elementos;
    let eliminar = document.querySelector('.quitar'); 
    eliminar.addEventListener('submit',()=>{
        let pelicula = document.querySelector('#eliminar').value; 
        if(pelicula.length >= 1){
            localStorage.removeItem(pelicula,pelicula);
        }
    }); 

});

