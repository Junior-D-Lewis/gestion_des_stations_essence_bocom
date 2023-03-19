module.exports = (sequelize, DataTypes) => {
    return sequelize.define('founisseur', {
        idFour: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomFour: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenomFour: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        telFour: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        emailFour: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    })
}