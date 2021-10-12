const express = require("express")

const app = express()

app.get("/", (req,res) => {
    res.send("<h1>App Node JS.</h1><a>Aplicación NodeJS construida para hacer testing de conceptos devops.</a>");
});

app.get("/health" , (req,res) =>{
    res.send("<h1>UP</h1>");
});
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Escuchando conexiones en el puerto ${port}`))