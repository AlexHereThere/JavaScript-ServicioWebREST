const express = require('express');
const ubiCon = require('../controladores/ubicacionController.js')// ocupa controllador para realizar operaciones con datos
const router = express.Router();

//gets
router.get('/all',ubiCon.fetchAll); //las operaciones GET
router.get('/Id/:id',ubiCon.fetchById);//se pueden buscar a patir de cualquier atributo de ubicacion

//post
router.post('/',ubiCon.addUbicacion);//operacion POST para la creacion de responsables

//patch
router.patch('/Id/:id',ubiCon.changeById); //operacion PATCH a partir de id

//delete 
router.delete('/Id/:id',ubiCon.deleteById);  //operacion DELETE a partir de id

module.exports = router;//exportar router para ser usado por app.