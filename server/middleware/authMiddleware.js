const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        //Получение токена
        const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
        //Проверка токена на валидность
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        //Получение данных из токена
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        //Добавление данных из токена к ответу
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован"})
    }
};