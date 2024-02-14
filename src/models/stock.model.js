// const { Schema, default: mongoose } = require('mongoose')
// const stockSchema = new Schema({    
  
//     identifier: String,
//     name: String,
//     lastTradedPrice: Number,
//     todaysHigh: Number,
//     todaysLow: Number,

// })
// stockSchema.path('_id')
// module.exports = mongoose.model('Stock',stockSchema)
const { DataTypes } = require("sequelize");
const { getPort, getMongoDbUrl, sequelize } = require("../generator");

const  Stock =  sequelize.define('Stock',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    ticker:{
        type:DataTypes.STRING,
        allowNull:true
    },
    // lastTradedPrice:{
    //     type:DataTypes.NUMBER,
    //     allowNull:true
    // },
    // high:{
    //     type:DataTypes.NUMBER,
    //     allowNull:true
    // },
    // low:{
    //     type:DataTypes.NUMBER,
    //     allowNull:true
    // },
    
})




// Stock.sync({force:true}).then((r)=>console.log('r', r)).catch((e)=>console.log('e', e))
module.exports = {
    Stock
}