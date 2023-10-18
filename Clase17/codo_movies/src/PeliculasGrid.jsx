import { PeliculasCard } from "./PeliculasCard"
import "./PeliculasGrid.css"

import peliculas from "./data/peliculas.json"

export const PeliculasGrid = ()=>{

    return(
        <ul className="moviesGrid">
            {/* a peliculas le aplico el metodo map. el map va a hacer un callback(recorrer el json) ,  y va a guardar en pelicula cada recorrido del json.
            luego se lo paso por prop a cada PeliculasCard*/}
            {peliculas.map((pelicula)=>(
                <PeliculasCard key={pelicula.id}pelicula={pelicula}/>
            ))}
        </ul>
    )
}