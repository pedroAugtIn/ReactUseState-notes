import './App.css'

import { useState } from 'react' // primeiro passo para trabalharmos com useState do react é importá-lo

// serve para gerenciar o estado de algum valor

function App() {
  const [name, setName] = useState("Pedro Augusto Inácio")
  const [number, setNumber] = useState(1)

  const changeNumber = () => {
    // Previous Value
    setNumber((prevNumber) => prevNumber + 1)
    setNumber((prevNumber) => prevNumber + 1)
  }

  return (
    <div className='App'>
        <h2>Meu nome é {name}</h2>
        <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
        <div>
          <p>Número: {number}</p>
          <button onClick={changeNumber}>Mudar Número!</button>
        </div>
    </div>
     
  )
}

export default App
