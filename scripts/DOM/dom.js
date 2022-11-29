'use strict'; 

window.addEventListener('load',function() {
    let atrapa = document.querySelector('#parrafo');
    atrapa.innerHTML = "Modificación DOM con JavaScript";
    let separacion = this.document.createElement("hr");
    atrapa.append(separacion);

    let modiTitle = document.getElementById('titulo');
    modiTitle.style.color = "#63DCC2"; 

    let subtitle = document.querySelector("#subtitle");
    subtitle.innerHTML = "Modificando cosas del DOM"; 

    let numeros = document.querySelector("#numeros");
    let parrafo = document.createElement("p");
    

    for(let i = 0; i<5; i+=1){
        let numero = Math.round(Math.random()*10);
        let salto = document.createElement("br");
        parrafo.append(`Element: ${numero}`);
        parrafo.append(salto);
        numeros.append(parrafo); 
    }

    let final = document.createElement("hr");
    numeros.append(final);
    
    //---------------------------------------------------------------------------------//
    let cantidad = document.getElementsByTagName("div");
    console.log(cantidad);

    for(let valor in cantidad){

        if(cantidad[valor].className == "consola"){
            cantidad[valor].style.background = "black";
            cantidad[valor].style.color = "green";

        }
    }

})
