import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
import Bloque_horario from "./components/bloque_horario"
import MissingDataAlert from "./components/MissingDataAlert"
import { getData } from "./services/middleware_db"

function App() {
  const [data, setData] = useState([])

    //console.log(bloques);
    const semSym = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI']
    const tablTh = ['Clave Hora','Lunes','Martes','Miercoles','Jueves','Viernes']
  
    const horas = [['08:00','09:30'],['09:40','11:10'],['11:20','12:50'],['14:45','16:10'],['16:20','17:50'],['17:55','19:25'],['19:30','21:00']]
    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
  
    const [semestre,setSemestre] = useState(1)
    const [selectedIndex, setSelectedIndex] = useState(0)
  
    const [bloquesState, setBloquesState] = useState(data !== null)

  //CODIGO PARA LOS DATOS DE LA API
  useEffect(() => {
    getData().then(data => setData(data));
  },[])
=======

function App() {
  const [count, setCount] = useState(0)
>>>>>>> parent of 4bd0a38 (Fetching de datos con el vps)


  
  return (
<<<<<<< HEAD
<>
      {bloquesState ? <>
        <div >

          
          <title> UTA ICCI - HORARIO </title>
          
          <ul id="listaTabla" className="inline-flex w-full px-1 pt-2 ">
            <div className="pl-10 pr-2 py-2 font-bold text-gray-800 rounded-t opacity-80" > Semestre </div>
            {semSym.map((sem,index) => {
              return (
                <li key={index} className="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><button className="border-b-4" style={{ borderColor: index === selectedIndex ? '#17286b' : ''}} onClick={() => {setSemestre(index+1); setSelectedIndex(index)}}>{sem}</button></li>
              )
            })}
          
          </ul>
          {/* <Link href="crud" className="pl-10">Ir al crud</Link> */}
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-gray-100 rounded-2xl p-2 shadow-md">
                  <table className="min-w-full">
                    <thead className="bg-[#17286b] border-b border-gray-100 text-white">
                      <tr>
                        {tablTh.map((tabl,index) => {
                          return (
                            <th key={index} scope="col" className="text-sm font-bold px-6 py-4 text-center border-r border-solid">{tabl}</th>)
                        })}
                      </tr>
                    </thead>
                  
                    <tbody className="">
                      {horas.map((hora,index) => {
                        return(
                          <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-gray-200">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-solid border-gray-700">
                              {hora[0]} - {hora[1]}
                            </td>

                            {dias.map((dia, index) => {
                              return (
                                <td key={index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700">
                                  {data.map((bloque, index) => {
                                    if (bloque.semestre === semestre) {
                                      return (
                                        <div key={index}>
                                          <Bloque_horario params={{semestre,hora,dia}} bloque={bloque} />
                                        </div>
                                      )
                                    }
                                  })}
                                </td>
                              )
                            })}
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
        
        : <MissingDataAlert />
      }
=======
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> parent of 4bd0a38 (Fetching de datos con el vps)
    </>
  )
}

export default App
