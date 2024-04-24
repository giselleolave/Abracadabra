import { __dirname } from "../index.js";
import { usuarios } from "../index.js";

export const valMiddleware = (req, res, next) => {

    const usuario = req.params.usuario
    if (usuarios.includes(usuario)) {
        next()
    } else {
        //return res.status(404).json({msg:'Producto no existe'})
        res.sendFile(__dirname + '/public/assets/who.jpeg');
    }
}