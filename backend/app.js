'use strict'

var express = require('express');
var bodyParser = require ('body-parser');

var app = express();

//archivos rutas
var project_routes = require('./routes/project');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//rutas
app.use('/api', project_routes);
// app.get('/',(req, res )=>{
//     res.status(200).send(
//         "<h1>Página de inicio</h1>"
//     )
// });


module.exports = app;

