const {User, Acceess_Level} = require('../models/dbModels')
const jwt = require('jsonwebtoken')
const Strybog = require('../ciphers/strybog/main')
const http = require('request')
const { where } = require('sequelize')


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

const GetCode = () =>{
    return Math.floor(1000 + Math.random() * 9000);
}

class UserController{
    //Регистрация
    async registration(req,res){
        try {
            const {login, email, tgname, number, password} = req.body
            //Порверка валидности входных данных
            if(login==""||email==""||number==""||tgname==""||password=="") return res.status(500).json({message: "Не все поля заполнены"})

            //Проверка наличия пользователя с таким же логином, email или телефоном
            const checklogin = await User.findOne({where: {login}})
            if(checklogin) return res.status(500).json({message: "Пользователь с таким логином уже существует"})
            const checkemail = await User.findOne({where: {email}})
            if(checkemail) return res.status(500).json({message: "Пользователь с такой почтой уже существует"})
            const checknumber = await User.findOne({where: {number}})
            if(checknumber) return res.status(500).json({message: "Пользователь с таким телефоном уже существует"})

            //Хэшируем пароль
            const passwordHash = Hash(password)

            //Получение кода
            let tgcode = GetCode()
            //console.log(tgcode)
            //Создаем пользователя
            const user = await User.create({login, email, number, password: passwordHash, acceessLevelId: 10, tgcode, tgname})

            //Генерация токена
            const level = await Acceess_Level.findOne({where: {id: user.acceessLevelId}})
            //const token = generateJwt(user.id, user.login, level.level_name)

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
                    /*const level = await Acceess_Level.findOne({where: {id: user.acceessLevelId}})
                    const token = generateJwt(user.id, user.login, level.level_name)
                    return res.json({token, userId: user.id, userLevel: level.level_name, userLogin: user.login})*/
                    return res.json({username: user.login})
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

    async changeLevel(req,res){
        const {login} = req.body
        
    }

    async getall(req,res){
        try {
            let users =await User.findAll({
                attributes: ['id','login', 'email', 'acceessLevelId']
            })
            //console.log(users)
            /*users.forEach(async (user)=>{
                //console.log(user)
                let level_id = user.dataValues.acceessLevelId
                console.log(level_id)

                try {
                    const level_name = await Acceess_Level.findOne({where: {id:level_id}})
                    console.log(level_name)
                    user.dataValues.acceessLevelId = level_name.dataValues.level_name
                    //console.log(user.dataValues.acceessLevelId )
                } catch (error) {
                    res.status(error).json({message: "Что-то пошло не так"})
                }
            })*/
            res.json(users)
        } catch (error) {
            res.status(error).json({message: "Что-то пошло не так"})
        }
    }


    async upgatetgcode(req, res){
        try {
            //Генерация нового tgcode и сохранение в БД
            let newCode = GetCode()
            const {tgname} = req.body//req.query.tgname//.tgname
            if(tgname == "") return res.status(500).json({message: "Не указано имя пользователя в tg"})
            const user = await User.findOne({where:{tgname: tgname}})
            if(!user) return res.status(500).json({message: "Данный пользователь не существует"})
            await User.update({tgcode: newCode}, {where: {id: user.id}})

    
            return res.json({tgcode: newCode/*user.tgcode*/})
        } catch (error) {
            res.status(error).json({message: "Что-то пошло не так"})
        }
    }

    async verify(req, res){
        const {code, login} = req.body
        if(code == "") return res.status(500).json({message: "Не указан верификационный код"})
        const user = await User.findOne({where:{login: login}})
        if(!user) return res.status(500).json({message: "Данный пользователь не существует"})
        
        console.log(code)
        console.log(user.tgcode)
        if(!(code==user.tgcode)) return res.status(500).json({message: "Не верный код пользователя"})

        const level = await Acceess_Level.findOne({where: {id: user.acceessLevelId}})
        const token = generateJwt(user.id, user.login, level.level_name)
        return res.json({token, userId: user.id, userLevel: level.level_name, userLogin: user.login})
    }

    
}
module.exports = new UserController();