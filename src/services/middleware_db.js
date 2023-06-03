// CONEXION CON LA API
export const getData = async() => {
    const { data } = await fetch('https://icci-schedule-middleware-next.vercel.app/api/tables/bloques_horario', {
        method: 'GET',
        mode: 'cors',
    })
    .then(response => response.json())
    .then(data => {        
        return data
    })
    .catch(error => {
        console.log(error);
    })

    return data
}