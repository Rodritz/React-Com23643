import React from 'react'
import ReactDOM from 'react-dom/client'
import { Counter, Counter2,Counter3 } from './Counter'
import { Carta } from './Card';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Counter />
  <Counter2 />
  <Counter3 />
  <Carta/>
  </>
)
