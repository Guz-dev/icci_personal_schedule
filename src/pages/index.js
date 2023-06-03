import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useModal } from 'context/ModalContext';
import Bloque_horario from "@/components/bloque_horario";

export default function Home({ bloques }) {

  console.log(bloques);
  const semSym = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI']
  const tablTh = ['Clave Hora','Lunes','Martes','Miercoles','Jueves','Viernes']
  const tablTh2 = ['Asignatura','Grupo','Profesor','Sala','']

  const horas = [['08:00','09:30'],['09:40','11:10'],['11:20','12:50'],['14:45','16:10'],['16:20','17:50'],['17:55','19:25'],['19:30','21:00']]
  const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  const [valorDiv, setValorDiv] = useState('');
  // let items = Object.values(bloque).map(i => ({Ramo: i.ramos}));
  // console.log("xd", items);

  const { setModal } = useModal()
  const [semestre,setSemestre] = useState(1)

  const [selectedIndex, setSelectedIndex] = useState(0)

  // const a = document.getElementById('descripcionFueraModal');
  // console.log(a)
  // const [descripcion, setDescripcion] = useState('');
  // const handleClick = (id) => {
  // // const a = document.getElementById('descripcionFueraModal');
  //   console.log('ID del elemento:', id);
  //   setDescripcion("a");
  //   console.log("1234");
  // };
  return (
    <>
      <div className={styles.container}>

        <Head>
          <title> UTA ICCI - HORARIO </title>
        </Head>
        <ul id="listaTabla" className="inline-flex w-full px-1 pt-2 ">
          {/* <div className="pl-10 pr-2 py-2 font-bold text-gray-800 rounded-t opacity-80" > Semestre </div>
          {semSym.map((sem,index) => {
            return (
              <li key={index} className="px-4 py-2 font-bold text-gray-800 rounded-t opacity-60"><button className="border-b-4" style={{ borderColor: index === selectedIndex ? '#17286b' : ''}} onClick={() => {setSemestre(index+1); setSelectedIndex(index)}}>{sem}</button></li>
            )
          })} */}
          
        </ul>
        {/* <Link href="crud" className="pl-10">Ir al crud</Link> */}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden bg-gray-100 rounded-2xl p-2 shadow-md">
                <table className="min-w-full">
                  {/* <thead className="bg-gray-200 border-b"> */}
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
                              <td key={index} id="descripcionFueraModal" className= "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r border-solid border-gray-700 hover:bg-gray-300" onClick={() => { 
                                setModal(
                                  <div className=""> 
                                    {bloques.map((bloque, index) => {
                                        // let items = Object.values(bloque).map(i => ({Ramo: i.ramos}));
                                        // console.log("xd", bloque, items);
                                        // let result = bloques.map(({lines: [departures]}) => departures);
                                        // let items = Object.values(bloque.bloques_horario.ramos).map(i => ({Ramo: i.ramo}));
                                        // console.log("xd", items);

                                        return (
                                          <div onClick={console.log("se abrio")} key={index}>
                                            <Bloque_horario params={{semestre,hora,dia}} bloque={bloque}/>                                       
                                          </div>
                                        );
                                    })}
                                    {/* <button type="button" className="border border-green-500 bg-green-500 text-white px-4 py-2 transition duration-500 ease select-none hover:bg-green-800 text-center focus:outline-none focus:shadow-outline">
                                      Agregar
                                    </button> */}
                                  </div>)
                                }}> {valorDiv || 'Abrir Modal'}
                              </td>
                            );
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
      <div id="descripcionFueraModal"> hola </div>
    </>


  );

  
  
}

export async function getStaticProps(){

  const { data } = await fetch('http://localhost:3001/')
    .then((res) => {            
      return res.json()
    })
  
  return {
    props:{
      bloques: data
    }
  }
}

