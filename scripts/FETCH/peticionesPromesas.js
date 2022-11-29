'use strict'; 

//Fetch (proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red); 
//método que permite realizar peticiones ajax (peticiones asíncronas a un servidor)- Llamada a un servicio rest; 
//Consumo de servicios externos (apis, recursos, backend, etc); 

let user = []; 

    //encadenamiento de las promesas; 
    getUsuarios()
    .then(data => {
        return data.json() 
    })
    .then(usuarios =>{
        listaUsuarios(usuarios.data);
        
        return getJaneth(); 
    })
    .then(data =>{
        return data.json(); 
    })
    .then(usuario =>{
        console.log(usuario.data.last_name); //Accedemos directamente a los datos de este objeto en específico; 

        let imagen = document.querySelector('.imagen'); 

        let newImage = document.createElement('img'); 
        newImage.src = usuario.data.avatar; 
        newImage.style.width = '100px'; 
        imagen.append(newImage); //agregamos la imágen que trae la api como el avatar; 
    })


    //-----------Functions------------//
    function getUsuarios(){
        return fetch('https://reqres.in/api/users')
    }

    function getJaneth(){
        return fetch('https://reqres.in/api/users/2')
    }

    function listaUsuarios(user){
        user.map((user,i)=>{
            let nombre = document.querySelector('.usuarios');
            nombre.append(i+1 + '. ' + user.first_name + '  ');

            document.querySelector('.loading').style.display = 'none'; 
        });
    }
    

    //Podemos crear promesas con la función new promise(); para cuando necesitamos hacerlo en forma de método o función 
    //aparte a donde ya las estamos generando; 
