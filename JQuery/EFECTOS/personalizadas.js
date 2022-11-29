'use strict'; 

window.addEventListener('load',()=>{
    $(document).ready(function(){
        var customizar = $('#custo'); 
        var animar = $('#animar'); 

        // Las animaciones personalizadas se hacen con la función animate() y dentro de ella, se 
        // le pasan las instrucciones css como objetos JSON;  
        animar.click(function(){
            // función de animaciones; 
            customizar.animate({
                marginLeft: '50px',
                width: '170px',
                fontSize: '120%'
            },'slow').animate({
                marginTop: '50px',
                fontSize: '100%',
                borderRadius: '999px',
                height: '170px'
            },'slow'); 
        }); 
    }); 
})