/* // ---------interaccciones -------------

alert ("Hola codo a codo")

//---------- prompt-------------

prompt("Decime tu nombre")

// ------------confirm-----------

confirm("Bienvenido a mi página")
 */
// ----------caracteristicas-----------

/* *interpretado, se ejecuta en el navegador
*orientado a objetos
*imperativo, las operaciones van linea a linea, de arriba hacia abajo
*Case Sensitive
*basado en prototipos - instancias - classless
*tipado debil
*lenguaje dinamico */

/* //------------convenciones de nombres-----------

// camelCase

UpperCamelCase : la primer letra de cada palabra en mayuscula
let NOmbreYApellido

lowerCamelCase: la primer palabra inicia en minuscula, el resto inician en mayuscula
let nombreYApellido

//snake_case
las palabras van separadas por el guion bajo
let nombre_y_apellido

//constantes
las constantes en mayuscula
const NOMBRE 

//train-case
las palabras van se paradas por guion Medio   
let nombre_y_apellido */

//----------variables------
//es una forma de almacenar un valor para utilizar luego

/* var nombre = "Juana"
let apellido  = "Perez" 
const deporteFavorito = "Boxeo"

nombre = "Pedro"
deporteFavorito = "Futbol"

document.write(nombre)
document.write(deporteFavorito) */

/* //----tipos de datos--------
let nombre = "Amilcar"; //cadena de texto - STRING
let apellido = "Brusa";

let edad = 70; //numero -NUMBER
let tecnico  = true //BooleanO - BOOLEAN
let campeones = ["Oliveras", "Gallardo", true, 32] //Arreglo - ARRAY */

//--------concatenacion-----------

/* let nombre = prompt("Decime tu nombre")
let num1 = prompt("Decime un numero")
let num2 = prompt("Decime un numero")
let resultado =  num1+num2  //aca se va a concatenar ambos numeros porque prompt recibe strings
document.write(nombre + " el resultado de tu suma es " + resultado); */

//------casteo----------
let nombre = prompt("Decime tu nombre")
let num3 = Number(prompt("Decime un numero"))
let num4 = Number(prompt("Decime un numero"))
let resultado =  num3+num4  //aca se va a concatenar ambos numeros porque prompt recibe strings
document.write(nombre + " el resultado de tu suma es " + resultado);