import React, { useState, useContext, useEffect } from 'react'
import {AuthContext} from '../../context/AuthContext'
import {useHttp} from '../../hooks/http.hook'
import {useMessage}from '../../hooks/message.hook'
import 'bootstrap'
import '../../static/css/modal.css'

export const AddEncryptionText = ({BlockId, creatorId}) =>{
    //Получение контекста пользователя
    const auth = useContext(AuthContext)
    const [newText, setNewText] = useState({
        text: '', userId: ''
    })
    //const [textDirty, setTextDirty] = useState('false')
    //const [textError, setTextError] = useState('Вы не заполнили поле для шифровки')


    const ChangeHandler = event =>{
        setNewText({...newText, [event.target.name]:event.target.value})
    }

    const {loading, request, error, clearError} = useHttp()
    //Отслеживание ошибок
    const message = useMessage()
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => { setNewText({...newText, userId: 27}) }, [])


    const encrypteHandler = async()=>{
        try {
            //console.log(auth.userId)
            //setNewText({...newText, userId: creatorId})
            //console.log(newText)
            const data = await request('http://localhost:7000/api/encryptedtext/addnew', 'POST', {...newText})
            alert("New encrypted text was created")
            window.location.reload();      
        } catch (error) {
            
        }
    }


    return (
        <div>
           <div className="modal fade" id={BlockId} tabIndex="-1" aria-labelledby="addNewEncyptedText" aria-hidden="true">
                <div className="modal-dialog modal-lg ">
                <div className="modal-content modal-background">
                    <p className="base-header-1">New encryption text</p> 
                    <hr/>
                    <form>                                              
                        <p className="base-header-2">Please, enter your texst</p>
                        <textarea className="form-control" name='text' placeholder='Your text' onChange={ChangeHandler}></textarea>
                        <div className='text-end modal-btns'>
                            <button type="button" className="base-btn base-btn-small" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="base-btn base-color-red base-btn-small" data-bs-dismiss="modal" disabled={loading} onClick={encrypteHandler}>Encrypte</button>
                        </div>
                    </form> 
                </div>                                                                     
                </div>
            </div>
      </div>
    )
}