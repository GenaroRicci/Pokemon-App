const { Router } = require('express');
const router = Router();
const routerPokemon = require('./routePokemon');
const routerType = require('./routerType');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.use('/pokemon', routerPokemon);
router.use('/type', routerType);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
