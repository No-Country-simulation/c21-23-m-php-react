import React from 'react'
import "./Divider1.css"
import labrador from "../../assets/labrador-div.png"

export default function Divider1() {
  return (
    <div id='divider1'>
        <p>Cada adopción es una vida salvada.
        Dale a estos animales la oportunidad de ser parte de tu familia.</p>
        <img src={labrador} alt='Labrador'/>
    </div>
  )
}
