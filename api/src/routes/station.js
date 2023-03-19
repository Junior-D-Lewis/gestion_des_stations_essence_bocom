const {Station, Essence, Avoir} = require('../db_config/sequelize')


const routesLivraison = (express) => {
    const router = express.Router();

    router.post('/add', (req, res) => {
        Station.create(req.body)
            .then(stations => res.status(200).json(stations))
            .catch(err => res.status(404).json({message: "Station not created !"}))
    })

    router.get("/essences/:gerantID", (req, res) => {
        console.log(req.params.gerantID)
        Station.findAll(
            {
                where: {
                    gerantID: req.params.gerantID
                },
                include: [
                    {
                        model: Essence,
                        required: true,
                        as: "essences",
                        attributes: ["libEss", "prixEss"]
                    },
                ],
                attributes: ["libStation"]        
            }
        )
        .then(datas => res.status(200).json(datas))
        .catch(err => {console.log(err)
            res.status(404).json({message: "Essences not found !"})})
    })

    router.put("/:id", (req, res) => {
        const id = req.params.id
        Station.update(req.body, {
            where: {
                idStation: id,
                }
                })
            .then(() => res.status(200).json({message: "Station updated !"}))
            .catch(err => res.status(404).json({message: "Station not updated !"}))
    })

    return router;
}

module.exports = routesLivraison;