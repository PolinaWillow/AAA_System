import React, {useContext, useState, useCallback, useEffect} from 'react'
import { useHttp } from '../hooks/http.hook'
import { Navbar } from '../components/Navbar'
import {AddEncryptionText} from '../components/modals/AddEncryptionText'
import { TextCard } from '../components/TextCarrd' 
import addBtn from '../static/icons/AddEncryption.svg'
import {AuthContext} from '../context/AuthContext'
import '../static/css/home.css'
import '../static/css/base.css'

export const HomePage = () =>{
    const auth = useContext(AuthContext)
    const [encrTexts, setEncrTexts] = useState([])
    const {loading, request} = useHttp()
  
    const fetchLinks = useCallback(async () => {
      try {
        const fetched = await request('http://localhost:7000/api/encryptedtext/all')
        setEncrTexts(fetched)
      } catch (e) {}
    }, [request])
  
    useEffect(() => {
      fetchLinks()
    }, [fetchLinks])
    
    return (
        <div>
            <Navbar/>
            <div className="base-page">
                <div className='home-body-block text-center'>
                    <div className='home-list text-start'>
                        {encrTexts.map((elem, index)=><TextCard encrText={elem} key={index} elementNum={index+1}/>)}
                    </div>
                    
                </div>
                <div className='home-footer-block'>
                    <img className = "home-addBtn" src={addBtn} alt="Add Encryption" role="button" data-bs-toggle="modal" data-bs-target="#AddTextModal"/>
                    <AddEncryptionText BlockId = {"AddTextModal"} creatorId={auth.userId}/>
                </div>
            </div>           
        </div>
    )
}