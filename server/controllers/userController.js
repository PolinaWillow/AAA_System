const {User, Acceess_Level} = require('../models/dbModels')
const jwt = require('jsonwebtoken')
const Strybog = require('../ciphers/strybog/main')

const generateJwt = (id, login, level) => {
    return jwt.sign(
        {id, login, level},
        process.env.SECRET_KEY,
        {expiresIn: '2h'}
    )
}

const Hash = (password) => {
    return Strybog.GetHash(password)
}

class UserController{
    //Регистрация
    async registration(req,res){
        try {
            const {login, email, number, password} = req.body
            //Порверка валидности входных данных
            if(login==""||email==""||number==""||password=="") return res.status(500).json({message: "Не все поля заполнены"})

            //Проверка наличия пользователя с таким же логином, email или телефоном
            const checklogin = await User.findOne({where: {login}})
            if(checklogin) return res.status(500).json({message: "Пользователь с таким логином уже существует"})
            const checkemail = await User.findOne({where: {email}})
            if(checkemail) return res.status(500).json({message: "Пользователь с такой почтой уже существует"})
            const checknumber = await User.findOne({where: {number}})
            if(checknumber) return res.status(500).json({message: "Пользователь с таким телефоном уже существует"})

            //Хэшируем пароль
            const passwordHash = Hash(password)

            //Создаем пользователя
            const user = await User.create({login, email, number, password: passwordHash, acceessLevelId: 10})

            //Генерация токена
            const level = await Acceess_Level.findOne({where: {id: user.acceessLevelId}})
            const token = generateJwt(user.id, user.login, level.level_name)

            return res.status(201).json({message:"Новый пользователь создан"})//json({token})
        } catch (error) {
            res.status(error).json({message: "Что-то пошло не так"})
        }       
    }

    //Авторизация
    async login(req,res){
        try {
            const {login, password} = req.body
            const user = await User.findOne({where:{login: login}})
            if(login==""||password=="") return res.status(500).json({message: "Не заполнены поля формы"})
            if(!user) return res.status(500).json({message: "Данный пользователь не существует"})
            else{
                const passwordHash = Hash(password)
                if (!(passwordHash === user.password)) return res.status(500).json({message: "Не верный пароль пользователя"})
                else {
                    const level = await Acceess_Level.findOne({where: {id: user.acceessLevelId}})
                    const token = generateJwt(user.id, user.login, level.level_name)
                    return res.json({token, userId: user.id, userLevel: level.level_name, userLogin: user.login})
                }
            }
        } catch (error) {
            res.status(error).json({message: "Что-то пошло не так"})
        }
    }

    //Проверка на авторизованность
    async check(req,res){
        //Генерируем токен
        const token = generateJwt(req.user.id, req.user.email, req.user.level)
        return res.json({token, userId: user.id})
    }

    async changeLevel(req,res){}
}
module.exports = new UserController();