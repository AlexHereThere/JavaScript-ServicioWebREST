const dotenv = require('dotenv');
dotenv.config({path:'.env.local'});

const passport = require('passport'); //usar passport
const models = require('../models') //se ocupa modelos para revisar base de datos

const JwtStrategy = require('passport-jwt').Strategy; //auteticacion basado en JWT
const ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();//leer el backend token por medio del Authentication header
opts.secretOrKey = process.env.SECRET_SIG; //usar palabra secreta para codificar
passport.use(new JwtStrategy(opts,async function(jwt_payload, done) {
    //console.log(jwt_payload);
    if(await models.Usuario.findOne({
        where:
        {
            email:jwt_payload.email //buscar en la base de datos si existe usuario con el mismo email
        } //para determinar si es un usuario autenticado
    })) {
        return done(null, jwt_payload.email);//permitir acceso
    }
    else {
        return done(null, false); //no permitir acceso
    }
}));

module.exports = passport;