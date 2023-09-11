const {Sequelize} = require('sequelize')

//Экспортируем объект с конфигурацией БД 
module.exports = new Sequelize(
    process.env.DB_NAME,//'AAA_System',// ? Почему-то не работает через переменные окружения
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host:  process.env.DB_HOST,
        port:  process.env.DB_PORT
    }
)