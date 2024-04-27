const express = require('express');
const tagCon = require("../controladores/TagController.js");
const router = express.Router();

router.get('/all',tagCon.fetchAll);
router.get('/Id/:id',tagCon.fetchById);
router.get('/nombre/:nombre',tagCon.fetchByName);

router.post('/',tagCon.addTag);

router.patch('/Id/:id',tagCon.changeById);
router.patch('/Nombre/:nombre',tagCon.changeByName);

router.delete('/Id/:id',tagCon.deleteById);
router.delete('/Nombre/:nombre',tagCon.deleteByName);

module.exports = router;