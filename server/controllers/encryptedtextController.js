const {Encrypted_Text}=require('../models/dbModels')
const ApiError = require('../error/apiError')
const Grasshopper = require('../ciphers/grasshopper/main')

class EncryptedTextController{
    //Добавление нового шифра
    async addNew(req,res){
        try {
            const {text, userId} = req.body
            if(text==="") return res.status(500).json({message: "Не заполнены поля формы"})
            if(userId==="") return res.status(500).json({message: "Неизвестная ошибка, что-то не так с идентификацией пользователя"})

            //Шифрование текста
            //Преобразование ключей в json
            const keys = Grasshopper.Get_Key()
            //console.log(keys)
            //Шифровка текста
            const encrText = JSON.stringify(Grasshopper.Encription(text, keys))
            
            //console.log(encrText)
            //console.log(userId)
            //console.log(keys)

            //Добавление шифра в БД
            const encryptedText =await Encrypted_Text.create({
                text: encrText, userId, keys: JSON.stringify(keys)
            })
            return res.status(201).json({message:"Новый зашифрованный текст добавлен"})//json({token})

        } catch (error) {
            return res.status(error).json({message: "Неизвестная ошибка"})
        }
        
    }

    //Получение всех шифров
    async getAll(req,res){
        try {
            const texts = await Encrypted_Text.findAll({
                attributes: ['id', 'text']
            })
            res.json(texts)
        } catch (error) {
            res.status(error).json({ message: 'Что-то пошло не так' })
        }
    }
    async deleteOne(req,res){
        try {
            const id = req.params
            await Encrypted_Text.destroy({where: id})
            return res.status(201).json({message:"Зашифрованный текст удален"})

        } catch (error) {
            res.status(error).json({ message: 'Что-то пошло не так' })
        }
    }


    //Получение шифра по id
    async getById(req,res){}
}

module.exports = new EncryptedTextController();