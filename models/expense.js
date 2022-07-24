// const { Model } = require('sequelize');
const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const expense = sequelize.define('expense' ,{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    amount:Sequelize.DOUBLE,
    description:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    category:{
        type:Sequelize.STRING,
        
    },
    
})

module.exports = expense;
