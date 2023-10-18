import "./PeliculasGrid.css"
import peliculas from "../peliculas.json"
import { PeliculasCard } from "../PeliculasCard"

export function PeliculasGrid(){

    return(
        <ul className="moviesGrid">
            {/* estoy pasando un li como componente, donde recorro el json*/}
            {peliculas.map((pelicula)=>(
                <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
            ))}
        </ul>
    )
}
