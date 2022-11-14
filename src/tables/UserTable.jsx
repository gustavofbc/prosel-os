import React from 'react'

function UserTable({ users, deleteUser, editRow }) {
    return (
        <table>
            <thead>
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
                                <td>
                                    <button onClick={() => editRow(user)}>Edit</button>
                                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                        :
                        (
                            <tr>
                                <td>Sem usuários registrados</td>
                            </tr>
                        )
                }
            </tbody>
        </table>
    )
}

export default UserTable