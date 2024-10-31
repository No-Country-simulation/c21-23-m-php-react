import React from 'react'
import "./AdoptaAmor.css"

export default function AdoptaAmor() {
  return (
    <div id="intro">
        <div id="texto1">
            <div id="lema">
                Adopta una mascota,<br />
                Adopta <span style={{color:"var(--amarillo)"}}>amor</span>
            </div>
            Darle un hogar a una mascota que lo necesita no solo salvará su vida, sino que llenará tu hogar de amor incondicional y lealtad para siempre.
            <ul className="boton-adoptar">
                <li><a href="/adoptar" className='boton-redondo amarillo'>Encuentra tu compañero</a></li>
                <li><a href="/registrar-refugio" className='boton-redondo'>Registra tu refugio</a></li>
            </ul>
        </div>
    </div>
  )
}
