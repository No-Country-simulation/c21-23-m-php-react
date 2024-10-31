import React from 'react'
import "./Adoptar.css"
import Cards from '../../components/Cards/Cards'
import perrogato from "../../assets/perro-gato-animado.png"
import mascotas from "../../assets/mascotas.json"

export default function Adoptar() {
  return (
    <>
    <div id='divider3'>
        <div><h2>Ellos te <span style={{color:"var(--amarillo)"}}>necesitan</span></h2>
        <p>Cada animal tiene una historia, pero su final feliz depende de ti. <br/>
        Explora nuestras mascotas y dales la oportunidad de ser parte de tu vida.</p></div>
        <img src={perrogato} alt='Caricatura de perro y gato'/>
    </div>
    <div id='adopcion'>
      <div id='filtros'>
        <p>Edad:</p>
        <div>
          <input type="radio" id='joven' name='edad' value='Joven'/>
          <label for="joven">Joven (0-1 año)</label>
        </div><div>
          <input type="radio" id='adulto' name='edad' value='Adulto'/>
          <label for="adulto">Adulto (2-7 años)</label>
        </div><div>
          <input type="radio" id='mayor' name='edad' value='Mayor'/>
          <label for="mayor">Senior (8+ años)</label>
        </div><div>
          <input type="radio" id='todos' name='edad' value='Joven+Adulto+Mayor'/>
          <label for="todos">Todos</label>
        </div>
        <p>Especie:</p>
        <div>
          <input type="radio" id='perro' name='especie' value='Perro'/>
          <label for="perro">Perro</label>
        </div><div>
          <input type="radio" id='gato' name='especie' value='Gato'/>
          <label for="gato">Gato</label>
        </div><div>
          <input type="radio" id='todos2' name='especie' value='Gato+Perro'/>
          <label for="todos2">Todos</label>
        </div>
        <p>Sexo:</p>
        <div>
          <input type="radio" id='hembra' name='sexo' value='Hembra'/>
          <label for="hembra">Hembra</label>
        </div><div>
          <input type="radio" id='macho' name='sexo' value='Macho'/>
          <label for="macho">Macho</label>
        </div><div>
          <input type="radio" id='todos3' name='sexo' value='Macho+Hembra'/>
          <label for="todos3">Todos</label>
        </div>
      </div>
      <Cards data={mascotas} />
    </div>
    </>
  )
}
