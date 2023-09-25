const {Encrypted_Text}=require('../models/dbModels')
const ApiError = require('../error/apiError')
const Grasshopper = require('../ciphers/grasshopper/main')
const pdfTemplate = require('../documents/index')
const path = require('path')
const htmlPdf = require('html-pdf');
const fs = require('fs')
//const unlink = require('node:fs');

class DencryptedTextController{
    //Добавление новой расшифровки
    async addNew(req,res){}
    //Получение всех расшифровок
    async getAll(req,res){}

    //Получение расшифровки по id
    async getById(req,res){
        try {
            const id = req.params
            //Получаем зашифрованный текст и ключи
            const encryptedText =await Encrypted_Text.findOne({where: id})
            const encrtext = JSON.parse(encryptedText.text)
            //console.log(encrtext)
            const keys = JSON.parse(encryptedText.keys)
            //console.log(keys)

            const dencrText = Grasshopper.Decription(encrtext, keys)
            //console.log(dencrText.split(""))


            res.json(dencrText)

        } catch (error) {
            return res.status(error).json({message: "Неизвестная ошибка"})
        }
    }

    //Получение PDF файла
    async createPDF(req,res){
        try {
            const id = req.params
            const {fileName} = req.body      
            
            //Получение расшифрованного текста
            const encryptedText =await Encrypted_Text.findOne({where: id})
            const encrtext = JSON.parse(encryptedText.text)
            const keys = JSON.parse(encryptedText.keys)
            const dencrText = Grasshopper.Decription(encrtext, keys)
            //console.log(typeof(dencrText))

            //Генерация имени файл
            const today = new Date();
            let foolFileName = path.resolve(__dirname,'..','static','pdf', fileName)
            //console.log(fileName)

            //Создание pdf файла
            const options = { format: 'A4'};
            htmlPdf.create(pdfTemplate(dencrText),options).toFile(foolFileName,(err)=>{
                if (err) {
                    res.send(Promise.reject());
                }
                res.send(Promise.resolve());
            })

            //res.json(fileName)
        } catch (error) {
            res.send(Promise.reject());
        }

    }

    async getPDF(req,res){
        //console.log(req.params.fileName)
        let foolFileName = path.resolve(__dirname,'..','static','pdf',req.params.fileName)
        //console.log(foolFileName)
        res.sendFile(foolFileName)
    }

    async deletePDF(req, res){
        let foolFileName = path.resolve(__dirname,'..','static','pdf',req.params.fileName)
        fs. unlink(foolFileName, (err) => {
            if (err) Promise.reject();
        });        
    }

}

module.exports = new DencryptedTextController();