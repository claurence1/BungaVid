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
            nomFilm: DataTypes.TEXT,
            descriptionFilm: DataTypes.TEXT,
            prixFilm:DataTypes.FLOAT,
        }
    )
    return Film;
}