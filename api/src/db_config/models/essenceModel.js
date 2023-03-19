module.exports = (sequelize, DataTypes) => {
    return sequelize.define('essence', {
        idEss: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        libEss: {
            type: DataTypes.STRING,
            allowNull: false
        },
        compEss: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        qteEss: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        prixEss: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    })
}