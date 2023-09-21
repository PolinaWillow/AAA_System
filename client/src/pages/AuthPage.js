import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import logo from '../static/icons/Logo.svg'
import '../static/css/base.css'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'


export const AuthPage = () =>{
    const auth = useContext(AuthContext)
    const [authForm, setAuthForm] = useState({
        login:'', password:''
    })

    const ChangeHandler = event =>{
        setAuthForm({...authForm, [event.target.name]:event.target.value})
    }

    const {loading, request, error, clearError} = useHttp()
    
    //Отслеживание ошибок
    const message = useMessage()
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

   
    const authHandler = async()=>{
        try {
            const data = await request('http://localhost:7000/api/user/login', 'POST', {...authForm})
            //console.log('Data', data)
            auth.login(data.token, data.userId, data.userLevel, data.userLogin)         
        } catch (error) {
            
        }
    }

    return (
        <div className='text-center base-auth-reg-page'>
            <div className = 'base-auth-reg-form'>
                <div className='text-end'>
                    <Link to={'/'} type="button" className="btn-close" aria-label="Закрыть"/>
                </div>
                <div >
                    <img src={logo} alt="Лого Навбара"/>
                    <p className='base-header-1'>Welcome</p>
                    <p className='base-header-2'>please, login in to your accout</p>
                    
                        <div>                    
                            <input type='text' name='login' placeholder='Login' onChange={ChangeHandler}/>
                            <input type='password' name='password' placeholder='Password'  onChange={ChangeHandler}/>
                        </div>
                        <Button type="submit" className='base-btn' onClick={authHandler} disabled={loading}>Log in</Button>
                    
                </div>
            </div>
        </div>
    )
}

//onClick={authHandler}