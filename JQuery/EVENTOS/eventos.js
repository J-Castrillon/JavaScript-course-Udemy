'use strict'; 

window.addEventListener('load',()=>{

    $(document).ready(function(){
        var contenedor = $('.caja'); 

        // // Entra al contenedor; 
        // contenedor.mouseover(function(){
        //     $(this).css("background","green"); 
        // }); 

        // // Sale del contenedor; 
        // contenedor.mouseout(function(){
        //     $(this).css("background","blue");
        // }); 

        // El evento Hover, permite dos funciones de callback en JQuery;   
        contenedor.hover(function entra(){
            $(this).css("background","aquamarine");
        },function sale(){
            $(this).css("background","blue");
        }); // Ahorramos mucho más código haciendolo de esta manera; 


        contenedor.click(function(){
            var elemento = $(this);
            elemento.css("background","green"); 

        }); 
        contenedor.dblclick(function(){
            var elemento = $(this); 
            elemento.css("background","pink"); 
            elemento.css("color","black"); 
            
        }); 

        var cajaTexto = $('#name');

        // Si tenemos seleccionada la caja de texto; 
        cajaTexto.focus(function(){
            $(this).css("border","2px solid green"); 
        })

        // Si salimos de la caja de texto; .val() obtiene lo que tiene la caja de texto dentro, como un value();  
        cajaTexto.blur(function(){
            $(this).css("border","2px solid blue"); 
            // Sacar lo que tiene el input en el anterior contenedor;
            contenedor.text($(this).val()).css("color","white");
        })

        // Dejamos presionado el click y cuando soltamos; 
        contenedor.mousedown(function(){
            // Presionado; 
            $(this).css("border-color","red"); 
        }); 
        contenedor.mouseup(function(){
            // Soltamos; 
            $(this).css("border-color","black"); 
        }); 

        // Capturar el movimiento del ratón en coordenadas actuales; 
        $(document).mouseover(function(){
            //                  Coordenadas en X,      Coordenadas en Y; 
            // console.log("en X: "+event.clientX+" en Y: "+event.clientY); 
            var sigueme = $('.sigueme'); 
            sigueme.css("left",event.clientX).css("top",event.clientY); // el contenedor sigue el ratón; 
            // $("body").css("cursor","none"); Desaparecer el cursor; 
        }); 


    }); 
}); 