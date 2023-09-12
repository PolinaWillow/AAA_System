import React, { useContext } from "react";
import {Button} from 'react-bootstrap'
import { Context } from '..';
import "../styles/Navbar.css"
import logo from '../img/LogoNavbar.png';
import { observer } from "mobx-react-lite";
import {useNavigate} from 'react-router-dom'
import { AUTH_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export const Navbar=observer(()=>{
    const {user} = useContext(Context)
    const navigate = useNavigate();

    //Переходы на страницы Auth и Registartion
    const navigateAuth = () => { navigate(AUTH_ROUTE) };
    const navigateReg = () => { navigate(REGISTRATION_ROUTE) };

    //Выход из учетной записи пользователя
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    
    return (
        <div className ="navBar">
            <div className = "text-center">
                <img className = "navLogo" src={logo} alt="Лого Навбара"/>
            </div>           
            <div>
                {user.isAuth ? 
                <div >
                    <p className="text-center navUserName">{"Login"}</p>
                    <p className="text-center navaAcceessLevel">Your Accees Level is <b>{"Admin"}</b></p>
                    <div className="d-flex justify-content-center">
                        <Button className="base-btn" onClick={() => logOut()}>Exit</Button>
                    </div>
                    
                </div>
                :
                <div className="per-base-btn navAuthBtn">
                    <div className="div-btn d-flex justify-content-center">
                        <Button className="base-btn" onClick={navigateAuth}>Log in</Button>
                    </div>
                    <div className="div-btn d-flex justify-content-center">
                        <Button className="base-btn" onClick={navigateReg}>Sign up</Button>
                    </div>
                </div>
                }
            </div>  
        </div>
    )
})