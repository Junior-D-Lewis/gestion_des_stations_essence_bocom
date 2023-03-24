const {sequelize, DataTypes} = require('./indexSequelize')

const EssenceModel = require('./models/essenceModel')
const GerantModel = require('./models/gerantModel')
const StationModel = require('./models/stationModel')
const FournisseurModel = require('./models/fournisseurModel')
const LivrerModel = require('./models/livrerModel')
const avoirModel = require('./models/avoirModel')

const Essence = EssenceModel(sequelize, DataTypes)
const Gerant = GerantModel(sequelize, DataTypes)
const Station = StationModel(sequelize, DataTypes)
const Fournisseur = FournisseurModel(sequelize, DataTypes)
const Livrer = LivrerModel(sequelize, DataTypes)
const Avoir = avoirModel(sequelize, DataTypes)
 
Gerant.hasMany(Station, {foreignKey: 'gerantID', targetKey: 'idGrt'})
Station.belongsTo(Gerant, {foreignKey: 'gerantID', targetKey: 'idGrt'})

Fournisseur.belongsToMany(Essence, {through: Livrer, foreignKey: 'fournisseur'})    
Essence.belongsToMany(Fournisseur, {through: Livrer, foreignKey: 'essence'})

Station.belongsToMany(Essence, {through: Avoir, foreignKey: 'station'}) 
Essence.belongsToMany(Station, {through: Avoir, foreignKey: 'essence'})


module.exports = {
    Gerant,
    Station,
    Essence,
    Fournisseur,
    Livrer,
    Avoir
}