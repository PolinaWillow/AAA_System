import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { DeleteModal } from "./modals/DeleteModal";
import dencrypeBtn from "../static/icons/dencryped.svg"
import { ToolTip } from '../components/toolTips'
import deleteBtn from "../static/icons/delete.svg"
import "../static/css/textCard.css"
import "../static/css/base.css"

export const TextCard=({elem, elementNum})=>{
    const auth = useContext(AuthContext)
    const navigate = useNavigate();
    const navigateDencryped = () => { navigate(`/dencryped/${elem.id}`) };


    return (
        <div className="text-card">
            <div className="text-card-header">
                <p className="text-card-header-text">{elementNum}. Chipher №{elementNum}</p>
                <div className="text-card-icons">
                    {(auth.userLevel ==="ADMIN" || auth.userLevel ==="DECRYPTOR")&&(
                        <ToolTip text={'Dencrupted text'} children={
                            <img className = "text-card-icon" src={dencrypeBtn} alt="Dencrypte text" onClick={navigateDencryped}/> 
                        }/>
                    )}
                    {(auth.userLevel ==="ADMIN" || auth.userLevel ==="ENCODER")&&(      
                        <ToolTip text={'Delete text'} children={
                            <img className = "text-card-icon" src={deleteBtn} alt="Delete encryption" role="button" data-bs-toggle="modal" data-bs-target={`#DeleteEncrModal_${elem.id}`}/>
                        }/>            
                        
                    )}
                </div>
            </div>
            
            <p >{elem.text}</p>
            <hr className="text-card-hr"/>

            <DeleteModal BlockId={`DeleteEncrModal_${elem.id}`} encrText={elem.id}/>
        </div>
    )
}