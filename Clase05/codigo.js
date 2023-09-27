/* const deEuroAdolar =euro=>`el cambio a dolar es ${euro*1.2}`; 
console.log(deEuroAdolar(20)) */

/* function deEuroAdolar(euro){
    return alert(`el cambio a dolar es ${euro*1.2} `)
}
deEuroAdolar(Number(prompt("decime la cantidad de euros")));  
  */

/*------SWITCH----*/

let semaforo = "ROJO"

switch(semaforo.toLowerCase()){
    case "rojo":
        console.log("no avanzar!!"); 
        break;
    case "amarillo":
        console.log("precuación"); 
        break;
    case "verde":
        console.log("puede avanzar"); 
        break;
    default:
        console.log("ingrese un color valido");         
}

//EJERCICIO RECOMENDAR JUEGO, PELICULA O LIBRO

/* --------CALLBACK---*/ 

//operaciones en funciones flecha
let sumar = (num1,num2) => num1+num2
let restar = (num1,num2) => num1-num2
let multiplicar = (num1,num2) => num1*num2
let dividir = (num1,num2) => num1/num2

//una funcion callback es una funcion que llama a otra funcion en sus parametros
let calculadora = (num1, num2, operacion) => operacion (num1, num2);

console.log(calculadora(10,10, sumar));
console.log(calculadora(10,10, restar));
console.log(calculadora(10,10, multiplicar));
console.log(calculadora(10,10, dividir));

//callback hell es la anidación de acciones
//https://keepcoding.io/blog/callback-hell-en-javascript/
 