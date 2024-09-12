import React from 'react'
import { Users } from './components/Users'
import './index.scss'

// Тут список пользователей: https://reqres.in/api/users

function App() {
  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;