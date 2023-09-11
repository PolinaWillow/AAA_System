require('dotenv').config() //Подключение dotenv для плучения доступа к переменным окружения
const express = require('express')//Получение Express
const cors = require('cors')
const fileUpload = require('express-fileupload')

const sequelize = require('./db.js') //Конфигурации для подключения к БД
const models = require('./models/dbModels.js') //Модели БД
const router = require('./routes/routes.js')
const errorHandler = require('./middleware/errorHandlingMiddleware.js')
const path = require('path')

const PORT = process.env.PORT||5000; //Полчуение значения порта
const app = express(); //Объект представляющий приложениеы
//Конвейер обраотки запросов
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static/img'))) //Доступ к статическим файлам c картинками
app.use(express.static(path.resolve(__dirname,'static/pdf')))//Доступ к статическим файлам c pdf
app.use(fileUpload({}))
app.use('/api', router)

//Обработка ошибки
app.use(errorHandler)

//app.get('/', (req, res)=>{res.status(200).json({message: 'WORKING'})})

//Старт сервера
const startApp = async()=>{
    try {
        await sequelize.authenticate()//Подключение к БД
        await sequelize.sync() //Сверка состояния БД со схемой данных
        app.listen(PORT, ()=>console.log(`Server start on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

startApp()
