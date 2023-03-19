const {Fournisseur} = require('../db_config/sequelize')
const bcrypt = require('bcrypt');


const routesLivraison = (express) => {
    const router = express.Router();

    router.post('/', (req, res) => {
        console.log(req.body)
    })

    router.post('/', (req, res) => {
        console.log(req.body)
    })

    return router;
}

module.exports = routesLivraison;