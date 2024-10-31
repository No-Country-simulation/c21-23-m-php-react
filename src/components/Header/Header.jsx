import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <>
    <header>
          <ul className='header-link'>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
            <li>
              <a href="/sobre-nosotros">Sobre nosotros</a>
            </li>
          </ul>
          <ul>
            <li className='boton-header borde'>
              <a href="/iniciar-sesion">Iniciar Sesión</a>
            </li>
            <li className='boton-header amarillo'>
              <a href="/registrarse">Registrarse</a>
            </li>
          </ul>
    </header>
    </>
  )
}
