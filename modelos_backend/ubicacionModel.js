
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

function addNew(ubi)//para agregar nuevas ubicaciones
{
    bd.push(ubi);
}


function esUbicacion(ubi)//para verificar si es una ubicacion un objeto dado
{
    if(Object.keys(ubi).length>Object.keys(bd[0]).length)return false;

    for(let key in bd[0])
    {
        if(!ubi.hasOwnProperty(key))return false;
    }
    return true;
}

function estaUbicacion(ubi)//para averiguar si ya esta en la lista la ubicacion dada.
{
    for(let i=0;i<bd.length;i++)
    {
       if(UbiIgual(bd[i],ubi))return true;
    }
    return false;
}

function UbiIgual(ubi1,ubi2)//para comparar 2 ubicaciones, y ver si son iguales.
{
    const keys1 = Object.keys(ubi1);
    const keys2 = Object.keys(ubi2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (ubi1[key] !== ubi2[key]) 
      {
        return false;
      }
    }
  
    return true;
}

function cambiarUbi(newAct,metodoBusc)//para cambiar una ubicacion buscado por otro que es dado
{
    for(let i=0;i<bd.length;i++)
    {
        if(UbiIgual(bd[i],metodoBusc))
        {
            bd[i]=newAct;
        }
    }
}

function eliminarUbi(metodoBusc)//para eliminar una ubicacion buscada
{
    for(let i=0;i<bd.length;i++)
    {
        if(UbiIgual(bd[i],metodoBusc))
        {
            bd.splice(i,1);
        }
    }
}

module.exports = { //exportaciones para poder ser usado por UbicacionController
    findAll:findAll,
    findById:findById,
    esUbicacion:esUbicacion,
    estaUbicacion:estaUbicacion,
    addNew:addNew,
    cambiarUbi:cambiarUbi,
    eliminarUbi:eliminarUbi
}