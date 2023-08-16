//---------operadores------
//  +,-,/,*,%

/* let num1 = 10
let num2 = 5
let resultado = num1 + num2
console.log(resultado)

let num3 = 10
let num4 = "2"
let resultado2 = num3 * num4
console.log(resultado2)

console.log(2+2);//suma
console.log(3-2);//resta
console.log(7*3);//multiplacion
console.log(21/7);//division
console.log(21%7);//modulo(resto) */

//----operadores de comparacion-----

/* let num1 = 24
let num2 = "24"
let num3 = 30
let num4 = 30
console.log(num1==num2)//compara valores
console.log(num1===num2)//comparacion estricta(compara valores y tipo de dato)
console.log(num1<num3)//menor
console.log(num1>num3)
console.log(num4>=num3)

console.log("perro"==="Perro")

console.log(1!=="1")
console.log(1!="1")

//--------flujos de control------
//if

if(1==1){
    console.log("es igual")
}else{
    console.log("NO es igual")
}

let edad = 18
if(edad >= 16){    
    console.log("puede votar");
}else{   
    console.log("NO puede votar")
}

let edad1 = Number(prompt("decime tu edad"));
if(edad1 >= 16){
    alert("puede votar");
    console.log("puede votar");
}else{
    alert("NO puede votar");
    console.log("NO puede votar")
} */

/* let contraseña = "1234567"
console.log(contraseña.length);

if(contraseña.length >= 8){
    console.log("contraseño valida");
}else {
    console.log("debe tener minimo 8 caracteres");
} */

/* //--------|| -  && -------------
console.log(8 >= 8  &&  7=='7')
console.log(8 > 8  ||  7=='7')
 */
/* 
/* let edad = 18
let rol = "programador/a"

if(edad>=18 && rol =="programador/a"){
    console.log("entra al evento");
}else{
    console.log("NO puede entrar al evento");
} */ 

/* // if ternario
let edad = 18
if(edad >= 18){    
    console.log("puede votar");
}else{  
    console.log("NO puede votar")
}
// cond a evaluar  ?  si es true        :            si es false
edad >= 18 ? console.log("puede votar") : console.log("NO puede votar")
 */

//---------funciones-------

function saludo(){
    console.log("Holaaa!!!");
}
saludo();

function suma(num1, num2){
    console.log(num1+num2)
}
suma(2,3)

//---------funcion flecha--------

const sumar = (num1, num2) => {console.log(num1+num2)};
sumar(10,20);

const saludar = (nombre)=>{console.log("Hola "+ nombre)}
saludar("pepe")


