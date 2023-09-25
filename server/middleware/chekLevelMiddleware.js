const jwt = require('jsonwebtoken')

module.exports = function(levels) {
    //console.log(levels)
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            //Получение токена
            const token = req.headers.authorization.split(' ')[1]
            console.log(token)
            if (!token) {
                return res.status(401).json({message: "Данный пользователь не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            //console.log(decoded.level)
            let flag=false
            levels.forEach(level => {
                if (decoded.level == level) {
                    flag=true
                }
            });
            if(!flag) return res.status(403).json({message: "Сорян, но ты без прав =^^="})
            req.user = decoded;
            next()
            
        } catch (e) {
            res.status(401).json({message: "Данный пользователь не авторизован"})
        }
    };
}