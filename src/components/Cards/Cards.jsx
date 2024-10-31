import React, { useEffect, useState } from 'react';
import "./Cards.css"


const Cards = ({data}) => {
  return (<>
    <div id='tarjetas'>
        {data.map(mascota => (
            <div key={mascota.id} className='tarjeta'>
                <img src={`/mascotas/imagen_${mascota.id}.png`} alt={`${mascota.especie} ${mascota.nombre}`}/>
                <div>
                    <h3>{mascota.nombre}</h3>
                    <div>
                        <p><span>Edad:</span><br/>{mascota.edad} año{mascota.edad > 1 && "s"}</p>
                        <p><span>Especie:</span><br/>{mascota.especie}</p>
                        <p><span>Raza:</span><br/>{mascota.raza}</p>
                    </div>
                </div>
            </div>
            ))}
    </div>  
  </>
  )
}

export default Cards