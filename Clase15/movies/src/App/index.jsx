import { useState } from 'react'
import { PeliculasGrid } from '../PeliculasGrid'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header className="title">Peliculas</header>
        <main>
          <PeliculasGrid/>
        </main>
      </div>      
    </>
  )
}

export default App
