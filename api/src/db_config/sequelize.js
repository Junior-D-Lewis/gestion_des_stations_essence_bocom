const {Gerant, Essence, Avoir, Fournisseur, Livrer, Station } = require('./migration')
const essences = require('./datas/essences')
const gerants = require('./datas/gerants')
const stations = require('./datas/stations')
const fournisseurs = require('./datas/fournisseurs')
const livraisons = require('./datas/livrers')
const avoirs = require('./datas/avoirs')

const {sequelize} = require('./indexSequelize');

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err))


const initDb = async () => {
    sequelize.sync()
        .then(() => { 
            console.log('Database has been successfully synchronized.')
            essences.map(essence => Essence.create(essence))
            gerants.map(gerant => Gerant.create(gerant))
            fournisseurs.map(fournisseur => Fournisseur.create(fournisseur))  
            stations.map(station => Station.create(station))
            livraisons.map(livraison => Livrer.create(livraison))
            avoirs.map(avoir => Avoir.create(avoir))
        })
        .catch(err => console.error('An error occurred while creating the database:', err))

}

module.exports = {
    initDb,
    Gerant, 
    Essence, 
    Avoir, 
    Fournisseur, 
    Livrer, 
    Station
}