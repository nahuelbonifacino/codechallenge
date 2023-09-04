url = 'https://jsonplaceholder.typicode.com/users'

let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let fecha = document.getElementById("fecha")
let boton = document.getElementById("boton")

boton.addEventListener("click", () => {
    let body = {
        nombre: nombre.value,
        apellido: apellido.value,
        fecha: fecha.value,
    }  
    const solicitud = {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }
    fetch(url, solicitud)
        .then(response => {
            if(!response.ok){
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data)
        })
        .catch(error =>{
            console.error('Error:',error)
        })
})