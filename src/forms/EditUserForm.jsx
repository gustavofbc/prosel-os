import React, { useEffect, useState } from 'react'

const EditUserForm = ({ currentUser, updateUser, setEditing }) => {
    const [userSelected, setUserSelected] = useState(currentUser)


    useEffect(() => {
        setUserSelected(currentUser)
    }, [currentUser])

    function handleInputChange(event) {
        const { name, value } = event.target

        setUserSelected({ ...userSelected, [name]: value })
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                updateUser(userSelected.id, userSelected);
                setEditing(false);
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