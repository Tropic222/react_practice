import React, { useEffect, useState } from 'react'
import { Users } from './components/Users'
import './index.scss'

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://reqres.in/api/users')

    .then((res) => res.json())
    .then((json) => {
      setUsers(json.data)
    })
    .catch((err) => {
      console.warn(err)
      alert('ошиибка')
    }).finally(() => setLoading(false))
  }, [] )
  return (
    <div className="App">
      <Users items={users} isLoading={isLoading}/>
      {/* <Success /> */}
    </div>
  );
}

export default App;