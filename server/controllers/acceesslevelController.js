const {Acceess_Level}=require('../models/dbModels')

class acceesslevelController{
    //Добавление нового шифра
    async addNew(req,res){
        try{
            const {level_name} = req.body
            await Acceess_Level.create({level_name})
            res.status(201).json({message: `Новый уровень доступа ${level_name} добавлен`})
        }catch(error){
            res.status(500).json({message: "Что-то пошло не так, попробуйте снова"/*err.message*/})
        }
    }

    //Получение всех шифров
    async getAll(req,res){
        try {
            const levels = await Acceess_Level.findAll()
            res.json(levels)
        } catch (error) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте снова"/*err.message*/})
        }
    }
    //Получение шифра по id
    async getById(req,res){}

    //Удаление уровня доступа
    async delete(req,res){}
}

module.exports = new acceesslevelController();