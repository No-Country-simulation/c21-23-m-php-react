import React from 'react'
import './Header.css';
import icon from "/public/icon.webp"

export default function Header() {
  return (
    <>
    <header>
          <ul className='header-link'>
            <li><img src={icon} alt="Ícono del sitio"/></li>
            <li><a href="/">Inicio</a></li>
            <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
            <li><a href="/adoptar">Adoptar</a></li>
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
