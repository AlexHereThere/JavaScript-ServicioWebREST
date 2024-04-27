const models = require("../models");

async function findAll()
{
    const tags = await models.Tag.findAll();
    return tags;
}
async function findById(idBusc)
{
    const tag = await models.Tag.findOne({
        where:
        {
            id:idBusc
        }
    });
    return tag;
}
async function findByName(nameBusc)
{
    const tag = await models.Tag.findOne({
        where:
        {
            nombre:nameBusc
        }
    });
   return tag;
}

async function addNew(tag)//para agregar nuevos tags
{
    await models.Tag.create(tag);
}

async function cambiarTag(newTag,metodoBusc) //para cambiar un Tag buscado por otro que es dado
{
   await models.Tag.update(newTag,{
    where:
    {
        id: metodoBusc.id
    }
   });
}

async function eliminarTag(metodoBusc)
{
    const tagBusc = metodoBusc;
    await models.ActivoTag.destroy({
        where:
        {
            tagId:tagBusc.id
        }
    });
    await models.Tag.destroy({
        where:
        {
            id:tagBusc.id
        }
    });
}

module.exports = {
    findAll:findAll,
    findById:findById,
    findByName:findByName,
    addNew:addNew,
    cambiarTag:cambiarTag,
    eliminarTag:eliminarTag
}