import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import {Button} from 'react-bootstrap'
import logo from '../static/icons/Logo.svg'
import adminLogo from '../static/icons/admin.svg'
import "../static/css/navbar.css"
import "../static/css/base.css"

export const Navbar = ()=>{
    const navigate = useNavigate();
    //Переходы на страницы
    const navigateAuth = () => { navigate('/auth') };
    const navigateReg = () => { navigate('/reg') };
    const navigateAdmin = () => { navigate('/admin') };
    const navigateHome = () => { navigate('/') };


    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigateHome()
      }

  
    //console.log(auth)
    

    return (
        <div className='nav-body text-center'>
            <img src={logo} alt="Лого Навбара" onClick={navigateHome}/>
            <div>
                {auth.token?(
                <div >
                    <p className='base-header-1'>{auth.userLogin}</p>
                    <p className='base-header-2'>Your Accees Level is {auth.userLevel}</p>
                    {auth.userLevel ==="ADMIN" && (
                        <div className='nav-admin-logo'>
                            <img className='adminLogo' src={adminLogo} onClick={navigateAdmin} alt="For Admin" />
                        </div>
                    )}
                    
                    
                    <Button className='base-btn nav-exit-btn' onClick={logoutHandler}>Exit</Button>
                   
                </div>
                ):(
                <div className='nav-auth-btn-block'>
                    <div>
                        <Button className='base-btn' onClick={navigateAuth}>Log in</Button>        
                    </div>
                    <div>
                        <Button className='base-btn' onClick={navigateReg}>Sign up</Button>
                    </div>                           
                    
                </div>
                )}
            </div>  
        </div>
    )
    
}