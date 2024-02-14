const { DataTypes } = require("sequelize");
const { getPort, getMongoDbUrl, sequelize } = require("../generator");
const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


// User.sync({force:true}).then((r)=>console.log('r', r)).catch((e)=>console.log('e', e))
module.exports = {
    User,
  };