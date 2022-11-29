'use strict'; 

window.addEventListener('load',()=>{

    $(document).ready(function(){   
        
        var button = $('#enlazar'); // Botón para añadir links; 

        // Para cargar la lista inmediatamente cargue la página; 
        reload();         

        button.click(function(){
            // Atrapamos el valor que tiene la caja de texto; 
            var textBox = $('#entrada');
            // ul para añadirle el elemento nuevo; 
            var lista = $('#lista'); 

            lista.append('<li><a href="'+textBox.val()+'"></a></li>');
            textBox.val("");  
            reload();   
        }); 
       
    }); 

    function reload(){
        var elementos = $('a'); 
        // Forma de recorrer un arreglo de elementos con Jquery; 
        elementos.each(function(){
            var that = $(this); 
            var texto = that.attr("href"); // La función attr obtiene lo que tenga la propiedad que le estamos indicando 
            // En este caso sería el href que tiene la etiqueta a; 

            // Con la función text, estamos enviando el href como el texto de la etiqueta; 
            that.text(texto); 
            that.attr("target","_blank"); 
        });      
    }
}); 