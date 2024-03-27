const express = require('express');//indicar que usa express
const fs = require('fs'); //modulo de operacion del sistema de archivos
const https = require('https'); //modulo para usar el protocolo HTTPS
const cors = require('cors'); //intercambio de recursos de origen cruzado
const app = express();

const activoRouter = require('./routers/activos.js');
const responsableRouter = require('./routers/responsables.js') //dividr el control de pedidos en routers
const ubicacionRouter = require('./routers/ubicaciones.js') 

app.use(express.json());//para posibilitar la lectura del body, cuando se hacen operaciones que ocupan datos
app.use(express.urlencoded({extended:true}));//de parte del cliente (POST,PATCH)
app.use(cors({
    origin:'http://localhost:3000',//sitio permitido tomar recursos
    optionsSuccessStatus:200, //estado de exito.
    credentials: true, //habilitar credenciales.
}));

app.use('/activo',activoRouter);
app.use('/responsable',responsableRouter);//indicar como se accesan para el cliente las rutas a los recursos.
app.use('/ubicacion',ubicacionRouter);

const port = 4000;

app.get('/',(req,res)=>{ //tener algo en la pagina principal
    res.send("Hola Mundo");
});

https.createServer({
    cert: fs.readFileSync('server.crt'),//crear servidor https con certificado autofirmado y llave 
    key: fs.readFileSync('server.key')
},app).listen(port, ()=>{
    console.log("Servidor escuchando por el puerto",port);//para visualizar cuando esta corriendo el servicio wb
}).on("error",err=>{ //y cuando se presenta un problema
    console.log("Error al iniciar el servidor:",err);
});