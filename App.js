const act = require('./controladores/activoController.js');
const ubi = require('./controladores/ubicacionController.js');//indicar que usa los controladores
const res = require('./controladores/responsableController.js');

const express = require('express');//indicar que usa express

const app = express();
app.use(express.json());//para posibilitar la lectura del body, cuando se hacen operaciones que ocupan datos
app.use(express.urlencoded({extended:true}));//de parte del cliente (POST,PATCH)

const port = 4000;

app.get('/',(req,res)=>{ //tener algo en la pagina principal
    res.send("Hola Mundo");
});

//gets
app.get('/Activo/All',act.fetchAll);
app.get('/Activo/Id/:id',act.fetchById);
app.get('/Activo/Serie/:serie',act.fetchBySerie);//las operaciones GET
app.get('/Activo/NumeroInventario/:numInv',act.fetchByNumInv);//se pueden buscar a patir de cualquier
app.get('/Activo/Tipo/:tipo',act.fecthByTipo);//atributo de activo, ubicacion, responsable
app.get('/Activo/Responsable/:responsable',act.fetchByResponsable);
app.get('/Activo/Ubicacion/:ubicacion',act.fetchByUbicacion);

app.get('/Ubicacion/All',ubi.fetchAll);
app.get('/Ubicacion/Id/:id',ubi.fetchById);

app.get('/Responsable/All',res.fetchAll);
app.get('/Responsable/Id/:id',res.fetchById);
app.get('/Responsable/NumeroEmpleado/:numEmp',res.fetchByNumEmp);
app.get('/Responsable/Nombre/:nombre',res.fetchByNombre);

//posts
app.post('/Activo',act.addActivo);//operaciones POST

app.post('/Ubicacion',ubi.addUbicacion);//para la creacion de activos,ubicaciones,responsables

app.post('/Responsable',res.addResponsable);

//patch
app.patch('/Activo/Id/:id',act.changeById); //operaciones PATCH
app.patch('/Activo/Serie/:serie',act.changeBySerie);
app.patch('/Activo/NumeroInventario/:numInv',act.changeByNumInv);
app.patch('/Activo/Tipo/:tipo',act.changeByTipo);//modificar un elemento especifico, indicando cual a partir
app.patch('/Activo/Responsable/:responsable',act.changeByResponsable);//del valor de un atributo del mismo.
app.patch('/Activo/Ubicacion/:ubicacion',act.changeByUbicacion);

app.patch('/Ubicacion/Id/:id',ubi.changeById);

app.patch('/Responsable/Id/:id',res.changeById);
app.patch('/Responsable/NumeroEmpleado/:numEmp',res.changeByNumEmp);
app.patch('/Responsable/Nombre/:nombre',res.changeByNombre);

//delete
app.delete('/Activo/Id/:id',act.deleteById); //operaciones DELETE
app.delete('/Activo/Serie/:serie',act.deleteBySerie);
app.delete('/Activo/NumeroInventario/:numInv',act.deleteByNumInv);
app.delete('/Activo/Tipo/:tipo',act.deleteByTipo);//para la eliminacion de un elemento especifico, 
app.delete('/Activo/Responsable/:responsable',act.deleteByResponsable);//indicando con uno de sus atributos.
app.delete('/Activo/Ubicacion/:ubicacion',act.deleteByUbicacion);

app.delete('/Ubicacion/Id/:id',ubi.deleteById);

app.delete('/Responsable/Id/:id',res.deleteById);
app.delete('/Responsable/NumeroEmpleado/:numEmp',res.deleteByNumEmp);
app.delete('/Responsable/Nombre/:nombre',res.deleteByNombre);


app.listen(port, ()=>{
    console.log("Servidor escuchando por el puerto",port);//para visualizar cuando esta corriendo el servicio wb
}).on("error",err=>{ //y cuando se presenta un problema
    console.log("Error al iniciar el servidor:",err);
});