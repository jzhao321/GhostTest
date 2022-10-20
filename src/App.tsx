import React, { useCallback, useEffect, useState } from 'react';
import Axios from 'axios'

import './App.css';
import { UserDataResults, UserData } from './types';
import UserList from './UserList';

const App: React.FC = () => {

  const [userData, setUserData] = useState<UserDataResults[]>([])

  const fetchData = useCallback(async () => {
    const { data } = await Axios.get<UserData>(`https://randomuser.me/api/?results=100`);

    setUserData(data.results);
  }, [])

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to asdfasfasdfasfd.
      </p>
      <div>
        <UserList
          results={userData.map((instance) => {
            return {
              email: instance.email,
              id: instance.id.name,
              name: instance.name.first
            }
          })}
        />
      </div>
    </div>
  )
}

export default App;
