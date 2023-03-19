const express = require('express')
const cors = require('cors')
const path = require("path")
const morgan = require('morgan')
const bodyParser = require('body-parser')

const {initDb} = require('./src/db_config/sequelize')
const routesGerant = require('./src/routes/gerant')
const routesLivraison = require('./src/routes/livraison')
const routesStation = require('./src/routes/station')
const routesFournisseur = require('./src/routes/fournisseur')

const app=express();

//initDb()

app.use(cors())
    .use(morgan('dev'))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(express.json())
    .use(express.urlencoded({ extended: false })) 
    .use(express.static(path.resolve('site')))

app.use('/api/gerant', routesGerant(express))
app.use('/api/livraison', routesLivraison(express))
app.use('/api/station', routesStation(express))
app.use('/api/fournisseur', routesFournisseur(express))

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})

module.exports=app;