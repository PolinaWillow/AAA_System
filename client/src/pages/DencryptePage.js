import React, {useContext, useState, useCallback, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import {AuthContext} from '../context/AuthContext'
import { useHttp } from "../hooks/http.hook";
import { Link } from "react-router-dom";
import saveBtn from "../static/icons/download.svg"
import "../static/css/base.css"
import "../static/css/dencrypte.css"
import axios from 'axios'
import { saveAs } from 'file-saver';

export const DencryptePage=()=>{
    const auth = useContext(AuthContext)
    const textId = useParams().id

    const [dencrText, setEncrTexts] = useState('')
    const {loading, request} = useHttp()
  
    const fetchLinks = useCallback(async () => {
      try {
        const fetched = await request(`http://localhost:7000/api/dencryptedtext/${textId}`, 'GET', null, {Authorization: `Bearer ${auth.token}`})
        setEncrTexts(fetched)
      } catch (e) {}
    }, [request])
  
    useEffect(() => {
      fetchLinks()
    }, [fetchLinks])

    const getPDF = async()=>{
        try {
            let fileName = `dencrText1.pdf`
            axios.post(`http://localhost:7000/api/dencryptedtext/createPDF/${textId}`, {fileName}, {headers:{Authorization: `Bearer ${auth.token}`}}
            ).then(() =>
                axios.get(`http://localhost:7000/api/dencryptedtext/getPdf/${fileName}`, { responseType: 'blob', headers:{ Authorization: `Bearer ${auth.token}`}})
                
            ).then((res) => {
                console.log(res)
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                saveAs(pdfBlob, 'dencr-text.pdf');
            })//.then(()=>axios.get(`http://localhost:7000/api/dencryptedtext/deletePdf/${fileName}`))        
        } catch (error) {
            
        }
    }

    return(
        <div>
            <Navbar/>
            <div className="base-page text-center">
                <div className="dencr-block">
                    <div className="text-start" >
                        <div className="text-end">
                            <img className = "text-card-icon" src={saveBtn} alt="save as filet" onClick={getPDF}/>  
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