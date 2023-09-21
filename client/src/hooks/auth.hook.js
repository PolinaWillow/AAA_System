import { useState, useCallback, useEffect } from "react"

const storageName = 'userData'

export const useAuth = () =>{
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [userLevel, setUserLevel] = useState(null)
    const [userLogin, setUserLogin] = useState(null)

    //Логирование
    const login = useCallback((jwtToken, id, level, login)=>{
        //console.log(jwtToken, id, level)
        setToken(jwtToken)
        setUserId(id)
        setUserLevel(level)
        setUserLogin(login)

        //Записываем в локалсторэдж токен и id
        localStorage.setItem(storageName, JSON.stringify({userId: id, token: jwtToken, userLevel: level, userLogin: login}))
    },[])

    //Разлогирование
    const logout = useCallback(()=>{
        setToken(null)
        setUserId(null)
        setUserLevel(null)
        setUserLogin(null)
        //Очищаем локалсторэдж
        localStorage.removeItem(storageName)
    },[])

    //Проверка есть ли в локалсторэдже какие-либо данные
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem(storageName))
        if(data&&data.token){
            login(data.token, data.userId, data.userLevel, data.userLogin)
        }
    }, [login])


    return {login, logout, token, userId, userLevel, userLogin}
}