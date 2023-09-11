const uuid = require('uuid')
const path = require('path')
const {Cat_Picture}=require('../models/dbModels')

class catpictureController{
    //Добавление нового котика
    async addNew(req,res){
        try {
            const {img}=req.files
            //Создание уникального имени файла
            let fileName = uuid.v4()+".jpg"
            //Перемещение файла в static/img
            img.mv(path.resolve(__dirname,'..','static','img',fileName))
            await Cat_Picture.create({img: fileName})
            res.status(201).json({message: `Новый котик добавлен`})        
        } catch (error) {
            res.status(error.status).json({message: `Что-то пошло не так(`})
        }
        
    }

    //Получение всех котиков
    async getAll(req,res){
        try {
            const pictures = await Cat_Picture.findAll()
            res.json(pictures)
        } catch (error) {
            res.status(error.status).json({ message: 'Что-то пошло не так('})
        }
    }
    //Получение котика по id
    async getById(req,res){
        try {
            const {id} = req.params
            const picture = await Cat_Picture.findOne({where:{id}})
            res.json(picture)
        } catch (error) {
            res.status(error.status).json({ message: 'Что-то пошло не так('})
        }
        
    }

    //Удаление котка
    async delete(req,res){}
}

module.exports = new catpictureController();