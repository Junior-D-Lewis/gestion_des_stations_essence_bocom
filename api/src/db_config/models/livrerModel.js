module.exports = (sequelize, DataTypes) => {
    return sequelize.define('livrer', {
        qte: {
            type: DataTypes.STRING,
            allowNull: false
        },
        statut: {
            type: DataTypes.STRING,
            allowNull: false
        },
        station: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true,
        createdAt: 'dateLivr',
        updatedAt: 'dateLivr'
    })
}