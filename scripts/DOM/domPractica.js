'use strict';


window.addEventListener('load',function(){
    let span = document.getElementById('titulo'); 
    span.style.color = "aquamarine";


    let titulo = this.document.getElementById('parrafo');
    titulo.innerHTML = "Modificación del DOM";
    let separacion = document.createElement("hr");
    titulo.append(separacion);


    let consola = document.querySelector('#numeros');
    let nuevo = document.createElement("p");
    for(let i=0; i<5; i+=1){
        let salto = document.createElement("br");
        nuevo.append(`Hackeado #: ${i}`,salto);
        consola.append(nuevo);
    }

    let final = document.createElement("hr");
    consola.append(final);

    let subtitle = document.getElementById("subtitle")
    subtitle.innerHTML = "Modificando cosas del dom";

    //Ahora para pintar la consola: 
    let array = document.getElementsByTagName('div');
    for(let element in array){
        if(array[element].className = 'consola'){
            array[element].style.background = "black";
            array[element].style.color = "green";
        }
    }

    

    


});