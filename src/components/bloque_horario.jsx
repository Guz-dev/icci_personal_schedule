
export default function Bloque_horario({ params, bloque }) {
  return (
    <>
      {bloque.bloques_horario.dia == params.dia && bloque.bloques_horario.bloques_horas.inicio == params.hora[0] && (
        <div>
          <div className="font-medium">{bloque.bloques_horario.ramos.ramo}</div>
          <div className="text-gray-500">
            {bloque.bloques_horario.sala} - Grupo {bloque.bloques_horario.grupo}<br></br>
            {bloque.bloques_horario.profesor} 
          </div>
        </div>
      )}
    </>
  
  )  
  
}
