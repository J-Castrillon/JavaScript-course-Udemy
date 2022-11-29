'use strict';


window.addEventListener('load',function(){
    //Dimensiones de la pantalla o del documento;
    console.log(screen.height); 
    console.log(screen.width); 
    console.log(window.innerHeight); //No recorta, mide todo el display; 

    //Nuestra url;
    console.log(window.location);

    
    //------------------Eventos----------------
    let boton = document.getElementById('boton');

    //Cuando se presiona el botón, realiza lo que hay dentro de la función anónima; 
    boton.addEventListener('click', () =>{
        console.log("Presionaste el botón");
        let color = boton.style.background; 
        if(color == "green"){
            boton.style.background = "red";
        }else{
            boton.style.background = "green";
        }
    })

    //Otros tipos de evento; 
    boton.addEventListener('mouseover',()=>{
        boton.style.background = "blue"; //Pasa por encima del botón; 
    });

    boton.addEventListener('mouseout',()=>{
        boton.style.background = "gray"; //Sale del botón;
    });


    let texto = document.getElementById('nombre');
    texto.addEventListener('focus',()=>{
        console.log("estas dentro del campo de texto"); //Está dentro del botón;
    });

    texto.addEventListener('blur',()=>{
        console.log("estas fuera del campo de texto"); //Sale del botón
    });

    //Recibe la entrada por el teclado; 
    texto.addEventListener('keydown',(event,e)=>{
        console.log("Estas pulsando la tecla: ",String.fromCharCode(event.keyCode));
    });

    //Recibe la entrada por el teclado; 
    texto.addEventListener('keypress',(event)=>{
        console.log("presionaste la tecla: ",String.fromCharCode(event.keyCode));
    })

    //---------------Timers--------------; 
    //---Set interval y set timeOut--------------; 
    let contador = 0; 
    let bool = false; 

    let tiempo = document.querySelector(".tiempo");
    let parra = document.createElement("p");
    tiempo.append(parra);

    let interval = setInterval(()=>{
        contador += 1; 
        console.log(contador);

        if(bool == false){
            bool = true; 
            parra.innerHTML = "Aparezco";
        }else{
            bool = false; 
            parra.innerHTML = "";
        }
        
        if(contador == 1){
            //Detiene el timer, para la variable que lo contiene; 
            this.clearInterval(interval);
            console.log("Contador detenido");
            //Para volverlo a iniciar podemos poner el timer dentro de una función; 
        }
    },1000);


    //------------------Validación de formularios----------------------//
    
    let botonValidar = document.querySelector('#botonvalidar');
    
    botonValidar.addEventListener('click',()=>{
        let age = parseInt(document.getElementById('años').value);
        console.log(age);
        let error = document.querySelector('#error')
        let campo = document.querySelector('#años');

        if(!isNaN(age) && age>0){
            console.log("Validado");
            error.innerHTML = "";
            campo.style.border = "none";
        }else{
            campo.style.border = "solid 2px";
            campo.style.borderColor = "orange";
            error.innerHTML = "Completa este campo por favor <br>";
            console.log("error");
        }
    });

    
});


//Función de redirección; 
function redireccion(url){
    window.location.href = url;
}

//Abre una pestaña nueva, del tamaño que le pidamos, puede ser para un login de google u otros.
function abrir(url){
    window.open(url,"","width=400px,height=400px");
}
//Ejemplo del login de google para una confirmación de email. 
// abrir("https://accounts.google.com/signin/v2/identifier?hl=es-419&continue=https%3A%2F%2Fwww.google.com%3Fhl%3Des-419&ec=GAlA8wE&flowName=GlifWebSignIn&flowEntry=AddSession");



