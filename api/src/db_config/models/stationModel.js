module.exports = (sequelize, DataTypes) => {
    return sequelize.define('station', {
        idStation: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        posGeo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        libStation: {
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