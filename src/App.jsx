import { useEffect, useState } from 'react'
import './App.css'
import Bloque_horario from "./components/bloque_horario"
import { getData } from "./services/middleware_db"
import { useModal } from '../context/ModalContext'
import { ModalProvider } from '../context/ModalContext'

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

      const { setModal } = useModal()

    //CODIGO PARA LOS DATOS DE LA API
    useEffect(() => {
      getData().then(data => setData(data));
    },[])


  
  return (
    <>

        <div>
          <title> UTA ICCI - HORARIO </title>
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
                                <td key={index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700" onClick={() => {
                                setModal(
                                <div className=''>
                                  {data.map((bloque, index) => {
                                    return (
                                      <div key={index}>
                                        <Bloque_horario params={{semestre,hora,dia}} bloque={bloque} />
                                      </div>
                                    )
                                  })}
                                </div>
                                )

                                }}>                                 
                                  {/* </Modal> */}
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

        <div className="App">
      <header className="App-header">
        <label
          className="App-link"
          onClick={() => {
            setModal(<h1>Hola senora!</h1>)
          }}
        >
          Start a dialogue
        </label>
      </header>
    </div>
      </>
  )
}

export default App
