// CONEXION CON LA API
export const getData = async() => {

    const { data } = await fetch('http://190.92.148.107:8080/', {
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

