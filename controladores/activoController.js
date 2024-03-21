const act = require('../modelos/activoModel.js')//especificar que se ocupa activoModel

function fetchAll(req,res)
{
    res.json(act.findAll());//utilizan funciones declaradas en activoModel
}
function fetchById(req,res)
{
    if(act.findById(req.params.id)==undefined) res.json("Error: no se encontro recurso.");
    else res.json(act.findById(req.params.id));
}
function fetchBySerie(req,res)//funciones para GET del servicio web, en relacion de activos
{
    if(act.findBySerie(req.params.serie)==undefined) res.json("Error: no se encontro recurso.");
    else res.json(act.findBySerie(req.params.serie));
}
function fecthByTipo(req,res)
{
    if(act.findByTipo(req.params.tipo)==undefined) res.json("Error: no se encontro recurso.");
    else res.json(act.findByTipo(req.params.tipo));
}
function fetchByNumInv(req,res)
{
    if(act.findByNumInv(req.params.numInv)==undefined) res.json("Error: no se encontro recurso.");
    else res.json(act.findByNumInv(req.params.numInv));
}
function fetchByUbicacion(req,res)
{
    if(act.findByUbicacion(req.params.ubicacion)==undefined) res.json("Error: no se encontro recurso.");
    else res.json(act.findByUbicacion(req.params.ubicacion));
}
function fetchByResponsable(req,res)
{
    if(act.findByResponsable(req.params.responsable)==undefined) res.json("Error: no se encontro recurso.");
    else res.json(act.findByResponsable(req.params.responsable));
}

function addActivo(req,res)//funcion para POST del servicio web, en relacion de activos
{
    const newAct = req.body;
    if(act.esActivo(newAct) && !act.estaActivo(newAct))//si es activo y no esta en la lista de activos
    {
        act.addNew(newAct);//agregarlo
        res.json("Se agrego nuevo activo.");
    }//si no marca error.
    else res.json("Error: no se acepto activo nuevo (ya existe o no tiene los parametros necesarios).")
}

function changeById(req,res)
{
    const newVal = req.body;
    if(act.findById(req.params.id)!=null && act.esActivo(newVal))//buscar si existe el activo que se desea cambiar
    {//y si es valido el que el que lo cambiara
        act.cambiarActivo(newVal,act.findById(req.params.id))
        res.json("Se cambio contenido de activo")
    }
    else res.json("Error: no se encontro el activo a cambiar o el nuevo activo no es apto para remplazar el anterior")
}
function changeBySerie(req,res)
{
    const newVal = req.body;
    if(act.findBySerie(req.params.serie)!=null && act.esActivo(newVal))
    {
        act.cambiarActivo(newVal,act.findBySerie(req.params.serie))
        res.json("Se cambio contenido de activo")
    }
    else res.json("Error: no se encontro el activo a cambiar o el nuevo activo no es apto para remplazar el anterior")
}
function changeByNumInv(req,res)//funciones para PATCH del servicio web, en relacion de activos
{
    const newVal = req.body;
    if(act.findByNumInv(req.params.numInv)!=null && act.esActivo(newVal))
    {
        act.cambiarActivo(newVal,act.findByNumInv(req.params.numInv))
        res.json("Se cambio contenido de activo")
    }
    else res.json("Error: no se encontro el activo a cambiar o el nuevo activo no es apto para remplazar el anterior")
}
function changeByTipo(req,res)
{
    const newVal = req.body;
    if(act.findByTipo(req.params.tipo)!=null && act.esActivo(newVal))
    {
        act.cambiarActivo(newVal,act.findByTipo(req.params.tipo))
        res.json("Se cambio contenido de activo")
    }
    else res.json("Error: no se encontro el activo a cambiar o el nuevo activo no es apto para remplazar el anterior")
}
function changeByResponsable(req,res)
{
    const newVal = req.body;
    if(act.findByResponsable(req.params.responsable)!=null && act.esActivo(newVal))
    {
        act.cambiarActivo(newVal,act.findByResponsable(req.params.responsable))
        res.json("Se cambio contenido de activo")
    }
    else res.json("Error: no se encontro el activo a cambiar o el nuevo activo no es apto para remplazar el anterior")
}
function changeByUbicacion(req,res)
{
    const newVal = req.body;
    if(act.findByUbicacion(req.params.ubicacion)!=null && act.esActivo(newVal))
    {
        act.cambiarActivo(newVal,act.findByUbicacion(req.params.ubicacion))
        res.json("Se cambio contenido de activo")
    }
    else res.json("Error: no se encontro el activo a cambiar o el nuevo activo no es apto para remplazar el anterior")
}

function deleteById(req,res) 
{
    if(act.findById(req.params.id)!=null) //primero busca si existe el que se quiere eliminar.
    {
        act.eliminarActivo(act.findById(req.params.id));
        res.json("Se elimino el activo exitosamente.")
    }
    else res.json("Error: no se encontro el activo que se quiere eliminar.")
}
function deleteBySerie(req,res)//funciones para DELETE del servicio web, en relacion de activos
{
    if(act.findBySerie(req.params.serie)!=null)
    {
        act.eliminarActivo(act.findBySerie(req.params.serie));
        res.json("Se elimino el activo exitosamente.")
    }
    else res.json("Error: no se encontro el activo que se quiere eliminar.")
}
function deleteByTipo(req,res)
{
    if(act.findByTipo(req.params.tipo)!=null)
    {
        act.eliminarActivo(act.findByTipo(req.params.tipo));
        res.json("Se elimino el activo exitosamente.")
    }
    else res.json("Error: no se encontro el activo que se quiere eliminar.")
}
function deleteByNumInv(req,res)
{
    if(act.findByNumInv(req.params.numInv)!=null)
    {
        act.eliminarActivo(act.findByNumInv(req.params.numInv));
        res.json("Se elimino el activo exitosamente.")
    }
    else res.json("Error: no se encontro el activo que se quiere eliminar.")
}
function deleteByResponsable(req,res)
{
    if(act.findByResponsable(req.params.responsable)!=null)
    {
        act.eliminarActivo(act.findByResponsable(req.params.responsable));
        res.json("Se elimino el activo exitosamente.")
    }
    else res.json("Error: no se encontro el activo que se quiere eliminar.")
}
function deleteByUbicacion(req,res)
{
    if(act.findByUbicacion(req.params.ubicacion)!=null)
    {
        act.eliminarActivo(act.findByUbicacion(req.params.ubicacion));
        res.json("Se elimino el activo exitosamente.")
    }
    else res.json("Error: no se encontro el activo que se quiere eliminar.")
}

module.exports = { //exportaciones para que se puedan usar en App.js
    fetchAll:fetchAll,
    fetchById:fetchById,
    fetchBySerie:fetchBySerie,
    fecthByTipo:fecthByTipo,
    fetchByNumInv:fetchByNumInv,
    fetchByResponsable:fetchByResponsable,
    fetchByUbicacion:fetchByUbicacion,
    addActivo:addActivo,
    changeById:changeById,
    changeBySerie:changeBySerie,
    changeByNumInv:changeByNumInv,
    changeByTipo:changeByTipo,
    changeByResponsable:changeByResponsable,
    changeByUbicacion:changeByUbicacion,
    deleteById:deleteById,
    deleteBySerie:deleteBySerie,
    deleteByTipo:deleteByTipo,
    deleteByNumInv:deleteByNumInv,
    deleteByResponsable:deleteByResponsable,
    deleteByUbicacion:deleteByUbicacion
}