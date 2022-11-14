import { useEffect, useState } from 'react'
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

  const [users, setUsers] = useState([]);

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState);

  function addUser(user) {
    user.id = users.length + 1;
    const result = [...users, user]
    setUsers(result);
    Storage.set(result);
  }

  function deleteUser(id) {
    const result = users.filter((user) => user.id != id);

    setUsers(result);
    Storage.set(result);

  }

  function editRow(user) {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  async function updateUser(id, updateUser) {
    setEditing(true);

    const result = users.map((user) => (user.id === id ? updateUser : user))

    setUsers(result)
    Storage.set(result);
  }

  const Storage = {
    get() {
      const result = JSON.parse(localStorage.getItem('prosel:data'));
      if (result) {
        setUsers(result);
      } else {
        this.set(usersData);
      }
      return result;
    },
    set(data) {
      localStorage.setItem('prosel:data',
        JSON.stringify(data))
    }
  }

  async function verifyConfig() {
    await Storage.get();
  }

  useEffect(() => {
    verifyConfig();
  }, [])

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
