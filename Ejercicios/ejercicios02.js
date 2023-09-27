function obtenerMayor(x, y) {
    // "x" e "y" son números enteros .
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
  /* Metodos de MAth */
  if (typeof x === 'number' && typeof y === 'number'){
    return Math.max(x, y);
  }else {
    return 'Ambos argumentos deben ser números.';
  }  
}
console.log(obtenerMayor(8, 9))
const obtenerMayor2 = (x,y) => Math.max(x, y); console.log(obtenerMayor2(-5, -2)) 
  
  function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
  if(typeof edad === "number"){
    /* if(edad>=18){
      return "Allowed"
    }
      return "Not Allowed"  */  
      return edad>=18 ? "Allowed" : "Not Allowed";
  }
    return "Debe ingresar una edad.";
  }  
  console.log(mayoriaDeEdad(17));
  const mayoriaDeEdad2 = edad => edad>=18 ? "Allowed" : "Not Allowed";console.log(mayoriaDeEdad2(17));
    
  function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
    if(typeof status === "number"){
      return status == 1 ? "Online" : status === 2 ? "Away" : "Offline";
    }else{
      return "Debe ingresar un numero";
    }
  }
  console.log(conection (2));
  
  function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
    if(typeof idioma === "string"){
      switch (idioma.toLowerCase()) {
      case "aleman":
      return "Guten Tag!";
      case "mandarin":
        return "Ni Hao!";
      case "ingles":
        return "Hello!";
      default:
        return "Hola!";
      }  
    }else{
      return "Debe ingresar un idioma valido";
    }       
  }
  console.log(saludo("MANDARIN"));
  //hacerlo en ternario

  function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    if(typeof color === "string"){
      switch (color.toLowerCase()) {
        case "blue":
          return "This is blue";
        case "red":
          return "This is red";
        case "green":
          return "This is green";
        case "orange":
          return "This is orange";
        default:
          return "Color not found";
      }  
    }else {
      return "Debe ingresar un color valido";      
    }
    
  }
  console.log(colors(3));
  
  function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    if(typeof numero === "number"){
      return numero == 10 || numero == 5 
    }else{
      console.log("ingrese un valor numerico");
      return null;
    }  
  }
  console.log(esDiezOCinco(9));
  const esDiezOCinco2 = numero => numero == 10 || numero == 5; console.log(esDiezOCinco2(5));

  
  function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    if(typeof numero === "number"){
      return numero > 20 && numero < 50;
    }else{
      return "Debe ingresar un valor numerico";      
    }
  }
  console.log(estaEnRango(49));
  const estaEnRango2 = numero => numero > 20 && numero < 50; console.log(estaEnRango2(52));
  
  function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
    if(typeof numero === "number"){
      return numero === Math.floor(numero);
    }else{
      return "Debe ingresar un valor numerico";
    }
  }
  console.log(esEntero(6.3));
  const esEntero2 = numero => numero === Math.floor(numero); console.log(esEntero2(6)); 
  
  function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if(typeof numero === "number"){
      if(numero%3 === 0 && numero%5 === 0){
        return "fizzbuzz"
      }else if(numero%3 === 0){
        return "fizz"
      }else if(numero%5 === 0){
        return "buzz"
      }else {
        return numero;
      }
    }else{
     return "debe ingresar un valor numerico";
    }  
  }
  console.log(fizzBuzz(21));

  const fizzBuzz2 = numero =>{
  let retorno = ""
  if(numero%3===0) retorno += "fizz";
  if(numero%5===0) retorno += "buzz";
  return retorno || numero}
  console.log(fizzBuzz2(21));
    //resolver si se pasa 0 como argumento

  function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
    if(typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number"){
      if(num1 < 0 || num2 < 0|| num3 < 0){
        return "Hay negativos"
      }else if (num1 ===0 || num2 === 0 || num3 ===0){
        return "Error"
      }else if(num1 > num2 && num1 > num3 && num1 >0){
        return "Número 1 es mayor y positivo"
      }else if(num3 > num1 && num3 > num2) {        
        return ++num3;
      }else{
        return "false"
      }
    }else{
      return "Debe ingresar un valor numerico";
    }
  }
  console.log(operadoresLogicos(5,6,9));
  
  function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    // Verifica si el número es menor o igual a 1
    if (numero <= 1) {
      return false; // Los números 0 y 1 no son primos
    }
    // Itera desde 2 hasta la raíz cuadrada del número
    // Ya que ningún divisor de un número primo puede ser mayor que su raíz cuadrada
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Si el número es divisible por i, no es primo
        }
    }
    return true; // Si no se encontraron divisores, el número es primo  
  }
  console.log(esPrimo(7));
  console.log(Math.sqrt(5));

  const esPrimo1 = numero =>{

  }
  
  function esVerdadero(valor){
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
    if(typeof valor === "boolean"){
      return valor === true ? "Soy verdadero" : "Soy falso";
    }else{
      return "Debe ingresar un valor booleano"
    }
  }
  console.log(esVerdadero(false));
  
  

  function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí  
    const tablaDelSeis=[];

    for (let i = 0; i <= 10; i++) {
      const resultado = 6 * i;
      tablaDelSeis.push(resultado);
    }  
    return tablaDelSeis;
  }
  console.log(tablaDelSeis());

  const tablaDelSeis1 = () =>{
    const tablaDelSeis=[];

    for (let i = 0; i <= 10; i++) {
      const resultado = 6 * i;
      tablaDelSeis.push(resultado);
    }  
    return tablaDelSeis;
  }
  console.log(tablaDelSeis1());
  
  function tieneTresDigitos(numero){
    //Leer un número entero y determinar si tiene 3 dígitos.
    //Escribe tu código aquí
    if(typeof numero === "number"){
      // Primero convierto el número a cadena para contar sus dígitos
      const numeroString = numero.toString();
      return numeroString.length === 3;
    }
    return "Debe ingresar un valor numerico"
  }
  console.log(tieneTresDigitos(258));

  const tieneTresDigitos1 = numero => String(numero).length ===3;console.log(tieneTresDigitos1(235));

  
  function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
    let contador = 0;
    
    do {
        numero += 5;
        contador++;
    } while (contador < 8);
    
    return numero;
  }
  console.log(doWhile(10));
  
