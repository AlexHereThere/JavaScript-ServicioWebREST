const models = require("../models");

async function findAll()
{
    const res = await models.Responsable.findAll()
    return res;
}

async function findById(idBusc)//funciones de busqueda
{
   const res = await models.Responsable.findOne({
        where:
        {
            id:idBusc
        }
   })
   return res
}

async function findByNumEmp(NumEmpBusc)
{
   const res = await models.Responsable.findOne({
        where:
        {
            numEmpl:NumEmpBusc
        }
   })
   return res
}

async function findByNombre(nombreBusc)
{
   const res = await models.Responsable.findOne({
        where:
        {
            nombre:nombreBusc
        }
   })
   return res
}

async function addNew(resp)//para agregar nuevos responsables
{
   await models.Responsable.create(resp)
}



async function cambiarResp(newRes,metodoBusc) //para cambiar una responsable buscado por otro que es dado
{
   await models.Responsable.update(newRes,{
        where:
        {
            id:metodoBusc.id
        }
   })
}

async function eliminarResp(metodoBusc)//para eliminar un responsable buscado
{
    const resp = metodoBusc;
    const acts = await models.Activo.findAll({
        where:
        {
            responsableId:resp.id
        }
    });
    for(const act of acts)
    {
        act.responsableId = null;
        await act.save();
    }
    await models.Responsable.destroy({
        where:
        {
            id:resp.id
        }
    });
}

module.exports ={ //exportaciones para poder ser usado por ResponsableController
    findAll:findAll,
    findById:findById,
    findByNombre:findByNombre,
    findByNumEmp:findByNumEmp,
    addNew:addNew,
    cambiarResp:cambiarResp,
    eliminarResp:eliminarResp
}