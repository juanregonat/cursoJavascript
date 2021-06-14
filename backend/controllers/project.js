'use strict'
var Project = require('../models/project');
//var ProjectController   = require('../controllers/project');
var fs = require('fs');
var path = require('path');

//controller va a tener todas las funciones que conforman el controlador y los
//métodos que vamos a usar:
var controller = {
    home: function(req,res){
            return res.status(200).send({
                message:"Soy la home"
            });
    },
    
    test: function(req,res){        
        return res.status(200).send({            
            message:"Soy el método test del controlador de project"
        });
    },

    saveProject: function(req,res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored)=>{
            if(err) return res.status(500).send({
                message:'Error al guardar'
            });
            if(!projectStored) return res.status(404).send({
                message : 'No se ha podido guardar'
            });
            return res.status(200).send({
                project:projectStored});
        });
    },

    getProject: function(req, res){
        var projectId = req.params.id;

        if(projectId == null) res.status(404).send({
                 message: "El proyecto es nulo"
        })

        Project.findById(projectId,(err,project)=>{
            if(err) return res.status(500).send({
                message: "Error al devolver los datos"
            })

            if(!project) return res.status(404).send({
                message: "El proyecto no existe"
            })

            return res.status(200).send({
                project
            });

        });
            
    },

    getProjects: function(req, res){

        Project.find({}).sort('-year').exec((err, projects) => {
            if(err) return res.status(500).send({
                message: "Error 500"
            });

            if(!projects) return res.status(404).send({
                message: "No hay proyectos"
            });

            return res.status(200).send({
                projects
            });

        })
    },

    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;

        // parametros: el id a actualizar, los datos actualizados, forzar actualizacion, callback de error o exito
        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated)=>{
            if(err) return res.status(500).send({
                message: "Error al actualizar"
            });

            if(!projectUpdated) return res.status(404).send({
                message: "El proyecto no existe"
            });

            return res.status(200).send({
                project: projectUpdated
            });

        });
    },

    deleteProject: function(req, res){
        var projectId = req.params.id;        

        // parametros: el id a actualizar, los datos actualizados, forzar actualizacion, callback de error o exito
        Project.findOneAndDelete (projectId, (err, projectDeleted)=>{
            if(err) return res.status(500).send({
                message: "Error al eliminar"
            });

            if(!projectDeleted) return res.status(404).send({
                message: "El proyecto no existe"
            });

            return res.status(200).send({
                project:projectDeleted
            });

        });            
    },


    uploadImage: function(req, res){
        var projectId = req.params.id;
        var fileName = "imagen no subida...";

        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];
            
            if (fileExt == 'png' || 
            fileExt == 'jpg' || 
            fileExt == 'jpeg' || 
            fileExt == 'gif' ){

                Project.findByIdAndUpdate(projectId, {image: fileName}, {new:true}, (err, projectUpdated)=>{
                    if(err) return res.status(500).send({message: 'La imagen no se subió'});
    
                    if(!projectUpdated) return res.status(404).send({message: 'El proyecto no existe y la imagen no se ha cargado'});
    
                    return res.status(200).send({
                        project: projectUpdated
                    });
                });
                
            } else {
                fs.unlink(filePath, (err)=>{
                    return res.status(200).send({message:'La extension no es aceptable'});
                })

            }

        } else {
            return res.status(200).send({
                message: fileName
            });
        }

    },


    getImageFile: function(req, res){
		var file = req.params.image;
		var path_file = './uploads/'+file;

		fs.exists(path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({
					message: "No existe la imagen..."
				});
			}
		});
	}



};  

module.exports = controller;
