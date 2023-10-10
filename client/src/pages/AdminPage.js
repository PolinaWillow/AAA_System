import React, { useContext, useState, useCallback, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import {AuthContext} from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import {Button} from 'react-bootstrap'
import deleteBtn from "../static/icons/delete.svg"
import Find_icon from '../static/icons/find.svg'
import '../static/css/admin.css'

export const AdminPage = () =>{
    //Получение списка пользователей
    const [users, setUsers] = useState([])
    const {loading, request} = useHttp()
    const auth = useContext(AuthContext)

    const fetchUsers = useCallback(async () => {
        try {
          const fetched = await request('http://localhost:7000/api/user/getall', 'GET')
          setUsers(fetched)
        } catch (e) {}
      }, [request])
    
      useEffect(() => {
        fetchUsers()
      }, [fetchUsers])


    return (
        <div>
            <Navbar/>
            <div className="base-page">
                <div className='text-center'>
                    <div className='admin_find_block'>
                        <img src={Find_icon} alt="Find icon" />
                        <input className='admin_find_input' type='text' name='find_user' placeholder='Find'/>
                        <Button type="submit" className='base-btn admin_find_btn'>Find</Button>
                    </div>

                    <div className='admin_user_table'>
                        <table className="table">
                        <thead className='admin_table_header'>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Login</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index)=>
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{user.login}</td>
                                <td>{user.email}</td>
                                <td>
                                  <Button type="submit" className='base-btn'>Edit</Button>
                                  <img className = "text-card-icon" src={deleteBtn} alt="Delete user" role="button"/>
                                </td>
                            </tr>
                        )}
                        </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}