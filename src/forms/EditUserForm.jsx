import React, { useEffect, useState } from 'react'

const EditUserForm = ({ currentUser, updateUser, setEditing }) => {
    const [userSelected, setUserSelected] = useState(currentUser)

    function handleInputChange(event) {
        const { name, value } = event.target

        setUserSelected({ ...userSelected, [name]: value })
    }

    useEffect(() => {
        setUserSelected(currentUser)
    }, [currentUser])

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                updateUser(userSelected.id, userSelected);
            }}
        >
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={userSelected.name}
                onChange={handleInputChange}
            />
            <label htmlFor="name">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                value={userSelected.username}
                onChange={handleInputChange}
            />
            <button>Update user</button>
            <button
                onClick={() => setEditing(false)}
            >Cancel</button>
        </form>
    )
}

export default EditUserForm