const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  dbName, // Database name
  dbUser, // User
  dbPassword, // Password
  {
    host: '', // Host
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
