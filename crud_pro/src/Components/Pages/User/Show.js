import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Show() {
    const [users, setUser] = useState([])

    async function fetchData() {
        const result = await axios.get('http://localhost:5000/users');
        // console.log(result.data);
        setUser(result.data);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>ROLL</th>
                        <th>NAME</th>
                        <th>MARKS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((obj) => {
                            return (
                                <tr>
                                    <td>{obj.roll}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.marks}</td>
                                    <td>
                                        <NavLink to={`/user/update/${obj.id} `}> <button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                        <NavLink to={`/user/delete/${obj.id} `}><button className='btn btn-outline-danger'>DELETE</button></NavLink>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Show;