const express = require('express');
const resCon = require('../controladores/responsableController.js');// ocupa controllador para realizar operaciones con datos
const router = express.Router();

//gets
router.get('/all',resCon.fetchAll);
router.get('/Id/:id',resCon.fetchById);//las operaciones GET
router.get('/NumeroEmpleado/:numEmp',resCon.fetchByNumEmp);//se pueden buscar a patir de cualquier
router.get('/Nombre/:nombre',resCon.fetchByNombre);//atributo de responsable

//post
router.post('/',resCon.addResponsable);//operacion POST

//patch
router.patch('/Id/:id',resCon.changeById);  //operaciones PATCH
router.patch('/NumeroEmpleado/:numEmp',resCon.changeByNumEmp);//modificar un elemento especifico, indicando cual a partir
router.patch('/Nombre/:nombre',resCon.changeByNombre);//del valor de un atributo del mismo.

//delete
router.delete('/Id/:id',resCon.deleteById);//operaciones DELETE
router.delete('/NumeroEmpleado/:numEmp',resCon.deleteByNumEmp);//para la eliminacion de un elemento especifico, 
router.delete('/Nombre/:nombre',resCon.deleteByNombre);//indicando con uno de sus atributos.

module.exports = router;//exportar router para ser usado por app.