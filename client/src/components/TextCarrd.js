import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { DeleteModal } from "./modals/DeleteModal";
import dencrypeBtn from "../static/icons/dencryped.svg"
import saveBtn from "../static/icons/download.svg"
import deleteBtn from "../static/icons/delete.svg"
import "../static/css/textCard.css"
import "../static/css/base.css"

export const TextCard=({encrText, elementNum})=>{
    const auth = useContext(AuthContext)
    const navigate = useNavigate();
    const navigateDencryped = () => { navigate(`/dencryped/${encrText.id}`) };

    return (
        <div className="text-card">
            <div className="text-card-header">
                <p className="text-card-header-text">{elementNum}. Chipher №{elementNum}</p>
                <div className="text-card-icons">
                    <img className = "text-card-icon" src={dencrypeBtn} alt="Dencrypte text" onClick={navigateDencryped}/>                   
                    <img className = "text-card-icon" src={deleteBtn} alt="Delete encryption" role="button" data-bs-toggle="modal" data-bs-target="#DeleteEncrModal"/>
                </div>
            </div>
            
            <p >{encrText.text}</p>
            <hr className="text-card-hr"/>

            <DeleteModal BlockId={"DeleteEncrModal"} encrText={encrText}/>
        </div>
    )
}