import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

export const Counter =()=>{
            /* la sig const es destructuring */
          /* [nombre del estado, la funcion que va a cambiar el estado] = estado inicial */
    const [contador, setContador]= useState(0)

    useEffect(()=>{
        console.log("Cambio el contador")
    },[contador])

    return(
        <>
        <p>Contador:{contador}</p>
        <Button onClick={()=>setContador(contador+1)} variant="success">+</Button>{' '}
        <Button onClick={()=>setContador(contador-1)} variant="danger">-</Button>{' '}
        
        </>
    )
} 


/* ------------------------- */

/* con el export por default puedo cargar varios componentes */
/* const Counter = () =>{

    return(
        <h1>Counter</h1>
    )
}

export default Counter */

/* ---------------------------------- */

/* cuando exporto de la sig manera luego debo importar componente por componente */
import { Boton } from "./Boton"

export const Counter2 = () =>{

    return(
        <>
        {/* si cuando se renderiza la pagina y se acopla el componente yo no quiero que se ejecute un evento
        debo pasarlo como callback, como el ejempo del boton 2 , para que se ejecute cuando llamo al evento*/}
        <Boton numero ={1} onClick={alert("Hiciste click")}/>
        <Boton numero ={2} onClick={()=>alert("Hiciste otro click")}/>
        <h1>Counter Export</h1>
        </>
    )
}

export const Counter3 = () =>{

    return(
        <h1>Counter2</h1>
    )
}


