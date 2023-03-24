const {Fournisseur} = require('../db_config/sequelize')
const bcrypt = require('bcrypt');


const routesLivraison = (express) => {
    const router = express.Router();

    router.post('/', (req, res) => {
        Fournisseur.create(req.body)
            .then(fournisseurs => res.status(200).json(fournisseurs))
            .catch(err => res.status(404).json({message: "Fournisseur not created !"}))
    })

    router.get('/', (req, res) => {
        Fournisseur.findAll()
            .then(datas => res.status(200).json(datas))
            .catch(err => res.status(404).json({message: "Fournisseurs not found !"}))
    })

    router.delete('/:idFournisseur', (req, res) => {
        Fournisseur.findByPk(req.body.idFournisseur)
            .then(fournisseur => {
                fournisseur.destroy()
                    .then(() => res.status(200).json({fournisseur: fournisseur, message: "Fournisseur deleted !"}))
                    .catch(err => res.status(404).json({message: "Fournisseur not deleted !"}))
            })
            .catch(err => res.status(404).json({message: "Fournisseur not found !"}))
    })

    return router;
}

module.exports = routesLivraison;