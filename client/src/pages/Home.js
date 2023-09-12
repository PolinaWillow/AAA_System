import React from 'react';
import "../styles/Base.css"
import { Navbar } from '../components/Navbar';

export const Home = () =>{
    return (
        <div>
            <Navbar/>
            <div className="base-page">Home</div>
        </div>
        
    )
}