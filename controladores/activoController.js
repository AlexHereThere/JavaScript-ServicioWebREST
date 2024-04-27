const act = require('../modelos_backend/activoModel')//especificar que se ocupa activoModel

async function fetchAll(req,res)
{
    res.json(await act.findAll());//utilizan funciones declaradas en activoModel
}
async function fetchById(req,res)
{
    if(await act.findById(req.params.id)==undefined) res.status(400).json("Error: no se encontro recurso.");
    else res.json(await act.findById(req.params.id));
}
async function fetchBySerie(req,res)//funciones para GET del servicio web, en relacion de activos
{
    if(await act.findBySerie(req.params.serie)==undefined) res.status(400).json("Error: no se encontro recurso.");
    else res.json(await act.findBySerie(req.params.serie));
}
async function fecthByTag(req,res)
{
    if(await act.findByTag(req.params.tipo)==undefined) res.status(400).json("Error: no se encontro recurso.");
    else res.json(await act.findByTag(req.params.tipo));
}
async function fetchByNumInv(req,res)
{
    if(await act.findByNumInv(req.params.numInv)==undefined) res.status(400).json("Error: no se encontro recurso.");
    else res.json(await act.findByNumInv(req.params.numInv));
}
async function fetchByUbicacionId(req,res)
{

    if(await act.findByUbicacionId(req.params.ubicacionId)==0) res.status(400).json("Error: no se encontro recurso.");
    else res.json(await act.findByUbicacionId(req.params.ubicacionId));
}
async function fetchByResponsableId(req,res)
{
    if(await act.findByResponsableId(req.params.responsableId)==0) res.status(400).json("Error: no se encontro recurso.");
    else res.json(await act.findByResponsableId(req.params.responsableId));
}

async function addActivo(req,res)//funcion para POST del servicio web, en relacion de activos
{
    try{
        const newAct = req.body;
        await act.addNew(newAct);//agregarlo
        res.json("Se agrego nuevo activo.");
    } 
    catch(err)
    {
        console.error("Error agregando activo:",err)
        res.status(500).json("Error: interno del servidor al momento de agregar activo.")
    }
    
}

async function changeById(req,res)
{
    try{
        const newVal = req.body;
        if(await act.findById(req.params.id)!=null)//buscar si existe el activo que se desea cambiar
        {//y si es valido el que el que lo cambiara
            await act.cambiarActivo(newVal,await act.findById(req.params.id));
            res.status(200).json("Se cambio contenido de activo");
        }
        else res.status(400).json("Error: no se encontro el activo a cambiar.");
    }
    catch(err)
    {
        console.error("Error cambiando activo:",err);
        res.status(500).json("Error: interno del servidor al momento de cambiar activo.");
    }
}
async function changeBySerie(req,res)
{
    try{
        const newVal = req.body;
        if(await act.findBySerie(req.params.serie)!=null)
        {
            await act.cambiarActivo(newVal,await act.findBySerie(req.params.serie))
            res.status(200).json("Se cambio contenido de activo")
        }
        else res.staus(400).json("Error: no se encontro el activo a cambiar.")
    }
    catch(err)
    {
        console.error("Error cambiando activo:",err)
        res.status(500).json("Error: interno del servidor al momento de cambiar activo.")
    }
}
async function changeByNumInv(req,res)//funciones para PATCH del servicio web, en relacion de activos
{
    try{
        const newVal = req.body;
        if(await act.findByNumInv(req.params.numInv)!=null)
        {
            await act.cambiarActivo(newVal,await act.findByNumInv(req.params.numInv))
            res.status(200).json("Se cambio contenido de activo")
        }
        else res.status(400).json("Error: no se encontro el activo a cambiar.")
    }
    catch(err)
    {
        console.error("Error cambiando activo:",err)
        res.status(500).json("Error: interno del servidor al momento de cambiar activo.")
    }
}
async function changeByTag(req,res)
{
    try{
        const newVal = req.body;
        if(await act.findByTag(req.params.tipo)!=null)
        {
            await act.cambiarActivo(newVal,await act.findByTipo(req.params.tipo))
            res.status(200).json("Se cambio contenido de activo")
        }
        else res.status(400).json("Error: no se encontro el activo a cambiar.")
    }
    catch(err)
    {
        console.error("Error cambiando activo:",err)
        res.status(500).json("Error: interno del servidor al momento de cambiar activo.")
    }
}
async function changeByResponsableId(req,res)
{
    try{
        const newVal = req.body;
        if(await act.findByResponsableId(req.params.responsableId)!=null)
        {
            await act.cambiarActivo(newVal,await act.findByResponsableId(req.params.responsable))
            res.status(200).json("Se cambio contenido de activo")
        }
        else res.status(400).json("Error: no se encontro el activo a cambiar.")
    }
    catch(err)
    {
        console.error("Error cambiando activo:",err)
        res.status(500).json("Error: interno del servidor al momento de cambiar activo.")
    }
}
async function changeByUbicacionId(req,res)
{
    try{
        const newVal = req.body;
        if(await act.findByUbicacionId(req.params.ubicacionId)!=null)
        {
            await act.cambiarActivo(newVal,await act.findByUbicacionId(req.params.ubicacionId))
            res.status(200).json("Se cambio contenido de activo")
        }
        else res.status(400).json("Error: no se encontro el activo a cambiar.")
    }
    catch(err)
    {
        console.error("Error cambiando activo:",err)
        res.status(500).json("Error: interno del servidor al momento de cambiar activo.")
    }
}

