import { useEffect, useState } from 'react'
import './App.css'
//import { getData } from "./services/middleware_db"
import { data as bloques } from './services/data'
import Navbar from "./components/Navbar";
import { useModal } from '../context/ModalContext'
import MissingDataAlert from './components/MissingDataAlert'


function App() {
  const [data, setData] = useState([])

  //console.log(bloques);
  const tablTh = ['Clave Hora','Lunes','Martes','Miercoles','Jueves','Viernes']

  const horas = [['08:00','09:30'],['09:40','11:10'],['11:20','12:50'],['14:45','16:10'],['16:20','17:50'],['17:55','19:25'],['19:30','21:00']]
  const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

  const [bloquesState, ] = useState(data !== null)

  const { setModal } = useModal()

  const [horario, ] = useState([]);
  const handleChange = (event) => {
    const boton = JSON.parse(event.target.value);
    horario.push(boton)
    console.log(horario);
  };

  //CODIGO PARA LOS DATOS DE LA API
  useEffect(() => {
    const { data } = bloques
    setData(data)
    //getData().then(data => {setData(data)}).catch(err => {console.log(err); setBloquesState(false)});
  },[])

  // const [selectedBloques, setSelectedBloques] = useState([]);
  // const handleAddBloques = () => {
  //   const bloquesSeleccionados = bloques.filter((bloque) => bloque.isChecked);
  //   setSelectedBloques(bloquesSeleccionados);
  //   setModal(false);
  // };
  
  return (
    <>
        {bloquesState ? <div>
        <Navbar />
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
                                <td key={index} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700 hover:bg-gray-300" onClick={() => { 
                                  setModal(
                                    <form>
                                      <select id='select' onChange={handleChange}>
                                        <option></option>
                                        {
                                          data.map((element,index)=>{
                                            if (element.bloques_horario.bloques_horas.inicio==hora[0] && element.bloques_horario.dia===dia) {
                                              //console.log(element)
                                              return(<option key={index} value ={JSON.stringify(element)}>{element.bloques_horario.dia} {element.bloques_horario.bloques_horas.inicio} {element.bloques_horario.ramos.ramo} Grupo: {element.bloques_horario.grupo}</option>)
                                            }
                                          })
                                        }
                                      </select>
                                    </form>
                                    )}}>
                                  {horario.map((element,index)=>{
                                    if ((element.bloques_horario.bloques_horas.inicio==hora[0] && element.bloques_horario.dia ===dia)){
                                      return(<p key ={index}>{element.bloques_horario.ramos.ramo} Grupo: {element.bloques_horario.grupo}</p>)
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
        
      : <MissingDataAlert />

      }
      </>


  )
}

export default App