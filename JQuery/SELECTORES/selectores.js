'use strict'; 

window.addEventListener('load',() =>{

    //Selectores; 
    // El dolar hace referencia a JQuery, (selector).método/evento(función de callback o específico del método); 
    $(document).ready(()=>{
        console.log("JQuery cargado correctamente"); 

        // Ejemplo: donde al método le pasamos como parámetros, clave y valor; 
        // Podemos ir encadenando las llamadas a los métodos;  
        $("#titulo").css("background","blue").css("color","white"); 
        $('#subtitulo').css("background","green").css("color","white");

        // La función de flecha no es funcional en JQuery;  
        // $('.aplicar').click(function (){
        //     $(this).addClass("con_borde"); 
        //     console.log("Fue presionado el párrafo"); 
        // });

        // Selectores de etiquetas; 
        var parrafos = $('p').css("cursor","pointer"); 

        parrafos.click(function(){
            var elemento = $(this); 
            if(!elemento.hasClass('con_borde')){
                elemento.addClass('con_borde'); 
            }else{
                elemento.removeClass('con_borde'); 
            }

            if(!elemento.hasClass('tamaño')){
                elemento.addClass('tamaño');
            }else{
                elemento.removeClass('tamaño');
            }
        }); 

        // Selectores de atributos accedemos por medio de corchetes; 
        $('[title="google"]').css("background","#ccc");
        $('[title="Facebook"]').css("background","red");

        // find y parent, saltar entre elementos del dom, o encontrar elementos específicos; 
        var busqueda = $('ul').find('[title ="Facebook"]'); 
        console.log(busqueda); 

        var busquedaGeneral = $('ul').eq(0).parent().find('[title ="Facebook"]');
        console.log(busquedaGeneral);

    });

}); 