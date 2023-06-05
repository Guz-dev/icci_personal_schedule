import axios from 'axios';

// CONEXION CON LA API
export const getData = () => {
    const data = axios.get('http://190.92.148.107:8080/')
    .then(response => {
        //console.log(response.data);
        return response.data
    })
    .catch(error => {
        console.log(error);
        return null
    })
    //console.log(data);
    return data

/* 
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
        return null;
    })

    return data
 */
}

