const {Encrypted_Text}=require('../models/dbModels')
const ApiError = require('../error/apiError')

class EncryptedTextController{
    //Добавление нового шифра
    async addNew(req,res){
        res.json({message: "Шифр добавлен"})
            /*const {text, userId} = req.body
            const encryptedText =await Encrypted_Text.create({
                text, userId
            }).then(res=>
                {res.status(201).json({message: 'Новый шифр добавлен'})
            }).catch(err=>ApiError.internal(err.message))
            
            return res.json(encryptedText)*/
    }

    //Получение всех шифров
    async getAll(req,res){}
    //Получение шифра по id
    async getById(req,res){}
}

module.exports = new EncryptedTextController();