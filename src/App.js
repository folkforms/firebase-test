import React, { useEffect, useState } from 'react';
import './App.css';
import { auth } from './firebase/firebase';
import Login1 from './components/login/Login1';
import Login2 from './components/login/Login2';
import Home from './components/home/Home';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {user
          ? <Home user={user} />
          : <>
              <Login1 />
              <Login2 />
            </>}
      </header>
    </div>
  );
}

export default App;
