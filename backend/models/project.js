'use strict'
//Este es el modelo que se va a tomar de referencia en la base de datos.
//cada modelo es un documento en la BD

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name:String,
    description:String,
    category:String,
    year:Number,
    langs:String,
    image: String
});

module.exports = mongoose.model('Project', ProjectSchema);


