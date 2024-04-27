const { FORCE } = require("sequelize/lib/index-hints");
const models = require("../models");

async function findAll()
{
    const act = await models.Activo.findAll();
    return act;
}

async function findById(idBusc)//funciones de busqueda
{
    const act = await models.Activo.findOne({
        where:
        {
            id:idBusc
        }
    });
   return act;
}

async function findBySerie(serieBusc)
{
    const act = await models.Activo.findOne({
        where:
        {
            numSerie:serieBusc
        }
    })
    
    return act;
}

async function findByUbicacionId(UbicacionIdBusc)//como varios elementos pueden tener la misma ubicacion o responsable 
{//regresan un arreglo de valores
    const activos = await models.Activo.findAll({
        where:
        {
            ubicacionId: UbicacionIdBusc
        }
    });
    return activos;
}

async function findByResponsableId(responsableIdBusc)
{
    const activos = await models.Activo.findAll({
        where:
        {
            responsableId: responsableIdBusc
        }
    })
    return activos;
}

async function findByTag(TagBusc)
{
    const tag = await models.Tag.findOne({
        where:
        {
            nombre:TagBusc
        }
    });
    const activos = await tag.getActivos();
    return activos;
}

async function findByNumInv(NumInvBusc)
{
    const activo = await models.Activo.findOne({
        where:
        {
            numInventario:NumInvBusc
        }
    });
    return activo;
}

async function addNew(activo)//para agregar nuevos activos
{
    await models.Activo.create(activo);
}


async function cambiarActivo(newAct,metodoBusc) //para cambiar una activo buscado por otro que es dado
{
   await models.Activo.update(newAct,{
    where:
    {
        id: metodoBusc.id
    }
   });
}

async function eliminarActivo(metodoBusc) //para eliminar un activo buscado
{
    const activoBusc = metodoBusc;
    await models.ActivoTag.destroy({
        where:
        {
            activoId:activoBusc.id
        }
    });
    await models.Activo.destroy({
        where: 
        {
            id: activoBusc.id
        }
    });
}

module.exports = { //exportaciones para poder ser usado por activoController
    findAll: findAll,
    findById: findById,
    findBySerie: findBySerie,
    findByNumInv: findByNumInv,
    findByResponsableId: findByResponsableId,
    findByTag: findByTag,
    findByUbicacionId: findByUbicacionId,
    addNew:addNew,
    cambiarActivo:cambiarActivo,
    eliminarActivo:eliminarActivo
}

