const { DataTypes } = require("sequelize");
const { getPort, getMongoDbUrl, sequelize } = require("../generator");
const  { User} = require('./user.model')
const  { Stock} = require('./stock.model')

const UserStocks = sequelize.define("Userstocks", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  purchasePrice: {
    type:DataTypes.FLOAT,
    allowNull: true,
  },
 
});
User.hasMany(UserStocks,{foreignKey:'user'})
UserStocks.belongsTo(User);

Stock.hasMany(UserStocks,{foreignKey:'stock'})
UserStocks.belongsTo(Stock);

// UserStocks.sync({force:true}).then((r)=>console.log('r', r)).catch((e)=>console.log('e', e))

module.exports = {
    UserStocks,
};