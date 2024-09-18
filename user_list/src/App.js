import React, { useEffect, useState } from 'react'
import { Success } from './components/Success'
import { Users } from './components/Users'
import './index.scss'

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([1, 3]);
  const [isLoading, setLoading] = useState(true);
  const [success, setSucces] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка');
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };
  const onClickSendInvites = () => {
    setSucces(true)
  }
  return (
    <div className="App">
      {
        success ? <Success count={invites.length}/> : <Users
        onChangeSearchValue={onChangeSearchValue}
        searchValue={searchValue}
        items={users}
        isLoading={isLoading}
        invites={invites}
        onClickInvite={onClickInvite}
        onClickSendInvites={onClickSendInvites}
      />
      }
      
    </div>
  );
}

export default App;
