// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hello";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 30;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return str
//console.log(str)
}
console.log(devolverString("hello!!!"))
//devolverString("hello!!!");


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else {
    console.log('Ambos argumentos deben ser números.');
    return null;
  }
}
console.log(suma(4,2));

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  if (typeof x === 'number' && typeof y === 'number') {
    return x - y;
  } else {
    console.log('Ambos argumentos deben ser números.');
    return null;
  }  
}
console.log(resta(24,8));

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  if (typeof x === 'number' && typeof y === 'number') {
    return x * y;
  } else {
    console.log('Ambos argumentos deben ser números.');
    return null;
  }  
}
console.log(multiplica(5,4));

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  if (typeof x === 'number' && typeof y === 'number') {
    if (y !== 0) {
      return x / y;
    } else {
      console.log('No se puede dividir por cero.');
      return null;
    }
  } else {
    console.log('Ambos argumentos deben ser números.');
    return null;
  } 
}
console.log(divide(15,5));

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  //funcion flecha
  //const sonIguales=(x,y)=>{
    /*if(x === y){
        return true;
    }else{
        return false;
    } */

    //if ternario
    return x === y ? true : false
  
    /* return x===y */
    //const sonIguales = (x,y)=>{return x===y}; console.log(sonIguales(15,15));
    //const sonIguales = (x,y)=> x===y; console.log(sonIguales(15,15));
  }
console.log(sonIguales(15,15));


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  
  /* if (typeof str1 === 'string' && typeof str2 === 'string') {
    if (str1.length === str2.length) {
      return true;
    } else {      
      return false;
    }
  } else {
    console.log('por favor ingrese dos cadenas de texto');
    return null;
  } */
  
  if (typeof str1 === 'string' && typeof str2 === 'string') {
    return str1.length === str2.length
  } else {
    console.log('por favor ingrese dos cadenas de texto');
    return null;
  }
}
console.log(tienenMismaLongitud("hola","chau"));

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:

  /* if (typeof num === 'number' ) {
    if (num < 90 ) {
      return true;
    } else {      
      return false;
    }
  } else {
    console.log('por favor ingrese un numero');
    return null;
  } */ 
  
  if (typeof num === 'number' ) {
    return num < 90
  } else {
    console.log('por favor ingrese un numero');
    return null;
  } //aca igual falta la validacion
}
console.log(menosQueNoventa(95));

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:

  /* if (typeof num === 'number' ) {
    if (num > 50 ) {
      return true;
    } else {      
      return false;
    }
  } else {
    console.log('por favor ingrese un numero');
    return null;
  }  */
  if (typeof num === 'number' ) {
    return num > 50
  } else {
    console.log('por favor ingrese un numero');
    return null;
  }   
}
console.log(mayorQueCincuenta(45));

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  if (typeof x === 'number' && typeof y === 'number') {
    return x % y;
  } else {
    console.log('Ambos argumentos deben ser números.');
    return null;
  }  
}
console.log(obtenerResto(45,8));

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  /* if (typeof num === 'number' ) {
    if (num % 2 === 0 ) {
      return true;
    } else {      
      return false;
    }
  } else {
    console.log('por favor ingrese un numero');
    return null;
  } */ 
  if (typeof num === 'number' ) {
    return num % 2 === 0
  } else {
    console.log('por favor ingrese un numero');
    return null;
  } 
}
console.log(esPar(4));

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  /* if (typeof num === 'number' ) {
    if (num % 2 === 1 ) {
      return true;
    } else {      
      return false;
    }
  } else {
    console.log('por favor ingrese un numero');
    return null;
  }  */
  if (typeof num === 'number' ) {
    return num % 2 !== 0
  } else {
    console.log('por favor ingrese un numero');
    return null;
  } 
}
console.log(esImpar(5));

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  if (typeof num === 'number' ) {    
      //return num ** 2;
      return Math.pow(num,2) 
  } else {
    console.log('por favor ingrese un numero');
    return null;
  } 
}
console.log(elevarAlCuadrado(3));

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
    if (typeof num === 'number' ) {    
      //return num ** 3;  
      return Math.pow(num,3)  
  } else {
    console.log('por favor ingrese un numero');
    return null;
  } 
}
console.log(elevarAlCubo(2));

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  if (typeof num === 'number' && typeof exponent === 'number'){
    return Math.pow(num,exponent) 
  }else {
    console.log('Ambos argumentos deben ser números.');
    return null;
  }  
}
console.log(elevar(2,5));

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
    if (typeof num === 'number' ) {    
      return Math.round(num);    
  } else {
    console.log('por favor ingrese un numero');
    return null;
  } 
}
console.log(redondearNumero(2.3));

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
    if (typeof num === 'number' ) {    
      return Math.ceil(num); 
  } else {
    console.log('por favor ingrese un numero');
    return null;
  } 
}
console.log(redondearHaciaArriba(2.3));

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
    return Math.random(); 
}
console.log(numeroRandom());

