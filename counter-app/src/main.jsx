// Importamos React y ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
// Importamos el componente principal de nuestra aplicación
// import {FirstApp} from './FirstApp'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={0}/>
  </React.StrictMode>
)

// Creamos una raíz en el nodo del DOM con el id 'root'
// Esto es necesario para renderizar nuestra aplicación en el DOM
 // Envolvemos nuestro componente principal en un componente <React.StrictMode>
  // Esto activa las advertencias de desarrollo en modo estricto