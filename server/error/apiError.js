class ApiError extends Error{ //Наследование от класса Error
    constructor(status, message){
        super(); //Вызов родительского конструктора
        this.status = status
        this.message = message
    }

    //клиент был в состоянии общаться с сервером, но сервер не может найти данные согласно запросу
    static badRequest(message){
        return new ApiError(404, message)
    }

    //сервер столкнулся с неожиданной ошибкой, которая помешала ему выполнить запрос
    static internal(message){
        return new ApiError(500, message)
    }

    //доступ к запрошенному ресурсу запрещен.
    static forbidden(message){
        return new ApiError(403, message)
    }
}
module.exports = ApiError