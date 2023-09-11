const jwt = require('jsonwebtoken')

module.exports = function(level) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            //Получение токена
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Данный пользователь не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.level !== level) {
                return res.status(403).json({message: "Сорян, но ты без прав =^^="})
            }
            req.user = decoded;
            next()
        } catch (e) {
            res.status(401).json({message: "Данный пользователь не авторизован"})
        }
    };
}