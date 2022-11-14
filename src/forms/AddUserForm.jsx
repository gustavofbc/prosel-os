import React, { useState } from 'react'

const AddUserForm = ({ addUser }) => {
    const initialState = { id: null, name: '', username: '' }

    const [newUser, setNewUser] = useState(initialState);

    function handleInputChange(event) {
        const { name, value } = event.target;
        return setNewUser({ ...newUser, [name]: value })
    }

    return (
        <form
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
            />
            <label htmlFor="name">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                value={newUser.username}
                onChange={handleInputChange}
            />
            <button>Add user</button>
        </form>
    )
}

export default AddUserForm