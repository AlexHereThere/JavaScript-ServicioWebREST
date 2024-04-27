const tag = require('../modelos_backend/TagModel');

async function fetchAll(req,res)
{
    res.json(await tag.findAll());
}
async function fetchById(req,res)
{
    if(await tag.findById(req.params.id)==undefined) res.status(400).json("Error: no se encontro recurso.");
    else res.json(await tag.findById(req.params.id));
}
async function fetchByName(req,res)
{
    if(await tag.findByName(req.params.nombre)==undefined) res.status(400).json("Error: no se encontro recurso.");
    else res.json(await tag.findByName(req.params.nombre));
}

async function addTag(req,res)
{
    try{
        const newTag = req.body;
        await tag.addNew(newTag);//agregarlo
        res.status(200).json("Se agrego nuevo activo.");
    } 
    catch(err)
    {
        console.error("Error agregando Tag:",err)
        res.status(500).json("Error: interno del servidor al momento de agregar Tag.")
    }
    
}

async function changeById(req,res)
{
    try{
        const newVal = req.body;
        if(await tag.findById(req.params.id)!=null)
        {
            await tag.cambiarTag(newVal,await tag.findById(req.params.id));
            res.status(200).json("Se cambio contenido de Tag");
        }
        else res.status(400).json("Error: no se encontro el tag a cambiar.")
    }
    catch(err)
    {
        console.error("Error cambiando tag:",err)
        res.status(500).json("Error: interno del servidor al momento de cambiar Tag");
    }
}
async function changeByName(req,res)
{
    try{
        const newVal = req.body;
        if(await tag.findByName(req.params.nombre)!=null)
        {
            await tag.cambiarTag(newVal,await tag.findByName(req.params.nombre));
            res.status(200).json("Se cambio contenido de Tag");
        }
        else res.status(400).json("Error: no se encontro el tag a cambiar.")
    }
    catch(err)
    {
        console.error("Error cambiando tag:",err)
        res.status(500).json("Error: interno del servidor al momento de cambiar Tag");
    }
}

async function deleteById(req,res)
{
    try{
        if(await tag.findById(req.params.id)!=null)
        {
            await tag.eliminarTag(await tag.findById(req.params.id));
            res.status(200).json("Se elimino el tag exitosamente.");
        }
        else res.status(400).json("Error: no se encontro el tag que se quiere eliminar.");
    }
    catch(err)
    {
        console.error("Error borando tag:",err);
        res.status(500).json("Error: interno del servidor al momento de borrar tag.")
    }
}
async function deleteByName(req,res)
{
    try{
        if(await tag.findByName(req.params.nombre)!=null)
        {
            await tag.eliminarTag(await tag.findByName(req.params.nombre));
            res.status(200).json("Se elimino el tag exitosamente.");
        }
        else res.status(400).json("Error: no se encontro el tag que se quiere eliminar.");
    }
    catch(err)
    {
        console.error("Error borando tag:",err);
        res.status(500).json("Error: interno del servidor al momento de borrar tag.")
    }
}

module.exports = {
    fetchAll:fetchAll,
    fetchById:fetchById,
    fetchByName:fetchByName,
    addTag:addTag,
    changeById:changeById,
    changeByName:changeByName,
    deleteById:deleteById,
    deleteByName:deleteByName
}