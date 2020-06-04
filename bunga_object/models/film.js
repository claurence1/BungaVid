'use strict'

module.exports = (sequelize, DataTypes) => {
    const Film = sequelize.define(   
        'film',
        {        
            id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            nomFilm: DataTypes.STRING,
            descriptionFilm: DataTypes.STRING,
            prixFilm:DataTypes.STRING,
        }
    )
    return Film;
}