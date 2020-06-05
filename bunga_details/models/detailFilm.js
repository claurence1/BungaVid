'use strict'

module.exports = (sequelize, DataTypes) => {
    const DetailFilm = sequelize.define(   
        'detailFilm',
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
    return DetailFilm;
}