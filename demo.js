const models = require("./models");

async function crear_y_relacionar()
{
    await models.Activo.create({
        numSerie:512,
        numInventario:65,
        descripcion:"una mesa",
        imagen:null
    });
    await models.Activo.create({
        numSerie:869,
        numInventario:12,
        descripcion:"una silla",
        imagen:null
    });
    await models.Tag.create({
        nombre: "mueble"
    });
    relacionar()
}

async function relacionar()
{
let tag = await models.Tag.findOne({
        where:{
            nombre:"mueble"
        }
    });
let activos = await models.Activo.findAll();
await tag.addActivos(activos);
}

crear_y_relacionar();
