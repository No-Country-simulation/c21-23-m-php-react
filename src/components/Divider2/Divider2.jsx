import React from 'react'
import "./Divider2.css"
import hocico from "../../assets/hocico-div2.png"

export default function Divider2() {
  return (
    <div id="divider2">
        <img src={hocico} />
        <div>
            <p>
            Su amor incondicional te está esperando. 
            ¡Adopta y deja que la ternura entre en tu vida!
            </p>
            <ul>
                <li><a href="/registrar" className='boton-redondo amarillo'>Registrarme</a></li>
                <li><a href="/registrar-refugio" className='boton-redondo'>Registrar Refugio</a></li>
            </ul>
        </div>
    </div>
  )
}
