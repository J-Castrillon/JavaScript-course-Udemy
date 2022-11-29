'use strict'; //Alto tipado; 

/*
Pida 6 números por pantalla y los meta en un arreglo
Mostrar el arreglo entero en la página. 
Ordenarlo y mostrarlo
Invertir su orden y mostrarlo
Mostrar cuantos elementos tiene el arreglo
Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y el indice
*/

let arreglo = [];

for(let i=0; i<6; i+=1){
    arreglo[i] = parseInt(prompt("Ingrese por favor un número"));
}

for(let element in arreglo){
    let numero = parseInt(element)+1;
    document.write(`Número ${(numero)}: `, arreglo[element],"<br>");
}

document.write("<br>La cantidad de elementos del arreglo total es: ",arreglo.length);

console.log("Arreglo ordenado \n",arreglo.sort());
console.log("Arreglo con el orden invertido: ",arreglo.reverse());

let buscar = parseInt(prompt("Ingrese el número que desea buscar"));

let busqueda = arreglo.find(element => element==buscar); //Encuentra el elemento y lo muestra;
let comprobacion = arreglo.some(element => element==buscar); //Devuelve un booleano de si hay o no el dato
let indice = arreglo.findIndex(element => element==buscar); //Devuelve la posición del dato;

console.log(comprobacion+" "+indice+" "+busqueda);

