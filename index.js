const express = require("express")
const mongoose = require('mongoose');

const app = express()

mongoose.connect(
    'mongodb://rvaldes:mypassword@mongo:27017/?authSource=admin')
    .then( () => console.log("Conexión exitosa.!!!"))
    .catch((e) => console.log(e))

app.get("/", (req,res) => {
    res.send("<h1>App Node JS.</h1><h1>Rodrigo Valdés</h1>" +
        "<a>Aplicación NodeJS construida para hacer testing de conceptos devops.</a>" +
    "<h3>Copyright @Cybersyn 2021</h3>");
});

app.get("/health" , (req,res) =>{
    res.send("<h1>UP</h1>");
});
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Escuchando conexiones en el puerto ${port}`))