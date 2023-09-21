import React, {useContext, useState, useCallback, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import {AuthContext} from '../context/AuthContext'
import { useHttp } from "../hooks/http.hook";
import { Link } from "react-router-dom";
import saveBtn from "../static/icons/download.svg"
import "../static/css/base.css"
import "../static/css/dencrypte.css"

export const DencryptePage=()=>{
    const auth = useContext(AuthContext)
    const textId = useParams().id

    const [dencrText, setEncrTexts] = useState('')
    const {loading, request} = useHttp()
  
    const fetchLinks = useCallback(async () => {
      try {
        const fetched = await request(`http://localhost:7000/api/dencryptedtext/${textId}`, 'GET')
        setEncrTexts(fetched)
      } catch (e) {}
    }, [request])
  
    useEffect(() => {
      fetchLinks()
    }, [fetchLinks])

    return(
        <div>
            <Navbar/>
            <div className="base-page text-center">
                <div className="dencr-block">
                    <div className="text-start" >
                        <div className="text-end">
                            <img className = "text-card-icon" src={saveBtn} alt="save as filet"/>  
                            <Link to={'/'} type="button" className="btn-close" aria-label="Закрыть"/>
                        </div>
                        <p className="base-header-1 dencr-p">Dencrypted text</p>
                    </div>
                    <hr/>

                    <div className="dencr-text">
                        <div className="base-header-2">{dencrText}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}