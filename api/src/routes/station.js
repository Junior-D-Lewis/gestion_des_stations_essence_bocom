const {Station, Essence} = require('../db_config/sequelize')


const routesLivraison = (express) => {
    const router = express.Router();

    router.post('/add', (req, res) => {
        Station.create(req.body)
            .then(stations => res.status(200).json(stations))
            .catch(err => res.status(404).json({message: "Station not created !"}))
    })

    router.post('/', (req, res) => {
        console.log(req.body)
    })

    return router;
}

module.exports = routesLivraison;