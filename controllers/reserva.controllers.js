const Reserva = require("../models/Reserva")
const ctrl = {};

ctrl.renderObtenerReservas = (req,res) => {
    res.render("listado-reserva")
}

ctrl.renderCrearReserva = (req,res) =>{
    res.render("nuevareserva")
}
ctrl.rendereditarReserva = (req,res) =>{
    const {id} = req.params;
    res.render('editar-reserva', {id})
}

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrl.ObtenerReservas = async(req,res) =>{
    try{
        const reservas = await Reserva.findAll({
            where: {
                estado: true
            }
        })
           return res.json(reservas)
    } catch(error){
        console.log("Error al obtener las reservas",error)
        return res.status(500).json({
            message: "error al obtener las reservas"
        })
    }
  

 
}

// Crear una reserva
ctrl.CrearReserva = async(req,res) =>{
    const {
        nombre,
        apellido, 
        fecha_ingreso, 
        fecha_salida,
        habitacion,
        telefono,
        email,
        cantidad_personas
    } = req.body
    
    try{
        const nuevaReserva = new Reserva({
            nombre,
            apellido, 
            fecha_ingreso, 
            fecha_salida,
            habitacion,
            telefono,
            email,
            cantidad_personas
        })
        await nuevaReserva.save()
    
        return res.status(201).json({
            message: 'Reserva creada con exito'
        })

    }catch(error){
        console.log("Error al crear reserva",error)
        return res.status(500).json({
            message: "error al crear reserva"
        })
    }

}

//obtener una reserva
ctrl.ObtenerunaReserva = async(req,res) =>{
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        return res.json(reserva);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al obtener la reserva'
        })
    }
}


// Actualizar una reserva
ctrl.editarReserva = async( req,res) =>{
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        await reserva.update(req.body)
        return res.json({
            message: 'Reserva actualizada exitosamente'
        });
    } catch (error) {
        console.log('Error al actualizar la reserva', error);
        return res.status(500).json({
            message: 'Error al actualizar la reserva'
        })
    }
}

// Eliminar una reserva de forma lógica
ctrl.eliminarReserva = async (req, res) =>{
    const { id } = req.params;
    try {
        const reserva = await Reserva.findByPk(id);
        await reserva.update({ estado: false });
        return res.json({ message: 'Reserva se eliminó correctamente' })
    } catch (error) {
        console.log('Error al eliminar la reserva', error);
        return res.status(500).json({
            message: 'Error al eliminar la reserva'
        })
    }
}


module.exports = ctrl;