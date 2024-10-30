import React from 'react'
import "./Registro.css"

export default function Registro() {
  return (
    <div id="registro">
        <div>
            <div>
                <h2>Ellos te esperan con ansias.</h2>
                <p>¡Forma parte  de la familia de CalidHogar!</p>
                <form>
                    <input type="text" placeholder='Nombre' />
                    <input type="text" placeholder='Apellido' />
                    <input type="email" placeholder='Correo Electrónico' />
                    <input type="password" placeholder='Contraseña'/>
                    <input type="password" placeholder='Confirmar Contraseña' />
                    <input type="submit" value="Crear Cuenta"/>
                </form>
            </div>
        </div>
        <div id='imagen-registro' />
    </div>
  )
}