function esPositivo(num) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
    /* if (typeof num === 'number' ) {    
      if(num>0){
        return "Es positivo";
      } else if(num<0){
        return "Es negativo";
      }else {
        return "false"
      }
  } else {
    console.log('por favor ingrese un numero');
    return null;
  }  */
  //con if ternario
  if (typeof num === 'number' ) {    
    return num >0 ? "es positivo": num<0 ? "es negativo" : false;
} else {
  console.log('por favor ingrese un numero');
  return null;
} 
}
console.log(esPositivo(-5));

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  if (typeof str === 'string' ) {   
        //return str + "!";  
        return `${str}!`    
  } else {
    console.log('por favor ingrese un texto');
    return null;
  }
}
console.log(agregarSimboloExclamacion("Hola"));

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  if (typeof nombre === 'string' && typeof apellido === 'string') {
    //return nombre + " " + apellido;
    //backstick - plantilla literal
    return `${nombre} ${apellido}`
  } else {
    console.log('Disculpe, ambos argumentos deben ser textos');
    return null;
  }
}
console.log(combinarNombres("Bruce", "Wayne"));

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  if (typeof nombre === 'string' ) {   
          return `Hola ${nombre}!`;     
  } else {
      console.log('por favor ingrese un texto');
      return null;
  }
}
console.log(obtenerSaludo("Diego"));


  // funcion flecha
  const saludo = (nombre) =>{return `Hola ${nombre}` }; console.log(saludo("Juana"))
  const saludo1 = nombre => `Hola ${nombre}`; console.log(saludo("Juana"))

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  if (typeof alto === 'number' && typeof ancho === 'number'){
    return alto * ancho
  }else {
    console.log('Ambos argumentos deben ser números.');
    return null;
  }  
}
console.log(obtenerAreaRectangulo(5,4));
//con funcion flecha
const obtenerAreaRectangulo2 = (alto, ancho) => ancho*alto;console.log(obtenerAreaRectangulo2(5,4))

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  if (typeof lado === 'number'){
    return lado * 4
  }else {
    console.log('Debe ingresar un numero.');
    return null;
  }  
}
console.log(retornarPerimetro(5));
//con funcion flecha
//const retornarPerimetro2 = (lado) => {return lado*4};console.log(retornarPerimetro2(5))
const retornarPerimetro2 = lado=> lado*4;console.log(retornarPerimetro2(5))

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  if (typeof base === 'number' && typeof altura === 'number'){
    const area = (base * altura)/2;
    return area;
  }else {
    console.log('Ambos argumentos deben ser números.');
    return null;
  }  
}
console.log(areaDelTriangulo(5,4));

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí  
  if (typeof euro === 'number'){
    return `el cambio a dolar es ${euro*1.2}`
  }else {
    console.log('Debe ingresar un numero.');
    return null;
  }  
}
console.log(deEuroAdolar(20));
//con funcion flecha
const deEuroAdolar2 = euro => euro*1.2 ; console.log(deEuroAdolar2(100));


function esVocal(letra){
  
  if(letra.length === 1 && typeof letra === "string"){
    let caracter = letra.toLowerCase();
    const vocales = new Set(['a', 'e', 'i', 'o', 'u']);

    if (vocales.has(caracter)) {
      return `${caracter} es vocal`;
    }else{
      return `${caracter} no es vocal. Dato ingresado incorrecto`;
    }
  }else{
    return "Dato incorrecto, debe ingresar un caracter";
  }
}
console.log(esVocal("o"));