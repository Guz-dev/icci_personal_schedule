import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Bloque_horario({ params, bloque }) {

  // function mostrarDescripcion() {
  //   const botonModal = document.getElementById('botonModal');
  //   const descripcion = botonModal.innerHTML;
  //   const descripcionFueraModal = document.getElementById('descripcionFueraModal');
  //   descripcionFueraModal.innerHTML = descripcion;
  //   console.log(descripcion);
  // }

  const [descripcion, setDescripcion] = useState('');
  const handleClick = (event) => {
    const boton = event.target;
    const nuevaDescripcion = boton.innerHTML;
    const descripcionFueraModal = document.getElementById('descripcionFueraModal');
    descripcionFueraModal.innerHTML = nuevaDescripcion;
    setDescripcion(nuevaDescripcion);
  };

  const [valorCampo, setValorCampo] = useState('');

  // const handleChange = (event) => {
  //   setValorCampo(event.target.value);
  // };
  // let items = Object.values(bloque).map(i => ({Ramo: i.ramos}));
  // console.log(items);
  return (
    <>
      {bloque.bloques_horario.dia === params.dia && bloque.bloques_horario.bloques_horas.inicio === params.hora[0] && (
        <div className="flex">
          <div className="text-gray-500 mr-4">
            {/* <form>
              <input type="checkbox" id="html" name="fav_language" value="HTML"></input>
               <label for="html"> Semestre {bloque.semestre} - {bloque.bloques_horario.ramos.ramo}</label>
            </form> */}
            <p>Descripción: {descripcion}</p>
            <button type="button" id="botonModal" onClick={handleClick} className="border border-green-500 bg-green-500 text-white px-4 py-2 transition duration-500 ease select-none hover:bg-green-800 text-center focus:shadow-outline">
            Semestre {bloque.semestre} - {bloque.bloques_horario.ramos.ramo}
            </button>
             {/* Semestre {bloque.semestre} - {bloque.bloques_horario.ramos.ramo} */}
          </div>
          {/* <div className="text-gray-500 mr-4">
            Grupo {bloque.bloques_horario.grupo}  
          </div>
          <div className="text-gray-500 mr-4">
            Profesor {bloque.bloques_horario.profesor}  
          </div>
          <div className="text-gray-500 mr-4">
            Sala {bloque.bloques_horario.sala} 
          </div> */}
        </div> 
      )}
    </>
  );
}
