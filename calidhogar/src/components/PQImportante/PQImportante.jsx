import React from 'react'
import "./PQImportante.css"

export default function PQImportante() {
  return (
    <div id="porque">
        <div id="imgPQ">
            <img src="https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img src="https://images.unsplash.com/photo-1521673461164-de300ebcfb17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img src="https://images.unsplash.com/photo-1645810376767-932d395ef921?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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
