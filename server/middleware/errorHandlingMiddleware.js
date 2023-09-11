const ApiError = require('../error/apiError')

module.exports = function(err, req, res, next){
    //Если err принадлежит классу ApiError с учетом наследования
    if(err instanceof ApiError){
       return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Неизвестная ошибка!("})
}