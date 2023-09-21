const {Encrypted_Text}=require('../models/dbModels')
const ApiError = require('../error/apiError')
const Grasshopper = require('../ciphers/grasshopper/main')

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
}

module.exports = new DencryptedTextController();