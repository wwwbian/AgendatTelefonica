import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [nombre, setNombre]= useState('')
  const [nro, setNro]= useState(0)
  const[contactos, setContactos] = useState([])

  const guardarContacto = () => {
    const nuevoContacto = { nombre: nombre, numero: nro };
    setContactos([...contactos, nuevoContacto]);
}
  return ( 
    <>
<h1>Agenda de contactos</h1>
<div className='ContainerImputs'>
<input onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Nombre" />
<input onChange={(e) => setNro(e.target.value)}type="number" placeholder="Numero"/>
<button className= 'button'onClick={guardarContacto}>Guardar</button>
</div>
<h2>Registro de contactos</h2>
<table className='ContactTable'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Número</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => (
            <tr key={index}>
              <td>{contacto.nombre}</td>
              <td>{contacto.numero}</td>
            </tr>
          ))}
        </tbody>
      </table>
</>
  )
}

export default App
