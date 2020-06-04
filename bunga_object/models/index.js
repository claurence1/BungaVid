'use strict';

// db context
var Film = require('./film');

const config = require('../config/config.json')
var Sequelize = require('sequelize');

var server = {
    PORT: 3000,
    db: {}
};

// user credantial in another file
var sequelize = new Sequelize(config.development);

// create db context
server.db['Film'] = Film(sequelize, Sequelize);

Object.keys(server.db).forEach(modelName => {
    if(server.db[modelName].associate) {
        server.db[modelName].associate(server.db);
    }
});
server.db.sequelize = sequelize;
server.db.Sequelize = Sequelize;

// use my db in others files
module.exports = server;
