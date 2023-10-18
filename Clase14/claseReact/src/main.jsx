import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card.jsx'
import "./Card.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  /* usamos fragment en lugar de div */
  <>
  <Card apellido="Messi" nacimiento={1987} clubes={["Newels ", "Barcelona ", "Psg ", "Inter Miami"]} mundial={true} late={false}/>
  <Card apellido="Ronaldo" nacimiento={1984} clubes={["Lisboa ", "Manchester ", "Real Madrid ", "Juve"]} mundial={false} late={true}/>
  </>
)
