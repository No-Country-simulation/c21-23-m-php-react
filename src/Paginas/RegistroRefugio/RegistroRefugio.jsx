import React from 'react'

export default function RegistroRefugio() {
    return (
        <div id="registro">
            <div>
                <div>
                    <h2>¡Regístrate como refugio!</h2>
                    <p>¡Forma parte  de la familia de CalidHogar!</p>
                    <form>
                        <input type="text" placeholder='Nombre' />
                        <input type="text" placeholder='Dirección' />
                        <input type="text" placeholder='Provincia' />
                        <input type="email" placeholder='Correo Electrónico' />
                        <input type="password" placeholder='Contraseña'/>
                        <input type="password" placeholder='Confirmar Contraseña' />
                        <input type="submit" value="Crear Cuenta"/>
                    </form>
                    <a href='/registrarse'>O regístrate como usuario.</a>
                </div>
            </div>
            <div id='imagen-registro-refugio' />
        </div>
      )
}
