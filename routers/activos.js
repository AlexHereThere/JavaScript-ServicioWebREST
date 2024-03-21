const express = require('express');
const actCon= require("../controladores/activoController.js");// ocupa controllador para realizar operaciones con datos
const router = express.Router(); //usar router


//gets
router.get('/all',actCon.fetchAll);
router.get('/Id/:id',actCon.fetchById);
router.get('/Serie/:serie',actCon.fetchBySerie);//las operaciones GET
router.get('/NumeroInventario/:numInv',actCon.fetchByNumInv);//se pueden buscar a patir de cualquier
router.get('/Tipo/:tipo',actCon.fecthByTipo);//atributo de activo, ubicacion, responsable
router.get('/Responsable/:responsable',actCon.fetchByResponsable);
router.get('/Ubicacion/:ubicacion',actCon.fetchByUbicacion);

//post
router.post('/',actCon.addActivo);//operaciones POST

//patch
router.patch('/Id/:id',actCon.changeById); //operaciones PATCH
router.patch('/Serie/:serie',actCon.changeBySerie);
router.patch('/NumeroInventario/:numInv',actCon.changeByNumInv);
router.patch('/Tipo/:tipo',actCon.changeByTipo);//modificar un elemento especifico, indicando cual a partir
router.patch('/Responsable/:responsable',actCon.changeByResponsable);//del valor de un atributo del mismo.
router.patch('/Ubicacion/:ubicacion',actCon.changeByUbicacion);

//delete
router.delete('/Id/:id',actCon.deleteById); //operaciones DELETE
router.delete('/Serie/:serie',actCon.deleteBySerie);
router.delete('/NumeroInventario/:numInv',actCon.deleteByNumInv);
router.delete('/Tipo/:tipo',actCon.deleteByTipo);//para la eliminacion de un elemento especifico, 
router.delete('/Responsable/:responsable',actCon.deleteByResponsable);//indicando con uno de sus atributos.
router.delete('/Ubicacion/:ubicacion',actCon.deleteByUbicacion);

module.exports = router;//exportar router para ser usado por app.