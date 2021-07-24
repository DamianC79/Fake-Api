import React, {useEffect, useState} from 'react';
import { getUsers } from './api'; 

const Users = () => {
    const [users,obtenerUsers]=useState([]);

    useEffect(() => {
      getUsers
      .then(data =>{
        console.log(users)
        obtenerUsers(data)
      })   
    }, [])

    return(
            <>
            <h1>Users</h1>
            <table>
                <thead>
                <tr>
                    <td>FirstName</td>
                    <td>LastName</td>
                    <td>User Nick</td>
                    <td>Gmail</td>
                    <td>Password</td>
                    <td>Image</td>
                </tr> 

            </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.ip}>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td><img src={user.image} width="50px" height="50px"/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>      
            </>
     );
}

export default Users;