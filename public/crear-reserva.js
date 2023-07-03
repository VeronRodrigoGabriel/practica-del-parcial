const formCrearReserva =  document.querySelector('#formNuevaReserva')

formCrearReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const fecha_ingreso = document.querySelector('#fecha_ingreso').value;
    const fecha_salida = document.querySelector('#fecha_salida').value;
    const habitacion = document.querySelector('#habitacion').value;
    const cantidad_personas = document.querySelector('#cantidad_personas').value;
    const telefono = document.querySelector('#telefono').value;
    const email = document.querySelector('#email').value;



    const reserva = {
        nombre,
        apellido, 
        fecha_ingreso, 
        fecha_salida,
        habitacion,
        telefono,
        email,
        cantidad_personas
    }

    const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        body: JSON.stringify(reserva),
        headers: {
            'Content-Type':'application/json'
        }
    })

    const data = await response.json()

    alert(data.message)
    window.location.href = "/"
    

})