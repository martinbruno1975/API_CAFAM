require('dotenv').config()
const express = require("express")
const app = express()

const dbCon = require("./db/mongo.db").connectToDatabase
const routes = require('./routes')

const PORT = process.env.PORT || 3001

app.use(express.json())

app.use(routes.patentamientosRoute)

app.listen(PORT, async ()=>{
    await dbCon()
    console.log(`Aplicacion iniciada en el puerto ${PORT}`)
})