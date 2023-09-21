import React, {useContext, useEffect} from "react";
import {AuthContext} from '../../context/AuthContext'
import {useHttp} from '../../hooks/http.hook'
import {useMessage}from '../../hooks/message.hook'
import 'bootstrap'
import '../../static/css/modal.css'

export const DeleteModal = ({BlockId, encrText})=>{
    const auth = useContext(AuthContext)

    const {loading, request, error, clearError} = useHttp()
    //Отслеживание ошибок
    const message = useMessage()
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const deleteHandler = async()=>{
        try {
            console.log(encrText.id)
            await request(`http://localhost:7000/api/encryptedtext/delete${encrText.id}`, 'GET')
            alert("The encrypted text was delete")
            window.location.reload();
        } catch (error) {}
    }


    return (
        <div>
            <div className="modal fade" id={BlockId} tabIndex="-1" aria-labelledby="addNewEncyptedText" aria-hidden="true">
                <div className="modal-dialog modal-s">
                <div className="modal-content modal-background text-center">
                    <p className="base-header-2">Do you want to delete text?</p>
                    <hr/> 
                    <div className='modal-btns text-end'>
                        <button type="button" className="base-btn base-btn-small" data-bs-dismiss="modal">No</button>
                        <button type="button" className="base-btn base-color-red base-btn-small" data-bs-dismiss="modal" onClick={deleteHandler}>Yes</button>
                    </div>
                </div>                                                                     
                </div>
            </div>
        </div>
    )
}