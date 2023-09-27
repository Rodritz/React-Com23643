//while

/* let numero = Number(prompt("Decime un numero")); */

/* while(numero<1000){
    numero++;
    document.write(numero + "<br>");
    if(numero == 500){
        break
    }
} */

//  do.. while

/* do{
    numero ++;
    document.write(numero + "<br>")
}while (numero<10) */

//FOR
//declaramos la variable, expresion condicional, incrementamos la variable
for(let i = 0; i<10; i++){
    console.log(i);
}

for (let i = 1; i<=10; i++){
    console.log(2*i);
}

//ARRAY - ARREGLO - MATRIZ - VECTOR
//indice         0          1        2        3
let frutas = ["manzana", "banana", "pera", "tomate"]
//length           1         2        3       4

console.log(frutas[0]); //accedo a un elemento segun el indice
console.log(frutas.length); //obtengo el total de elementos del array
console.log(frutas[frutas.length-1]);//obtengo el ultimo elemento del array

//metodos de array
let animales = ["gato", "perro", "tigre", "conejo", "pez", "rata", "tortuga", "gato"]
let numeros = [1,2,8,7,4,6,7,3]

//slice() --> //corta desde el primer indice del argumento hasta segundo indice sin incluirlo
let nuevoArray = animales.slice(2,5) //si no le paso el segundo argumento corta hasta el final
console.log(nuevoArray);

//unshift() -->agrega un dato al inicio del array
animales.unshift("elefante")
console.log(animales);

//shift() --> elimina un dato del inicio del array
animales.shift()
console.log(animales);

//pop() elimina el ultimo dato del array
animales.pop()
console.log(animales);

//push() agrega un dato al final del array
animales.push("cocodrilo")
console.log(animales);

//find() recorre el array y retorna la primer coincidencia que encuentra
//               busca en los elementos, los elementos que son < 3
const respuesta = numeros.find(element=>element<3)
console.log(respuesta);

//forEach() Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.
animales.forEach((element,i)=>{
    console.log(`Animal:  ${element} esta en la posicion ${i}`);
})

//filter() Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
let nuevoArray2 = animales.filter(elements=>elements === "perro" || elements === "gato")
console.log(nuevoArray2);

/* map() Permite recorre el array y modificar los elements presentes en él, 
retornando un nuevo array con la misma longitud que el original. */
let nuevoArray3 = numeros.map(elements=>elements*10)
console.log(nuevoArray3);

//spread operator
let rapido = ["rapido y furioso", "rapido y furioso 2", "rapido y furioso 3"]
let furioso = ["rapido y furioso 4", "rapido y furioso 5"]

let todas = [...rapido, ...furioso]
console.log(todas);

let mezcla =["rapidito", ...rapido, "rapidito 2"]
console.log(mezcla);
