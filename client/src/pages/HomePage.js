import React, {useContext, useState, useCallback, useEffect, useRef} from 'react'
import { useHttp } from '../hooks/http.hook'
import { Navbar } from '../components/Navbar'
import { TextCard } from '../components/TextCarrd' 
import {AuthContext} from '../context/AuthContext'
import '../static/css/home.css'
import '../static/css/base.css'
import { ToolTip } from '../components/toolTips'
import {AddNewButton} from "../components/buttons/addNew"

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
                        {encrTexts.map((elem, index)=><TextCard elem={elem} key={elem.id} elementNum={index+1}/>)}
                    </div>
                </div>
                <div className='home-footer-block'>
                    {(auth.userLevel ==="ADMIN" || auth.userLevel ==="ENCODER")&&( 
                        <ToolTip text={'Add new encrypted text'} children={<AddNewButton/>}/>
                    )}
                </div>
            </div>           
        </div>
    )
}