const bd=[ //lista de activos (falsos)
    {
        id:1,
        serie:5121,
        tipo:"computadora",
        desc:"Una computadora comun de oficina, con una carcasa negra carateristica.",
        numInventario: 62,
        ubicacion: "cubiculo",
        responsable:"Oswaldo Aldo Poron",
        imagen:"/Imagenes/computadora.png"
    },
    {
        id:2,
        serie:2612,
        tipo:"mouse",
        desc:"mouse negro alambrico que sirve, nada especial.",
        numInventario: 50,
        ubicacion: "cubiculo",
        responsable:"Hectorio Valdez",
        imagen:"/Imagenes/mouse.png"
    },
    {
        id:3,
        serie:8691,
        tipo:"teclado",
        desc:"teclado gris que parecer ser muy usado.",
        numInventario: 36,
        ubicacion: "cubiculo",
        responsable:"Oswaldo Aldo Poron",
        imagen:"/Imagenes/teclado.png"
    },
    {
        id:4,
        serie:4202,
        tipo:"CPU",
        desc:"Una unidad central de procesamiento suelto, quien sabe que se hara con el.",
        numInventario: 90,
        ubicacion: "laboratorio",
        responsable:"Manuela Malva Mora",
        imagen:"/Imagenes/cpu.png"
    },
    {
        id:5,
        serie:8923,
        tipo:"monitor",
        desc:"monitor negro, esta limpio, probablemente para que se pueda apreciar lo que despliega",
        numInventario: 24,
        ubicacion: "cubiculo",
        responsable:"Oswaldo Aldo Poron",
        imagen:"/Imagenes/monitor.png"
    },
    {
        id:6,
        serie:1010,
        tipo:"silla",
        desc:"Silla de metal comodo, tiene bien respaldo.",
        numInventario: 12,
        ubicacion: "laboratorio",
        responsable:"Manuela Malva Mora",
        imagen:"/Imagenes/silla.png"
    },
    {
        id:7,
        serie:2000,
        tipo:"mesa",
        desc:"mesa de plastico grueso, ya tiene tiempo siendo usado.",
        numInventario: 49,
        ubicacion: "laboratorio",
        responsable:"Manuela Malva Mora",
        imagen:"/Imagenes/mesa.png"
    },
    {
        id:8,
        serie:8941,
        tipo:"switch",
        desc:"Un switch con muchas conexiones, creando una red con las computadoras de un cubiculo.",
        numInventario: 72,
        ubicacion: "cubiculo",
        responsable:"Oswaldo Aldo Poron",
        imagen:"/Imagenes/switch.png"
    },
    {
        id:9,
        serie:6660,
        tipo:"proyector",
        desc:"Colgado en el techo, manejado por un control remoto.",
        numInventario: 85,
        ubicacion: "cubiculo",
        responsable:"Oswaldo Aldo Poron",
        imagen:"/Imagenes/proyector.png"
    },
    {
        id:10,
        serie:6636,
        tipo:"laptop",
        desc:"Laptop usado por el encargado de caseta.",
        numInventario: 100,
        ubicacion: "cubiculo",
        responsable:"Hectorio Valdez",
        imagen:"/Imagenes/laptop.png"
    },
    {
        id:11,
        serie:5030,
        tipo:"librero",
        desc:"Una librero, lleno de libros relacionado con programacion.",
        numInventario: 4,
        ubicacion: "oficina",
        responsable:"Hectorio Valdez",
        imagen:"/Imagenes/librero.png"
    },
    {
        id:12,
        serie:6000,
        tipo:"escritorio",
        desc:"escritorio grande con muchas manchas, parece ser usado mucho, tambien esta lleno de hojas ordenadas",
        numInventario: 76,
        ubicacion: "oficina",
        responsable:"Manuela Malva Mora",
        imagen:"/Imagenes/escritorio.png"
    },
    {
        id:13,
        serie:5555,
        tipo:"silla de oficina",
        desc:"extremanadente comodo, uno podria estar sentado en el por horas",
        numInventario: 32,
        ubicacion: "oficina",
        responsable:"Manuela Malva Mora",
        imagen:"/Imagenes/silla de oficina.png"
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

function findBySerie(serieBusc)
{
    for(let i=0;i<bd.length;i++)
    {
     if(bd[i].serie==serieBusc)return bd[i];
    }
    return undefined;
}

function findByUbicacion(ubicacionBusc)//como varios elementos pueden tener la misma ubicacion o responsable 
{//regresan un arreglo de valores
    let bdNuevo=[];
    for(let i=0;i<bd.length;i++)
    {
        if(bd[i].ubicacion==ubicacionBusc)
        {
            bdNuevo.push(bd[i]);
        }
    }
    return bdNuevo;
}

function findByResponsable(responsableBusc)
{
    let bdNuevo=[];
    for(let i=0;i<bd.length;i++)
    {
        if(bd[i].responsable==responsableBusc)
        {
            bdNuevo.push(bd[i]);
        }
    }
    return bdNuevo;
}

function findByTipo(tipoBusc)
{
    for(let i=0;i<bd.length;i++)
    {
     if(bd[i].tipo==tipoBusc)return bd[i];
    }
    return undefined;
}

function findByNumInv(NumInvBusc)
{
    for(let i=0;i<bd.length;i++)
    {
     if(bd[i].numInventario==NumInvBusc)return bd[i];
    }
    return undefined;
}

function addNew(activo)//para agregar nuevos activos
{
    bd.push(activo);
}

function esActivo(activo)//para verificar si es activo un objeto dado
{
    if(Object.keys(activo).length>Object.keys(bd[0]).length)return false;

    for(let key in bd[0])
    {
        if(!activo.hasOwnProperty(key))return false;
    }
    return true;
}

function estaActivo(activo)//para averiguar si ya esta en la lista el activo dado.
{
    for(let i=0;i<bd.length;i++)
    {
       if(activoIgual(bd[i],activo))return true;
    }
    return false;
}

function activoIgual(activo1,activo2) //para comparar 2 activos, y ver si son iguales.
{
    const keys1 = Object.keys(activo1);
    const keys2 = Object.keys(activo2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (activo1[key] !== activo2[key]) 
      {
        return false;
      }
    }
  
    return true;
}

function cambiarActivo(newAct,metodoBusc) //para cambiar una activo buscado por otro que es dado
{
    for(let i=0;i<bd.length;i++)
    {
        if(activoIgual(bd[i],metodoBusc))
        {
            bd[i]=newAct;
        }
    }
}

function eliminarActivo(metodoBusc) //para eliminar un activo buscado
{
    for(let i=0;i<bd.length;i++)
    {
        if(activoIgual(bd[i],metodoBusc))
        {
            bd.splice(i,1);
        }
    }
}

module.exports = { //exportaciones para poder ser usado por activoController
    findAll: findAll,
    findById: findById,
    findBySerie: findBySerie,
    findByNumInv: findByNumInv,
    findByResponsable: findByResponsable,
    findByTipo: findByTipo,
    findByUbicacion: findByUbicacion,
    addNew:addNew,
    esActivo:esActivo,
    estaActivo:estaActivo,
    cambiarActivo:cambiarActivo,
    eliminarActivo:eliminarActivo
}

