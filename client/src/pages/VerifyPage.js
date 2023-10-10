import React, { useState, useContext, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import '../static/css/base.css'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

export const VerifyPage = () =>{
    const [code, setCode]=useState('')
    const {loading, request, error, clearError} = useHttp()
    const navigate = useNavigate();
    const auth = useContext(AuthContext)
    
    const ChangeHandler = event =>{
        setCode(event.target.value)
    }

    const authHandler = async()=>{
        try {
            const data = await request('http://localhost:7000/api/user/verify', 'POST', {code: code, login: localStorage.getItem('username')})
            console.log(localStorage.getItem('username'))
            console.log('Data', data)
            auth.login(data.token, data.userId, data.userLevel, data.userLogin)

            localStorage.removeItem('username')

            navigate('/')            
        } catch (error) {
            
        }
    }

    //Отслеживание ошибок
    const message = useMessage()
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])



    return(

        
            <div className='text-center base-auth-reg-page'>
            <div className = 'base-auth-reg-form'>
                <div className='text-end'>
                    <Link to={'/'} type="button" className="btn-close" aria-label="Закрыть"/>
                </div>
                {localStorage.getItem('username') ? (
                <div >
                    <p className='base-header-1'>Verify your telegram</p>
                    <br/>
                    <p className='base-header-2'>Please click the link or scan QR-code and request code from the telegram bot</p>
                    <p className='p-href'><a href="t.me/AAA_System_Bot">t.me/AAA_System_Bot</a></p>
                    <img src="http://qrcoder.ru/code/?t.me%2FAAA_System_Bot&4&0" alt="QR-code" width="132" height="132" border="0" title="QR код"/>
                    <br/><br/>
                    
                    <div>                    
                        <input type='text' name='code' placeholder='Code' onChange={ChangeHandler}/>
                     </div>
                    <Button type="submit" className='base-btn' onClick={authHandler}>Log in</Button>                                  
                </div>
                ):(
                    <div >
                        <p className='base-header-1'>Please, enter your login and password or cleate new account</p>
                        <br/><br/>
                        <p className='p-href'>Don`t have an account? <a href='/reg'>Sign up</a></p>
                        <p className='p-href'>Already have an account? <a href='/auth'>Sign in</a></p>     
                    </div>
                )}
            </div>
        </div> 
    )
}