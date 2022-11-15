import React from 'react';
import './styles.scss'
import { MdEdit, MdDelete } from 'react-icons/md'

function UserTable({ users, deleteUser, editRow }) {
    return (
        <table className='table'>
            <thead className='tr'>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length > 0 ?
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td className='container-actions'>
                                    <button className='icon edit' onClick={() => editRow(user)}><MdEdit size={24} /></button>
                                    <button className='icon delete' onClick={() => deleteUser(user.id)}><MdDelete size={24} /></button>
                                </td>
                            </tr>
                        ))
                        :
                        (
                            <tr className='no-results'>
                                <td></td>
                                <td className='no-results-text'>No registered users</td>
                                <td></td>
                            </tr>
                        )
                }
            </tbody>
        </table>
    )
}

export default UserTable