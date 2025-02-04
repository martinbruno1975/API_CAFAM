const Patentamiento = require("../models/patentamiento")

const getAllPatentamientos = async (req, res) => {
    const patentamientos = await Patentamiento.find().limit(10000)
    /*saveToCache(productos, 'productos:-1')  // Usamos -1 para la lista completa*/
    res.status(200).json(patentamientos)
}

const getByMarca = async (req, res) => {
    const patentamientos = await Patentamiento.find()
    /*saveToCache(productos, 'productos:-1')  // Usamos -1 para la lista completa*/
    res.status(200).json(patentamientos)
}

module.exports = { getAllPatentamientos }