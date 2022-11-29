'use strict'; 

window.addEventListener('load',()=>{
    $(document).ready(function(){
        // Efectos fijos en JQuery;
        var frame = $('#modifications'); 
        var show = $('#show');
        var hide = $('#hide');
        var fadeIn = $('#fadeIn');
        var fadeOut = $('#fadeOut');
        var fadeTo = $('#fadeTo');
        var slideUp = $('#slideUp');
        var slideDown = $('#slideDown');
        var toggle = $('#toggle');

        show.click(function(){
            frame.show("slow"); 
        }); 

        hide.click(function(){
            frame.hide('slow', function(){
                alert("Se ha ocultado el cartel"); // Función de callback que se cumple luego de culminar 
                // lo que hace el efecto; 
            }); 
        }); 

        fadeIn.click(function(){
            frame.fadeIn('slow'); 
        }); 
        
        fadeOut.click(function(){
            frame.fadeOut('slow'); 
        });

        // Hace las dos acciones en un solo click; 
        fadeTo.click(function aparece(){
            frame.fadeTo("slow",0); 
        }); 

        fadeTo.click(function desaparece(){
            frame.fadeTo("slow",1); 
        });

        slideUp.click(function(){
            frame.slideUp("slow"); 
        }); 
        slideDown.click(function(){
            frame.slideDown("slow"); 
        });
        
        toggle.click(function(){
            frame.toggle("slow"); 
        }); 
    }); 
}); 