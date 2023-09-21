import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import {AdminPage} from '../src/pages/AdminPage'
import {AuthPage} from '../src/pages/AuthPage'
import {HomePage} from '../src/pages/HomePage'
import {RegPage} from '../src/pages/RegPage'
import { VerifyPage } from "./pages/VerifyPage"
import { DencryptePage } from "./pages/DencryptePage"

export const useRoutes = isAuth =>{
    if(isAuth){
        return(
            <Routes>
                <Route path="/" exact element={<HomePage/>}/>
                <Route path="/dencryped/:id" exact element={<DencryptePage/>}/>
                <Route path="/verify" exact element={<VerifyPage/>}/>
                <Route path="/admin" exact element={<AdminPage/>}/>
                <Route path="*" element={<Navigate to="/" replace />}/>             
            </Routes>
        )
    }
    return(
        <Routes>
            
                <Route path="/" exact element={<HomePage/>}/>
                <Route path="/auth" exact element={<AuthPage/>}/>
                <Route path="/reg" exact element={<RegPage/>}/>
                <Route path="*" element={<Navigate to="/" replace />}/> 
           
        </Routes>
    )
}