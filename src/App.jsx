import { useEffect, useState } from 'react'
import './App.css'

import { getData } from './services/getData'

function App() {
  const [data, setData] = useState([])

  //CODIGO PARA LOS DATOS DE LA API
  useEffect(() => {
    getData().then(data => setData(data));
  },[])

  return (
    <>
      {data.map((item,index) => (
        <div key={index}>
          <h1>{item.semestre}</h1>
          <p>{item.bloques_horario.profesor}</p>
        </div>
        
        ))}
    </>
  )
}

export default App
