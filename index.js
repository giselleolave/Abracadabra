//Importacioens
import express from 'express'
const app = express()
export const __dirname = import.meta.dirname;
import { valMiddleware } from './middlaware/val.middlaware.js';

// carpeta assets publica
app.use(express.static('/public'));

//Creación de servidor en puerto 3000
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example app listening http://localhost:${PORT}`)
})
//Arreglo de nombres
export const usuarios = ["Juan","María","Carlos","Marcela","Carmen","Julian"]


//Traer usuarios
app.get('/abracadabra/usuarios',(req,res)=>{
    res.json(usuarios)
})

//Middlareware 

app.get('/abracadabra/juego/:usuario',valMiddleware,(req,res)=>{
    const usuario = req.params.usuario;
    res.send(`Bienvenido al juego, ${usuario}!`);
    //res.redirect('index.html');
})
//
app.get('/abracadabra/conejo/:n', (req, res) => {
    const numUsu = parseInt(req.params.n)
    const numAle = Math.floor(Math.random() * 4) + 1
    //console.log(numUsu)
    console.log(numAle)
    if (numUsu === numAle) {
        res.sendFile(__dirname + '/public/assets/conejito.jpg')
    } else {
        res.sendFile(__dirname + '/public/assets/voldemort.jpg')
    }
})


//Validación de ruta existente
app.use('*', (req, res) => {
    res.status(404).send('Esta Página no existe')
})