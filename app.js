// Imports
const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
const helmet = require("helmet")
const morgan = require("morgan")
require("dotenv").config();
require("ejs")

//conexion a la base de datos
const { sequelize } = require("./db")
sequelize.authenticate()
    .then(() => console.log("Base de datos  conectada"))
    .catch((error) => {
        console.log(error);
        process.exit()
    });

const port = process.env.PORT

// Middlewares
// TODO: Implementar middlewares
app.use(cors())
app.use(morgan("dev"))
// app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")


app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
    return res.status(404).render("404.ejs")

})




// Starting the server
app.listen(port, () => console.log('Server on port', port));