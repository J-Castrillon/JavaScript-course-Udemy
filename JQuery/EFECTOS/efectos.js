'use strict'; 

window.addEventListener('load',()=>{
    $(document).ready(function(){
        // Funciones;
        // Función para ocultar y mostar algo en pantalla; 
        var content = $('.ableDisable'); 
        var able = $('#able'); 
        var disable = $('#disable'); 

        // Estados iniciales; 
        able.hide(); 

        // Primer tipo de efecto, el más simple; 
        // able.click(function(){
        //     able.hide(); 
        //     disable.show();
        //     content.show("normal"); 
        // })

        // disable.click(function(){
        //     disable.hide(); 
        //     able.show(); 
        //     content.hide("normal"); 
        // }); 

        // Segundo tipo, fade; 
        // able.click(function(){
        //     able.hide(); 
        //     disable.show();
        //     content.fadeIn("normal"); 
        // })

        // disable.click(function(){
        //     disable.hide(); 
        //     able.show(); 
        //     content.fadeOut("normal"); 
        // }); 

        // Tercer tipo, fadeTo(velocidad,opacidad);
        // able.click(function(){
        //     able.hide(); 
        //     disable.show();
        //     content.fadeTo("normal",1); 
        // })

        // disable.click(function(){
        //     disable.hide(); 
        //     able.show(); 
        //     content.fadeTo("normal",0); 
        // }); 
        
        // Cuarto tipo, toggle, hace todo solo; 
        var unico = $('#unico'); 
        unico.click(function(){
            content.toggle("normal"); 
            // Podemos probar con el fadeToggle(""), que cambia la transición;
            // O también con el slideToggle(""), que hace la transición como un despliegue; 
        }); 

        // Quinto tipo, slide; 
        able.click(function(){
            able.hide(); 
            disable.show();
            content.slideDown("normal"); 
        })

        disable.click(function(){
            disable.hide(); 
            able.show(); 
            content.slideUp("normal"); 
        }); 

    }); 
}); 