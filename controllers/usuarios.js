const {response} = require('express');


const usuariosGet = (req,res) => {

    const {m='no valor m'} = req.query;

    res.json({
        msg: 'get Api - controlador',
        m
    })

}

const usuariosPut = (req,res) => {

   
    const {nombre,apellido} = req.body;

    res.json({
        msg: 'put Api - controlador',
        nombre,
        apellido
    })
}

const usuariosPost = (req,res) => {

    console.log("Body de la peticion ", req.body);
    const {nombre, apellido} = req.body
    res.json({
        msg: 'post Api - controlador',
        nombre,
        apellido
    })
}

const usuariosDelete = (req,res) => {
    res.json({
        msg: 'post Api - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}