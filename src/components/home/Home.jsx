import React from 'react';
import { auth } from '../../firebase/firebase';
import '../login/button.css';

const Home = ({ user }) => {
  return (
    <div className="home">
      <h1>Hello, {user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <br />
      <br />
      <button className="login-button" onClick={() => auth.signOut()}>
        <div className="google-btn">
          <div className="sign-out-button-text-container">
            <div className="btn-text sign-out-button-text">Sign out</div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default Home;
