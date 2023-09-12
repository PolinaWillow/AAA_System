import React from 'react';
import {Button} from 'react-bootstrap'
import '../styles/Auth.css'
import logo from '../img/LogoNavbar.png';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/consts';

export const Auth = () =>{
    return (
        <div className = "auth-page">
            <div className="auth-block">
                <div class="text-end auth-close" >
                    <Link to={HOME_ROUTE} type="button" class="btn-close" aria-label="Закрыть"/>
                </div>
                <div className = "text-center">
                    <img className = "auth-logo" src={logo} alt="Лого Навбара"/>
                    <p className="auth-header-1">Welcome</p>
                    <p className="auth-header-2">please, login in to your accout</p>
                    <form className = "text-center">
                        <div className='auth-inputs'>
                            <div className="div-input d-flex justify-content-center">
                                <input className='auth-input' type='text' name='login' placeholder='Login'/>
                            </div>
                            <div className="div-input d-flex justify-content-center">
                                <input className='auth-input' type='password' name='password' placeholder='Password'/>
                            </div>
                        </div>
                    
                        <Button type='submit' className="base-btn">Log in</Button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}