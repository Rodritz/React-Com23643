import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Boton from './Boton.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <>
      <Boton numero={1} nombre="Pepe" />
      <Boton numero={2} nombre="Pepa"/>
      <Boton numero={3} />
      <Boton numero={4} />
    </>    
  </React.StrictMode>,
)
