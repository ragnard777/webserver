const {Router} = require('express');
const {usuariosGet, usuariosPut, usuariosPost, usuariosDelete} = require('../controllers/usuarios');

const router = Router();

  //router.get('/', usuariosGet)

  router.get('/', (req,res) => {
        res.json({
        nombre:'Miguelangel',
        cedula: 20222345
    });
/*     res.status(403).json({
        msg:'error no encontrado'
    }); */
  })

  router.put('/:id', usuariosPut);

  router.post('/', usuariosPost);

  router.delete('/', usuariosDelete)


module.exports = router;