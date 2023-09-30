import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const RegPage = () =>{
    const navigate = useNavigate();
    const [regForm, setRegForm] = useState({
        login: '', email: '',tgname:'', number: '', password: ''
    })

    const ChangeHandler = event =>{
        setRegForm({...regForm, [event.target.name]:event.target.value})
    }

    const {loading, request, error, clearError} = useHttp()

    //Отслеживание ошибок
    const message = useMessage()
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

   
    const regHandler = async()=>{
        try {
            const data = await request('http://localhost:7000/api/user/reg', 'POST', {...regForm})
            console.log('Data', data)
            alert("New user was created")
            navigate('/auth')          
        } catch (error) {
            
        }
    }

    return (
        <div className='text-center base-auth-reg-page'>
            <div className = 'base-auth-reg-form'>
                <div className='text-end'>
                    <Link to={"/"} type="button" className="btn-close" aria-label="Закрыть"/>
                </div>
                <p className='base-header-1'>Registration</p>
                <p className='base-header-2'>please,  enter your data</p>
                <div className='reg-div-input-block'>
                    <input type='text' name='login' placeholder='Login' onChange={ChangeHandler}/>
                    <input type='email' name='email' placeholder='Email' onChange={ChangeHandler}/> 
                    <input type='text' name='tgname' placeholder='Tg name' onChange={ChangeHandler}/>                       
                    <input type='text' name='number' placeholder='Phone number' onChange={ChangeHandler}/>                    
                    <input type='password' name='password' placeholder='Password' onChange={ChangeHandler}/>            
                </div>                   
                <Button className='base-btn' type='submit'disabled={loading} onClick={regHandler}>Sign up</Button>       
            </div>
        </div>
    )
}