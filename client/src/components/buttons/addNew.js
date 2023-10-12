import React, {useContext} from "react";
import addBtn from '../../static/icons/AddEncryption.svg'
import {AddEncryptionText} from '../modals/AddEncryptionText'
import {AuthContext} from '../../context/AuthContext'

export const AddNewButton = () =>{
    const auth = useContext(AuthContext)
    return(
        <>
            <img className = "home-addBtn" 
                 src={addBtn} 
                 alt="Add Encryption"   
                 role="button" 
                 data-bs-toggle="modal" 
                 data-bs-target="#AddTextModal"
            />
            <AddEncryptionText BlockId = {"AddTextModal"} creatorId={auth.userId}/>
        </>          
    )
}