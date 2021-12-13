module.exports = {
    HOST: "localhost",
    USER: process.env.MYSQL_USERNAME,
    PASSWORD: process.env.MYSQL_PASS,
    DB: "wfm",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };