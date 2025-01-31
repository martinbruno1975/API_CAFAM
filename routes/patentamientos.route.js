const { Router } = require('express')
const route = Router()

route.get('/patentamientos',(req, res)=> {
    /*middlewares.redisMiddleware.checkCache('productos'),
    productosController.getAllProductos*/
    res.status(200).json("GET PATENTAMIENTOS")
} 
    
)

module.exports = route