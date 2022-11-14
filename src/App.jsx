import { useState } from 'react'
import './App.css'
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm'

import UserTable from './tables/UserTable';

function App() {
  const usersData = [
    { id: 1, name: 'João Silva', username: 'joao123' },
    { id: 2, name: 'Pedro barros', username: 'barros' },
    { id: 3, name: 'Maria Célia', username: 'maria123' },
  ]

  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState);

  function addUser(user) {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  function deleteUser(id) {
    return setUsers(users.filter((user) => user.id != id))
  }

  function editRow(user) {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  function updateUser(id, updateUser) {
    setEditing(true);

    setUsers(users.map((user) => (user.id === id ? updateUser : user)))
  }

  return (
    <div>
      <h1>CRUD App</h1>
      <div>
        {editing ?
          (
            <div>
              <h2>Editing user</h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          )
          :
          (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )
        }
        <div>
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App
