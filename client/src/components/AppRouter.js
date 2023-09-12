import React, { useContext } from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../router';
import { Context } from '..';

export const AppRouter = () =>{
    //const isAuth = false //Отображение Авторизован пользователь или нет
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Navigate to="/" replace />}/> 
        </Routes>
    )
}