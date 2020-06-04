const Sequelize = require('sequelize')
const config = require('../config/config.json')

const connection = new Sequelize(config.development)
// Test la connection
connection.authenticate().then(() => {
    console.log('Connection has been established successfully.')
})
module.exports = { Sequelize, connection }