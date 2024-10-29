import React from 'react'
import "./Adoptar.css"
import perrogato from "../assets/perro-gato-animado.png"

export default function Adoptar() {
  return (
    <div id='divider3'>
        <p><h2>Ellos te <span style={{color:"var(--amarillo)"}}>necesitan</span></h2>
        Cada animal tiene una historia, pero su final feliz depende de ti. <br/>
        Explora nuestras mascotas y dales la oportunidad de ser parte de tu vida.</p>
        <img src={perrogato} />
    </div>
  )
}
