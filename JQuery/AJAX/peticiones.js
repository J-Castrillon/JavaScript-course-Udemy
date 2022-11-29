'use strict'; 

window.addEventListener('load',()=>{

    $(document).ready(function(){   
        // Método .get(); 
        var content = $('#loadAjax'); 

        // content.load("https://reqres.in/");
        $.get("https://reqres.in/api/users",({page: 2}, function(response){
            response.data.forEach((element, index)=>{
                content.append('<p> Nombre: '+element.first_name+" <br> Email: "+element.email+'</p>'); 
            }); 
        })); 
       
        // método .post(); 
        // La información se transporta por medio de canales diferentes a pesar de utilizar la misma url; 
        //le damos como primer parámetro la url de la api;
        $.post("https://reqres.in/api/users",({  
            // Y como segundo parámetro, el nuevo usuario o lo que deseamos enviar; 
            name: "Juliancho",
            edad: 20
        }
        ),function(response){
            // Como tercer parámetro, una función de callback que puede ser por ejemplo para mostrar la respuesta; 
            console.log(response);
        }); 

        var form = $('#post');
        var name = $('#nombre'); 
        var email = $('#correo');

        

        form.submit(function(e){
            e.preventDefault(); // No permite que redirija la página; 

            const usuario = {
                name: $('input[id="nombre"]').val(),
                email: $('input[id="correo"]').val()
            }
            
            $.post($(this).attr('action'), usuario, function(response){
                console.log(response); 
            }).done(function(){
                alert("Se ha enviado la información"); 
            })

            return false; 
        }); 
    }); 
}); 















//  $.get("https://reqres.in/api/users",({page: 3}, function(response){
    //console.log(response); 

    // Estaríamos ingresando una función como en javascript;  
    // response.data.forEach((element,index)=>{
    //     content.append('<p>'+ element.first_name +"<br> "+ element.email + '</p>'); 
    // }); 
// }))