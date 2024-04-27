const resp = require('../modelos_backend/responsableModel.js');//especificar que se ocupa responsableModel

async function fetchAll(req,res)
{
    res.json(await resp.findAll());//utilizan funciones declaradas en responsableModel
}
async function fetchById(req,res)//funciones para GET del servicio web, en relacion de responsables
{
    if(await resp.findById(req.params.id)==undefined) res.status(400).json("Error: no se encontro recurso.");
    else res.json(await resp.findById(req.params.id));
}
async function fetchByNumEmp(req,res)
{
    if(await resp.findByNumEmp(req.params.numEmp)==undefined) res.status(400).json("Error: no se encontro recurso.");
    else res.json(await resp.findByNumEmp(req.params.numEmp));
}
async function fetchByNombre(req,res)
{
    if(await resp.findByNombre(req.params.nombre)==undefined) res.status(400).json("Error: no se encontro recurso.");
    else res.json(await resp.findByNombre(req.params.nombre));
}

async function addResponsable(req,res)//funcion para POST del servicio web, en relacion de activos
{
    try{
        const newRes = req.body;
        await resp.addNew(newRes);//agregarlo
        res.status(200).json("Se agrego nuevo responsable.");
    }//si no marca error
    catch(err)
    {
        console.error("Error agregando responsable:",err)
        res.status(500).json("Error: interno del servidor al momento de agregar responsable.")
    }
}

async function changeById(req,res)
{
    try{
        const newVal = req.body;
        if(await resp.findById(req.params.id)!=null)//buscar si existe el responsable que se desea
        {//cambiar
            await resp.cambiarResp(newVal,await resp.findById(req.params.id))
            res.status(200).json("Se cambio contenido de responsable")
        }
        else res.status(400).json("Error: no se encontro el responsable a cambiar.")
    }
     catch(err)
    {
        console.error("Error cambiando responsable:",err)
        res.status(500).json("Error: interno del servidor al momento de cambiar responsable.")
    }
}
async function changeByNumEmp(req,res)//funciones para PATCH del servicio web, en relacion de activos
{
    try{
        const newVal = req.body;
        if(await resp.findByNumEmp(req.params.numEmp)!=null)
        {
            await resp.cambiarResp(newVal,await resp.findByNumEmp(req.params.numEmp))
            res.status(200).json("Se cambio contenido de responsable")
        }
        else res.status(400).json("Error: no se encontro el responsable a cambiar.")
    }
    catch(err)
    {
       console.error("Error cambiando responsable:",err)
       res.status(500).json("Error: interno del servidor al momento de cambiar responsable.")
    }

}
async function changeByNombre(req,res)
{
    try{
        const newVal = req.body;
        if(await resp.findByNombre(req.params.nombre)!=null)
        {
            await resp.cambiarResp(newVal,await resp.findByNombre(req.params.nombre))
            res.status(200).json("Se cambio contenido de responsable")
        }
        else res.status(400).json("Error: no se encontro el responsable a cambiar.")
    }
    catch(err)
    {
       console.error("Error cambiando responsable:",err)
       res.status(500).json("Error: interno del servidor al momento de cambiar responsable.")
    }
}

async function deleteById(req,res)
{
    try{
        if(await resp.findById(req.params.id)!=null)//primero busca si existe el que se quiere eliminar.
        {
            await resp.eliminarResp(await resp.findById(req.params.id));
            res.status(200).json("Se elimino el responsable exitosamente.")
        }
        else res.status(400).json("Error: no se encontro el responsable que se quiere eliminar.")
    }
    catch(err)
    {
        console.error("Error borando responsable:",err)
        res.status(500).json("Error: interno del servidor al momento de borrar responsable.")
    }
}
async function deleteByNumEmp(req,res)//funciones para DELETE del servicio web, en relacion de activos
{
    try{
        if(await resp.findByNumEmp(req.params.numEmp)!=null)
        {
           await resp.eliminarResp(await resp.findById(req.params.numEmp));
            res.status(200).json("Se elimino el responsable exitosamente.")
        }
        else res.status(400).json("Error: no se encontro el responsable que se quiere eliminar.")
    }
    catch(err)
    {
        console.error("Error borando responsable:",err)
        res.status(500).json("Error: interno del servidor al momento de borrar responsable.")
    }
}
async function deleteByNombre(req,res)
{
    try{
        if(await resp.findByNombre(req.params.nombre)!=null)
        {
            await resp.eliminarResp(await resp.findById(req.params.nombre));
            res.status(200).json("Se elimino el responsable exitosamente.")
        }
        else res.status(400).json("Error: no se encontro el responsable que se quiere eliminar.")
    }
    catch(err)
    {
        console.error("Error borando responsable:",err)
        res.status(500).json("Error: interno del servidor al momento de borrar responsable.")
    }
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