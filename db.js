const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  process.env.dbName, // Database name
  process.env.dbUser, // User
  process.env.dbPassword, // Password
  {
    host: process.env.hostName, // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
