import React, { useEffect, useState } from 'react'
import { FaUserEdit } from 'react-icons/fa'
import './styles.scss'

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
        <div className='container'>
            <div className='header-form'>
                <FaUserEdit className='icon edit' />
                <h2>Edit user</h2>
            </div>

            <form className='container-form'
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
                <div className='container-buttons'>
                    <button className='button edit'>Update user</button>
                    <button className='button cancel'
                        onClick={() => setEditing(false)}
                    >Cancel</button>

                </div>
            </form>
        </div>
    )
}

export default EditUserForm