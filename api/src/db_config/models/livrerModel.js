module.exports = (sequelize, DataTypes) => {
    return sequelize.define('livrer', {
        qte: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: true,
        createdAt: 'dateLivr',
        updatedAt: false
    })
}