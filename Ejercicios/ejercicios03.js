/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */
let clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz","Eduardo"]

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */
 function mostrarClasificacion1(array) {
    for (let a of array) {
        return array;
    }
}
console.log(mostrarClasificacion1(clasificaciones));
const mostrarClasificacion = array => {
    for (let a of array) {
        return array;
    }
} 
console.log(mostrarClasificacion(clasificaciones));

function mostrarClasificacion2(array){
    array.forEach(function(elemento) {
        console.log(elemento);
    });
}
mostrarClasificacion2(clasificaciones);

const mostrarClasificacion3 = array =>{
    array.forEach(array => {
        console.log(array);
    });
}
mostrarClasificacion3(clasificaciones);
//modo Correcto ForEach (pueod usar tambien document.write)

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */
//opcion 1
/* const indiceLeon = clasificaciones.indexOf("Leon");
const indiceAgostina = clasificaciones.indexOf("Agostina");

clasificaciones.splice(indiceLeon, 1); //a partir del indice leon indico cuantos elementos elimino
console.log(clasificaciones);

clasificaciones.splice(indiceAgostina, 0, "Leon") */ //Agrega a Leon antes de Agostina

//opcion2
clasificaciones.splice(2,2,"Leon", "Agostina");//a partir del indice 2 elimina 2 elementos y luego agrega los nuevos
console.log(clasificaciones);

/* b)Eduardo es descalificado y se elimina del concurso */
let indiceEduardo = clasificaciones.indexOf("Eduardo");
clasificaciones.splice(indiceEduardo,1) //a partir del indice Eduardo indico cuantos elementos elimino
console.log(clasificaciones)

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */
let indiceFranco = clasificaciones.indexOf("Franco");
clasificaciones.splice(indiceFranco, 0, "Julieta", "Martina")//el primer argumento indica de que indice parto, el segundo cuantos elementos se eliminan, luego se cargan los elementos que se agregan antes del primer arg
console.log(clasificaciones);



/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */
clasificaciones.unshift("Alicia")//agrego un elemento al comienzo del array
console.log(clasificaciones);

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */
console.log(mostrarClasificacion(clasificaciones));

