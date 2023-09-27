//pasar a axios
//editar el css
//mostrar numero de pagina

//funcion para cargar las peliculas

window.addEventListener("load",()=>{
    cargarPelis();
})

let pagina = 1 //variable para controlar la paginacion

//capturar los botones

let btnAnterior = document.querySelector("#btnAnterior")
let btnSiguiente = document.querySelector("#btnSiguiente")
let PagActual = document.querySelector("#PagActual").innerHTML= `${pagina}`;

//funcion anterior

btnAnterior.addEventListener("click",()=>{
    if(pagina>1){
        pagina--;
        //llamar a la funcion que cargue la pagina
        cargarPelis();
        PagActual = document.querySelector("#PagActual").innerHTML= `${pagina}`;
    }
})

btnSiguiente.addEventListener("click",()=>{
    if(pagina<500){
        pagina++;
        cargarPelis();
        PagActual = document.querySelector("#PagActual").innerHTML= `${pagina}`;
    }
})

//funcion que cargue las peliculas y las muestre

const cargarPeliculas = async()=>{
    try {
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=969fc4d192c56c646bb90db360275b6c&language=es-MX&page=${pagina}`);
        //console.log(respuesta);
        
        if(respuesta.status==200){
            let datos = await respuesta.json();
            //console.log(datos);
            let peliculas ="";
            //recorro datos.results y voy creando la estructura
            datos.results.forEach((pelicula)=>{ 
                peliculas+=`<div class="pelicula">                
                <img class="poster" src="https://image.tmdb.org/t/p/w400${pelicula.poster_path}"/>                
                <h3 class="titulo">${pelicula.title}</h3>
                </div>`
            })

            document.querySelector(".contenedor").innerHTML= peliculas
        }else if(respuesta.status==404){
            console.log("error 404 nos vemos en disney!!");
        }
    } catch (error) {
        console.log(error);
    }
}

const cargarPelis = async () => {
    try {
        let resp = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=969fc4d192c56c646bb90db360275b6c&language=es-MX&page=${pagina}`)
        //console.log(resp.data);
        if(resp.status==200){
            let datos = await resp.data;
            //console.log(datos);
            let peliculas ="";
            datos.results.forEach((pelicula)=>{ 
                peliculas+=`<div class="pelicula">                
                <img class="poster" src="https://image.tmdb.org/t/p/w400${pelicula.poster_path}"/>                
                <h3 class="titulo">${pelicula.title}</h3>
                </div>`
            })
            document.querySelector(".contenedor").innerHTML= peliculas
        }else if(resp.status==404){
            console.log("error 404 nos vemos en disney!!");
        }        
    } catch (error) {
        console.log(error);
    }
}
 