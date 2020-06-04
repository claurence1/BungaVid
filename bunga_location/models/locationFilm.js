'use strict'

module.exports = (sequelize, DataTypes) => {
    const LocationFilm = sequelize.define(   
        'locationFilm',
        {        
            id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            nomFilm: DataTypes.STRING,
            nomUtilisateur: DataTypes.STRING,
        }
    )
    return LocationFilm;
}