const resp = require('../modelos/responsableModel.js');//especificar que se ocupa responsableModel

function fetchAll(req,res)
{
    res.json(resp.findAll());//utilizan funciones declaradas en responsableModel
}

function fetchById(req,res)//funciones para GET del servicio web, en relacion de responsables
{
    res.json(resp.findById(req.params.id));
}

function fetchByNumEmp(req,res)
{
    res.json(resp.findByNumEmp(req.params.numEmp));
}

function fetchByNombre(req,res)
{
    res.json(resp.findByNombre(res.params.nombre));
}

function addResponsable(req,res)//funcion para POST del servicio web, en relacion de activos
{
    const newRes = req.body;
    if(resp.esResponsable(newRes) && !resp.estaResponsable(newRes))//si es responsable y no esta en la lista de responsables
    {
        resp.addNew(newRes);//agregarlo
        res.json("Se agrego nuevo responsable.");
    }//si no marca error
    else res.json("Error: no se acepto responsable nuevo (ya existe o no tiene los parametros necesarios).")
}

function changeById(req,res)
{
    const newVal = req.body;
    if(resp.findById(req.params.id)!=null && resp.esResponsable(newVal))//buscar si existe el responsable que se desea
    {//cambiar
        resp.cambiarResp(newVal,resp.findById(req.params.id))
        res.json("Se cambio contenido de responsable")
    }
    else res.json("Error: no se encontro el responsable a cambiar o el nuevo activo no es apto para remplazar el anterior")
}

function changeByNumEmp(req,res)//funciones para PATCH del servicio web, en relacion de activos
{
    const newVal = req.body;
    if(resp.findByNumEmp(req.params.numEmp)!=null && resp.esResponsable(newVal))
    {
        resp.cambiarResp(newVal,resp.findByNumEmp(req.params.numEmp))
        res.json("Se cambio contenido de responsable")
    }
    else res.json("Error: no se encontro el responsable a cambiar o el nuevo activo no es apto para remplazar el anterior")
}

function changeByNombre(req,res)
{
    const newVal = req.body;
    if(resp.findByNombre(req.params.nombre)!=null && resp.esResponsable(newVal))
    {
        resp.cambiarResp(newVal,resp.findByNombre(req.params.nombre))
        res.json("Se cambio contenido de responsable")
    }
    else res.json("Error: no se encontro el responsable a cambiar o el nuevo activo no es apto para remplazar el anterior")
}

function deleteById(req,res)
{
    if(resp.findById(req.params.id)!=null)//primero busca si existe el que se quiere eliminar.
    {
        resp.eliminarResp(resp.findById(req.params.id));
        res.json("Se elimino el activo exitosamente.")
    }
    else res.json("Error: no se encontro el activo que se quiere eliminar.")
}

function deleteByNumEmp(req,res)//funciones para DELETE del servicio web, en relacion de activos
{
    if(resp.findByNumEmp(req.params.numEmp)!=null)
    {
        resp.eliminarResp(resp.findById(req.params.numEmp));
        res.json("Se elimino el activo exitosamente.")
    }
    else res.json("Error: no se encontro el activo que se quiere eliminar.")
}

function deleteByNombre(req,res)
{
    if(resp.findByNombre(req.params.nombre)!=null)
    {
        resp.eliminarResp(resp.findById(req.params.nombre));
        res.json("Se elimino el activo exitosamente.")
    }
    else res.json("Error: no se encontro el activo que se quiere eliminar.")
}


module.exports = {//exportaciones para que se puedan usar en App.js
    fetchAll:fetchAll,
    fetchById:fetchById,
    fetchByNumEmp:fetchByNumEmp,
    fetchByNombre:fetchByNombre,
    addResponsable:addResponsable,
    changeById:changeById,
    changeByNumEmp:changeByNumEmp,
    changeByNombre:changeByNombre,
    deleteById:deleteById,
    deleteByNumEmp:deleteByNumEmp,
    deleteByNombre:deleteByNombre
}