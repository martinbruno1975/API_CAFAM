const { Router } = require('express')
const route = Router()
const patentamientosController = require('../controllers/patentamientos.controller')


route.get('/patentamientos',
    /*middlewares.redisMiddleware.checkCache('productos'),*/
    patentamientosController.getAllPatentamientos
)

module.exports = route