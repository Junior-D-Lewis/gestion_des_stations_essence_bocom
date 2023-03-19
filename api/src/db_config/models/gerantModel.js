module.exports = (sequelize, DataTypes) => {
    return sequelize.define('gerant', {
        idGrt: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nomGrt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailGrt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordGrt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telGrt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        adGrt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roleGrt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    })
}