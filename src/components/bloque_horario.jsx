
import React, { useState, useEffect } from "react";

export default function Bloque_horario({ params, bloque }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(bloque.isChecked);
  }, [bloque.isChecked]);

  return (
    <>
      {bloque.bloques_horario.dia == params.dia && bloque.bloques_horario.bloques_horas.inicio == params.hora[0] && (
        <tr>
          <td className='text-gray-500 px-2'>{bloque.semestre} </td>
          <td className='text-gray-500 px-2'>{bloque.bloques_horario.ramos.ramo}</td>
          <td className='text-gray-500 px-2'>{bloque.bloques_horario.grupo}</td>
          <td className='text-gray-500 px-2'>{bloque.bloques_horario.profesor}</td>
          <td className='text-gray-500 px-2'>{bloque.bloques_horario.sala}</td>
          <td> <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/> </td>
        </tr>

      )}
    </>
  
  )  

}

