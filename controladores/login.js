const models = require("../models");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config({path:'.env.local'});

const {OAuth2Client, JWT} = require('google-auth-library');
const client = new OAuth2Client(process.env.VUE_APP_CLIENT_ID)//se usara servidor de autenticacion

module.exports.login = async function login(req,res)
{
    try{
        const ticket = await client.verifyIdToken({
            idToken: req.body.token,
            audience: process.env.VUE_APP_CLIENT_ID //leer token de google mandado por el body
        })
        //console.log("TICKET DESDE GOOGLE:",ticket);
        if(await models.Usuario.findOne({
            Where:
            {
                email:ticket.payload.email //existe usuario en la base de datos? evaluar mediante email
            }
        }))
        {
            payload = {
                email: ticket.payload.email, //crear un payload, con el email y id del token de usuario
                id: ticket.payload.sub
            }
            token = jwt.sign(payload,process.env.SECRET_SIG,{expiresIn: '1d'});//crear nuevo token usando codificacion JWT
           // console.log("BACK END TOKEN:",token);
        }

        res.json({
            code:200,
            status: "OK",
            token: token //responder con el nuevo backend token
    })
    }
    catch(e)
    {
        console.log(e)
        res.json({
            code:400,
            status: 'USER ERROR', //hubo error
        })
    }
}