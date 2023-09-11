const {User, Acceess_Level} = require('../models/dbModels')
const jwt = require('jsonwebtoken')
const Strybog = require('../ciphers/strybog/main')

const generateJwt = (id, login, level) => {
    return jwt.sign(
        {id, login, level},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
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

            /*console.log('\n\n')
            console.log(passwordHash)
            console.log(Hash("1"))
            console.log(user.password)
            console.log('\n\n')*/


            //Генерация токена
            const level = await Acceess_Level.findOne({where: {id: user.acceessLevelId}})
            const token = generateJwt(user.id, user.login, level.level_name)

            return res.json({token})
        } catch (error) {
            res.status(error).json({message: "Что-то пошло не так"})
        }       
    }

    //Авторизация
    async login(req,res){
        try {
            const {login, password} = req.body
            const user = await User.findOne({where:{login: login}})
            if(!user) return res.status(500).json({message: "Данный пользователь не существует"})
            else{
                const passwordHash = Hash(password)
                /*console.log('\n\n')
                console.log(passwordHash)
                console.log(Hash("1"))
                console.log(user.password)
                console.log('\n\n')*/
                if (!(passwordHash === user.password)) return res.status(500).json({message: "Не верный пароль пользователя"})
                else {
                    const level = await Acceess_Level.findOne({where: {id: user.acceessLevelId}})
                    const token = generateJwt(user.id, user.login, level.level_name)
                    return res.json({token})
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
        return res.json({token})
    }

    async changeLevel(req,res){}
}
module.exports = new UserController();