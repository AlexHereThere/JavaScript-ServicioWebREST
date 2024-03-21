const ubi = require('../modelos/ubicacionModel.js')//especificar que se ocupa ubicacionModel

function fetchAll(req,res)
{
    res.json(ubi.findAll());//utilizan funciones declaradas en ubicacionModel
}

function fetchById(req,res)//funciones para GET del servicio web, en relacion de ubicaciones
{
    if(ubi.findById(req.params.id)==undefined) res.json("Error: no se encontro recurso.");
    else res.json(ubi.findById(req.params.id));
}

function addUbicacion(req,res)//funcion para POST del servicio web, en relacion de ubicaciones
{
    const newUbi = req.body;
    if(ubi.esUbicacion(newUbi) && !ubi.estaUbicacion(newUbi))//si es ubicacion y no esta en la lista de ubicaciones
    {
        ubi.addNew(newUbi);//agregarlo
        res.json("Se agrego nueva ubicacion.");
    }//si no marcar error.
    else res.json("Error: no se acepto ubicacion nueva (ya existe o no tiene los parametros necesarios).")
}

function changeById(req,res)//funcion para PATCH del servicio web, en relacion de ubicaciones
{
    const newVal = req.body;
    if(ubi.findById(req.params.id)!=null && ubi.esUbicacion(newVal))//buscar si existe la ubicacion que se desea
    {//cambiar
        ubi.cambiarUbi(newVal,ubi.findById(req.params.id))
        res.json("Se cambio contenido de activo")
    }
    else res.json("Error: no se encontro el activo a cambiar o el nuevo activo no es apto para remplazar el anterior")
}

function deleteById(req,res)//funcion para DELETE del servicio web, en relacion de ubicaciones
{
    if(ubi.findById(req.params.id)!=null)//primero busca si existe el que se quiere eliminar.
    {
        ubi.eliminarUbi(ubi.findById(req.params.id));
        res.json("Se elimino el activo exitosamente.")
    }
    else res.json("Error: no se encontro el activo que se quiere eliminar.")
}

module.exports = {
    fetchAll:fetchAll,
    fetchById:fetchById,
    addUbicacion:addUbicacion,
    changeById:changeById,
    deleteById:deleteById
}