const {Livrer, Essence} = require('../db_config/sequelize')

const routesLivraison = (express) => {
    const router = express.Router();

    router.post('/', (req, res) => {
        Livrer.create(req.body)
            .then(livraisons => res.status(200).json(livraisons))
            .catch(err => res.status(404).json({message: "Livraison not created !"}))
    })

    router.put('/:idFournisseur/:idEss', (req, res) => {
        Livrer.update(req.body, {
            where: {
                fournisseur: req.params.idFournisseur,
                essence: req.params.idEss
                }
        })
        .then(() => res.status(200).json({message: "Livraison updated !"}))
        .catch(err => res.status(404).json({message: "Livraison not updated !"}))
        
    })

    return router;
}

module.exports = routesLivraison;