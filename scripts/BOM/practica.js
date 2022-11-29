'use strict';

window.addEventListener('load',()=>{
    //Ejercicio práctico; 
    /*
     1. formulario: nombre, apellido, edad. 
     2. Boton de enviar el formulario: evento submit
     3. mostrar los datos por la pantalla. 
     4. Botón que al darle click nos muestra los datos actuales del formulario
    */

     let formulario = document.querySelector('#formulario');

     formulario.addEventListener('submit',()=>{
        console.log("Evento submit capturado");
         let nombre = document.querySelector('#nombre').value;
         let apellido = document.querySelector('#apellido').value;
         let edad = document.querySelector('#edad').value;


         let mostrar = document.querySelector('.mostrar');
         let parrafo = document.createElement("p");
         mostrar.append(parrafo);

         parrafo.innerHTML = nombre+" "+apellido+" "+edad;
         console.log(nombre+" "+apellido+" "+edad);

     });
});  
