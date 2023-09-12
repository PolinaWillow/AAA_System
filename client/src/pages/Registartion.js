import React from 'react';
import {Button} from 'react-bootstrap'
import '../styles/Registration.css'
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../utils/consts';

export const Registration = () =>{
    return (
        <div className = "reg-page">
            <div className="reg-block text-center">
                <div class="text-end reg-close" >
                    <Link to={HOME_ROUTE} type="button" class="btn-close" aria-label="Закрыть"/>
                </div>
                <p className="reg-header-1">Registration</p>
                <p className="reg-header-2">please,  enter your data</p>
                <form>
                    <div className='reg-inputs'>
                        <div className="div-input d-flex justify-content-center">
                            <input className='reg-input' type='text' name='login' placeholder='Login'/>
                        </div>
                        
                        <div className="div-input d-flex justify-content-center">
                            <input className='reg-input' type='email' name='email' placeholder='Email'/>
                        </div>
                        
                        <div className="div-input d-flex justify-content-center">
                            <input className='reg-input' type='text' name='Number' placeholder='Phone number'/>
                        </div>
                        
                        <div className="div-input d-flex justify-content-center">
                            <input className='reg-input' type='password' name='password' placeholder='Password'/>
                        </div>
                        
                    </div>
                    
                    <Button type='submit' className="base-btn">Sign up</Button>
                </form>
                
            </div>
        </div>
    )
}