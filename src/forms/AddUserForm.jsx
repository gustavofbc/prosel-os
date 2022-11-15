import React, { useState } from 'react'
import { FaUserCheck } from 'react-icons/fa'
import './styles.scss'

const AddUserForm = ({ addUser }) => {
    const initialState = { id: null, name: '', username: '' }

    const [newUser, setNewUser] = useState(initialState);

    function handleInputChange(event) {
        const { name, value } = event.target;
        return setNewUser({ ...newUser, [name]: value })
    }

    return (
        <div className='container'>
            <div className='header-form'>
                <FaUserCheck className='icon' />
                <h2>Add user</h2>
            </div>
            <form className='container-form'
                onSubmit={(event) => {
                    event.preventDefault();
                    if (!newUser.name || !newUser.username) return

                    addUser(newUser)
                    setNewUser(initialState)
                }}
            >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="name">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={newUser.username}
                    onChange={handleInputChange}
                    required
                />
                <button className='button submit'>Add user</button>
            </form>
        </div>
    )
}

export default AddUserForm