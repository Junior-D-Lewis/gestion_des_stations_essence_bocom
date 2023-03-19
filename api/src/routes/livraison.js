const {Livrer, Essence} = require('../db_config/sequelize')

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