const act = require('./activoModel.js') //indicar que se ocupa activoModel

const bd = [ //lista de responsables (falsos)
    {
        id:0,
        numEmpl:613,
        nombre:"Oswaldo Aldo Poron",
        activosEnCustodia:act.findByResponsable("Oswaldo Aldo Poron"),//se lleno este campo utilizando los datos dados en activoModel
        imagen:"/Imagenes/Oswaldo.png"
    },
    {
        id:1,
        numEmpl:420,
        nombre:"Hectorio Valdez",
        activosEnCustodia:act.findByResponsable("Hectorio Valdez"),
        imagen:"/Imagenes/Hectorio.png"
    },
    {
        id:2,
        numEmpl:696,
        nombre:"Manuela Malva Mora",
        activosEnCustodia:act.findByResponsable("Manuela Malva Mora"),
        imagen:"/Imagenes/Manuela.png"
    }
]

function findAll()
{
    return bd;
}

function findById(idBusc)//funciones de busqueda
{
   for(let i=0;i<bd.length;i++)
   {
    if(bd[i].id==idBusc)return bd[i];
   }
   return undefined;
}

function findByNumEmp(NumEmpBusc)
{
   for(let i=0;i<bd.length;i++)
   {
    if(bd[i].numEmpl==NumEmpBusc)return bd[i];
   }
   return undefined;
}

function findByNombre(nombreBusc)
{
    for(let i=0;i<bd.length;i++)
    {
      if(bd[i].nombre==nombreBusc)return bd[i];  
    }
    return undefined;
}

function addNew(resp)//para agregar nuevos responsables
{
    bd.push(resp);
}

function esResponsable(resp)//para verificar si es un responsable un objeto dado
{
    if(Object.keys(resp).length>Object.keys(bd[0]).length)return false;

    for(let key in bd[0])
    {
        if(!resp.hasOwnProperty(key))return false;
    }
    return true;
}

function estaResponsable(resp)//para averiguar si ya esta en la lista el responsable dado.
{
    for(let i=0;i<bd.length;i++)
    {
       if(RespIgual(bd[i],resp))return true;
    }
    return false;
}

function RespIgual(resp1,resp2)//para comparar 2 responsables, y ver si son iguales.
{
    const keys1 = Object.keys(resp1);
    const keys2 = Object.keys(resp2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (resp1[key] !== resp2[key]) 
      {
        return false;
      }
    }
  
    return true;
}

function cambiarResp(newAct,metodoBusc) //para cambiar una responsable buscado por otro que es dado
{
    for(let i=0;i<bd.length;i++)
    {
        if(RespIgual(bd[i],metodoBusc))
        {
            bd[i]=newAct;
        }
    }
}

function eliminarResp(metodoBusc)//para eliminar un responsable buscado
{
    for(let i=0;i<bd.length;i++)
    {
        if(RespIgual(bd[i],metodoBusc))
        {
            bd.splice(i,1);
        }
    }
}

module.exports ={ //exportaciones para poder ser usado por ResponsableController
    findAll:findAll,
    findById:findById,
    findByNombre:findByNombre,
    findByNumEmp:findByNumEmp,
    addNew:addNew,
    esResponsable:esResponsable,
    estaResponsable:estaResponsable,
    cambiarResp:cambiarResp,
    eliminarResp:eliminarResp
}