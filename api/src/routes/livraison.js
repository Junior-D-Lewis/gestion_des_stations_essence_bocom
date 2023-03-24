const {Livrer, Essence, Fournisseur} = require('../db_config/sequelize')

const routesLivraison = (express) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        Fournisseur.findAll(
            {
                include: [
                    {
                        model: Essence,
                        required: true,
                        as: "essences",
                        attributes: ["libEss"],
                        through: {
                            model: Livrer,
                            required: true,
                            as: "livraisons",
                            attributes: ["qte", "dateLivr", "statut"],
                        }
                    },
                ],
                attributes: ["nomFour"],
                
            }
        )
        .then(datas => res.status(200).json(datas))
        .catch(err => {console.log(err)
            res.status(404).json({message: "Livraisons not found !"})}) 
    })

    router.get('/essence', (req, res) => {
        Essence.findAll()
            .then(datas => res.status(200).json(datas))
            .catch(err => res.status(404).json({message: "Essences not found !"}))
    })

    router.post('/', (req, res) => {
        console.log(req.body) 
        Livrer.create(req.body)
            .then(livraisons => res.status(200).json(livraisons))
            .catch(err => {
                console.log(err)   
                res.status(404).json({message: "Livraison not created !"})})
    })

    router.put('/confirm', (req, res) => {
        Livrer.update(req.body, {
            where: {
                fournisseur: req.body.idFournisseur,
                essence: req.body.idEss,
                station: req.body.station,
                }
        })
        .then(() => res.status(200).json({message: "Livraison updated !"}))
        .catch(err => res.status(404).json({message: "Livraison not updated !"}))
        
    })

    return router;
}

module.exports = routesLivraison;