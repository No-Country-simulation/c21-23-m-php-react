import React from 'react'
import "./Footer.css"
import huella from "/public/huella.png"

export default function Footer() {
  return (
    <footer>
        <div>
            <div id="huella">
                <img src={huella} alt='huella'/>
            </div>
            <p>Nuestra misión es encontrar un hogar amoroso para cada uno de nuestros amigos de cuatro patas. 
            Ayúdanos a hacer una diferencia en sus vidas.</p>
        </div>
        <div>
            <span>Explora</span>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
                <li><a href="/iniciar-sesion">Iniciar Sesión</a></li>
                <li><a href="/registrarse">Registrarse</a></li>
                <li><a href="/registrar-refugio">Registrar Refugio</a></li>
                <li><a href="/adoptar">Adoptar</a></li>
            </ul>
        </div>
        <div>
            <span>Contacto</span>
            <ul>
                <li>calidhogar@gmail.com</li>
            </ul>
        </div>
    </footer>
  )
}
