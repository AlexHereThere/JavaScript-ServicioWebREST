const express = require('express');
const actCon= require("../controladores/activoController.js");// ocupa controllador para realizar operaciones con datos
const router = express.Router(); //usar router


//gets
router.get('/all',actCon.fetchAll);
router.get('/Id/:id',actCon.fetchById);
router.get('/Serie/:serie',actCon.fetchBySerie);//las operaciones GET
router.get('/NumeroInventario/:numInv',actCon.fetchByNumInv);//se pueden buscar a patir de cualquier
router.get('/Tag/:tag',actCon.fecthByTag);//atributo de activo, ubicacion, responsable
router.get('/ResponsableId/:responsableId',actCon.fetchByResponsableId);
router.get('/UbicacionId/:ubicacionId',actCon.fetchByUbicacionId);

//post
router.post('/',actCon.addActivo);//operaciones POST

//patch
router.patch('/Id/:id',actCon.changeById); //operaciones PATCH
router.patch('/Serie/:serie',actCon.changeBySerie);
router.patch('/NumeroInventario/:numInv',actCon.changeByNumInv);
router.patch('/Tag/:tag',actCon.changeByTag);//modificar un elemento especifico, indicando cual a partir
router.patch('/ResponsableId/:responsableId',actCon.changeByResponsableId);//del valor de un atributo del mismo.
router.patch('/UbicacionId/:ubicacionId',actCon.changeByUbicacionId);

//delete
router.delete('/Id/:id',actCon.deleteById); //operaciones DELETE
router.delete('/Serie/:serie',actCon.deleteBySerie);
router.delete('/NumeroInventario/:numInv',actCon.deleteByNumInv);
router.delete('/Tag/:tag',actCon.deleteByTag);//para la eliminacion de un elemento especifico, 
router.delete('/ResponsableId/:responsableId',actCon.deleteByResponsableId);//indicando con uno de sus atributos.
router.delete('/UbicacionId/:ubicacionId',actCon.deleteByUbicacionId);

module.exports = router;//exportar router para ser usado por app.