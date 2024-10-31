import React from 'react'
import "./CardMain.css"
import Cards from '../Cards/Cards'
import mascotas from "../../assets/mascotas.json"

export default function CardMain() {
  return (
    <div id="cardmain">
        <Cards data={mascotas.slice(-4)} />
        <p><a href="/adoptar">Ver más...</a></p>
    </div>
  )
}
