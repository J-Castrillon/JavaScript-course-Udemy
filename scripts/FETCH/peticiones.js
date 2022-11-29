'use strict'; 

//Fetch (proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red); 
//método que permite realizar peticiones ajax (peticiones asíncronas a un servidor)- Llamada a un servicio rest; 
//Consumo de servicios externos (apis, recursos, backend, etc); 

let user = []; 


fetch('https://reqres.in/api/users') //Accedemos a los datos remotos, de apis, servicios, backend, etc; 
    
    //Promesas
    .then(data => {
        return data.json() //Formateamos los datos capturados a JSON(); (JavaSCript object notation);
    })
    .then(usuarios =>{
        
        //Empujamos los datos capturados anteriormente al arreglo user para mostrarlos o almacenarlos posteriormente; 
        user = usuarios.data; 
        console.log(user);

        //Recorremos para mostrar datos; mapeo(arreglo, índice);
        user.map((user,i)=>{
            let nombre = document.querySelector('.usuarios');
            nombre.append(i+1 + '. ' + user.first_name + '  ');

            document.querySelector('.loading').style.display = 'none'; 
        });
    });
    
/*
    NOTA: Es como en react cuando declaramos el arreglo con las dos variables, la del dato inicial, la que empuja los datos nuevos
    y el estado inicial
*/
