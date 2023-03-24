const {Gerant} = require('../db_config/sequelize')
const bcrypt = require('bcrypt');

const saltRounds = 10;

const routesGerant = (express) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        Gerant.findAll(
            {
                where: {
                    roleGrt: 0
                },
                attributes: ["idGrt", "nomGrt"]
            }
        )
            .then(gerants => res.status(200).json(gerants))
            .catch(err => res.status(404).json({message: "Gerants not found !"}))
    })

    router.post('/sign-up', (req, res) => {
        const gerant = {
            nomGrt: req.body.nomGrt,
            prenomGrt: req.body.prenomGrt,
            emailGrt: req.body.emailGrt,
            passwordGrt: bcrypt.hashSync(req.body.passwordGrt, saltRounds),
            telGrt: req.body.telGrt,
            adGrt: req.body.adGrt,
            roleGrt: req.body.roleGrt
        }
        Gerant.create(gerant)
            .then(gerants => res.status(200).json(gerants)) 
            .catch(err => {
                console.log(err)
                res.status(404).json({message: "User not created !"})})
    })

    router.post('/sign-in', (req, res) => {
        console.log(bcrypt.hashSync("1234", saltRounds))
        Gerant.findOne({
            where: {
                emailGrt: req.body.emailGrt
            }
        })
        .then(gerant => {
            if(!gerant) {
                res.status(404).json({message: "User not found"})
            } else {
                bcrypt.compare(req.body.passwordGrt, gerant.passwordGrt)
                .then(result => res.status(200).json(gerant))
                .catch(err => res.status(401).json({message: "Wrong password"}))

            }
        })
        .catch(err => res.status(500).json(err))
    })

    router.delete('/:idGerant', (req, res) => {
        Gerant.findByPk(req.body.idGerant)
            .then(gerant => {
                gerant.destroy()
                    .then(() => res.status(200).json({gerant: gerant, message: "Gerant deleted !"}))
                    .catch(err => res.status(404).json({message: "Gerant not deleted !"}))
            })
            .catch(err => res.status(404).json({message: "Gerant not found !"}))
    })
    
    return router;
}

module.exports = routesGerant;