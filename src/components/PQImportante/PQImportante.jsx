import React from 'react'
import "./PQImportante.css"
import gato1 from "../../assets/gato1.jpg"
import gato2 from "../../assets/gato2.jpg"
import perro1 from "../../assets/perro1.jpg"
import perro2 from "../../assets/perro2.jpg"

export default function PQImportante() {
  return (
    <div id="porque">
        <div id="imgPQ">
            <img src={gato1} alt="Gato con humano"/>
            <img src={perro1} alt="Perro grande feliz"/>
            <img src={perro2} alt="Perro pequeño feliz"/>
            <img src={gato2} alt="Gato en un jardín"/>
        </div>
        <div id="texto2">
            <h2>¿Por qué es tan importante adoptar?</h2>
            <p>Adoptar es fundamental porque no solo salva la vida de animales que han sido abandonados o maltratados, 
            sino que también les brinda una segunda oportunidad de encontrar un hogar lleno de amor y cuidado. 
            Al adoptar, contribuyes a reducir la sobrepoblación en los refugios y apoyas una solución más ética 
            y responsable para combatir el abandono de mascotas.</p>
            <div id='boton-conectar'>
                <a href="/adoptar" className='boton-redondo'>¡Conecta con tu nuevo mejor amigo!</a>
            </div>
        </div>
    </div>
  )
}
