'use strict'; 

window.addEventListener('load', ()=>{
    class carro{
        constructor(marca,modelo){
            this.marca = marca; 
            this.modelo = modelo; 
        }

        años(){
            let date = new Date(); 
            return date.getFullYear()-this.modelo; 
        }
    }

    let micarro = new carro("Chévrolet",2020); 
    console.log(`Mi carro tiene ${micarro.años()} años`);

    // Forma de sacar la fecha completa; 
    console.log(new Date()); 


    //métodos de matemáticas en JavaScript; 
    console.log(Math.PI);
    console.log(Math.round(Math.random()*10)); //Redondea el número y lo multiplica por 10 para dar un entero del 1 al 10; 
    
    
});