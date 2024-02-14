require("dotenv").config();
const { Sequelize } = require("sequelize");

module.exports = {
  getPort: () => Number(process.env.PORT) ?? 3000,
  getENV: () => process.env.NODE_ENV ?? "local",
  getMongoDbUrl: () => process.env.MONGO_DB_URL ?? "mongodb://0.0.0.0:27017",
  sequelize: new Sequelize({
    host: "localhost",
    port: 5432,
    database: "todo_application",
    dialect: "postgres",
    username: "postgres",
    password: "12345678",
  }),
};
