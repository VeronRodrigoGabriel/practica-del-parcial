// TODO: Importar controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const { ObtenerunaReserva, renderCrearReserva, renderObtenerReservas, rendereditarReserva, ObtenerReservas, CrearReserva, editarReserva, eliminarReserva } = require("../controllers/reserva.controllers")

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get("/", renderObtenerReservas)

// Formulario para crear una reserva
router.get("/crear-reserva", renderCrearReserva)

// Formulario para actualizar una reserva
router.get("/actualizar-reserva/:id", rendereditarReserva)


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api', ObtenerReservas);

// Crear una reserva
router.post('/api', CrearReserva);

//obtener una reserva
router.get('/api/:id', ObtenerunaReserva)

// Actualizar una reserva
router.put('/api/:id', editarReserva);

// Eliminar una reserva de forma lógica
router.delete('/api/:id', eliminarReserva);




module.exports = router;