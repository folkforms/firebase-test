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
    <>
      <div className="dark padding-all-20px center">
        {user
          ? <Home user={user} />
          : <>
              <h3 className="dark center">Click either of these buttons to sign in with Google</h3>
              <Login1 />
              <br />
              <br />
              <Login2 />
              <div className="dark center padding-top-100px">
                <div><strong>NB:</strong> You will likely see a warning about the app not being verified. This is because the verification process takes days to weeks.</div>
                <div>Please click through the warnings as shown below. You can use a throwaway Gmail account if you are security conscious.</div>
              </div>
              <div className="center images-container">
                <figure>
                  <img src="./verified1.png" className="center" />
                </figure>
                <figure>
                  <img src="./verified2.png" className="center" />
                </figure>
              </div>
            </>}
      </div>
    </>
  );
}

export default App;
