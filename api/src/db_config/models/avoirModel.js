module.exports = (sequelize, DataTypes) => {
    return sequelize.define('avoir', {
        qte: {
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