async function deleteById(req,res) 
{
    try{
        if(await act.findById(req.params.id)!=null) //primero busca si existe el que se quiere eliminar.
        {
            await act.eliminarActivo(await act.findById(req.params.id));
            res.status(200).json("Se elimino el activo exitosamente.");
        }
        else res.status(400).json("Error: no se encontro el activo que se quiere eliminar.");
    }
    catch(err)
    {
        console.error("Error borando activo:",err);
        res.status(500).json("Error: interno del servidor al momento de borrar activo.");
    }
}
async function deleteBySerie(req,res)//funciones para DELETE del servicio web, en relacion de activos
{
    try{
        if(await act.findBySerie(req.params.serie)!=null)
        {   
            await act.eliminarActivo(await act.findBySerie(req.params.serie));
            res.status(200).json("Se elimino el activo exitosamente.")
        }
        else res.status(400).json("Error: no se encontro el activo que se quiere eliminar.")
    }
    catch(err)
    {
        console.error("Error borando activo:",err)
        res.status(500).json("Error: interno del servidor al momento de borrar activo.")
    }
}
async function deleteByTag(req,res)
{
    try{
        if(await act.findByTag(req.params.tipo)!=null)
        {
            await act.eliminarActivo(await act.findByTag(req.params.tipo));
            res.status(200).json("Se elimino el activo exitosamente.")
        }
        else res.status(400).json("Error: no se encontro el activo que se quiere eliminar.")
    }
    catch(err)
    {
        console.error("Error borando activo:",err)
        res.status(500).json("Error: interno del servidor al momento de borrar activo.")
    }
}
async function deleteByNumInv(req,res)
{
    try{
        if(await act.findByNumInv(req.params.numInv)!=null)
        {
            await act.eliminarActivo(await act.findByNumInv(req.params.numInv));
            res.status(200).json("Se elimino el activo exitosamente.")
        }
        else res.status(400).json("Error: no se encontro el activo que se quiere eliminar.")
    }
    catch(err)
    {
        console.error("Error borando activo:",err)
        res.status(500).json("Error: interno del servidor al momento de borrar activo.")
    }
    
}
async function deleteByResponsableId(req,res)
{
    try{
        if(await act.findByResponsableId(req.params.responsableId)!=null)
        {
            await act.eliminarActivo(await act.findByResponsableId(req.params.responsableId));
            res.status(200).json("Se elimino el activo exitosamente.")
        }
        else res.status(400).json("Error: no se encontro el activo que se quiere eliminar.")
    }
    catch(err)
    {
        console.error("Error borando activo:",err)
        res.status(500).json("Error: interno del servidor al momento de borrar activo.")
    }
}
async function deleteByUbicacionId(req,res)
{
    try{
        if(await act.findByUbicacionId(req.params.ubicacionId)!=null)
        {
            await act.eliminarActivo(await act.findByUbicacionId(req.params.ubicacionId));
            res.status(200).json("Se elimino el activo exitosamente.")
        }
        else res.status(400).json("Error: no se encontro el activo que se quiere eliminar.")
    }
    catch(err)
    {
        console.error("Error borando activo:",err)
        res.status(500).json("Error: interno del servidor al momento de borrar activo.")
    }
}

module.exports = { //exportaciones para que se puedan usar en App.js
    fetchAll:fetchAll,
    fetchById:fetchById,
    fetchBySerie:fetchBySerie,
    fecthByTag:fecthByTag,
    fetchByNumInv:fetchByNumInv,
    fetchByResponsableId:fetchByResponsableId,
    fetchByUbicacionId:fetchByUbicacionId,
    addActivo:addActivo,
    changeById:changeById,
    changeBySerie:changeBySerie,
    changeByNumInv:changeByNumInv,
    changeByTag:changeByTag,
    changeByResponsableId:changeByResponsableId,
    changeByUbicacionId:changeByUbicacionId,
    deleteById:deleteById,
    deleteBySerie:deleteBySerie,
    deleteByTag:deleteByTag,
    deleteByNumInv:deleteByNumInv,
    deleteByResponsableId:deleteByResponsableId,
    deleteByUbicacionId:deleteByUbicacionId
}