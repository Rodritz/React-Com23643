//----------objetos{clave : valor}------------

const celular = {
    marca : "Apple",
    modelo : "11",
    stock : true,   
    encender: function(){
        return "Celular encendido";
    },
    apagar: ()=> {
        //las funciones flechas no permiten el uso del this. ....
        console.log(`Apagando celular ${this.marca}`); 
    },
    mostrar: function(){
        console.log(`celular ${this.marca} ${this.modelo}`);
    }
}
//notacion de punto
console.log(celular.marca);

//notacion de corchete
console.log(celular["modelo"]);

console.log(celular.encender());

console.log(celular.mostrar());

console.log(celular.apagar());

//spread operator (objetos)

let generoAccion ={
    nombreGenero : "Accion",
    ranking : 1
}

let terminator = {
    titulo: "terminator",
    popularidad: 10,
    ...generoAccion
}

console.log(terminator);

//--------destructuring-------

//destructuring array

let seleccion = ["Messi", "De Paul", "Martinez"]

//----sin destructuring 
let dibu2 = seleccion[2]
console.log(dibu2);

//---con destructuring en array puedo poner los nombres que yo quiero a las nuevas variables
let [leo, rodrigo, dibu] = seleccion
console.log(leo);

//-----destructuring objeto-----

let auto={
    marca: "Chevrolet",
    modelo: "Zafira",
    año: 2006
}

//----sin destructuring
let miModelo = auto.modelo
console.log(miModelo);

//con destructuring en objetos debo usar las mismas claves del objeto en las variables
let {marca, año} = auto
console.log(marca);
console.log(año);

//si deseo cambiar los nombres de las variables debo asignarles el nuevo nombre que reemplaza cada clave
let {marca:nuevamarca, año:nuevoAño} = auto
console.log(nuevamarca);
console.log(nuevoAño);



