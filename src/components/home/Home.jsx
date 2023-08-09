import React from 'react';
import { auth } from '../../firebase/firebase';
import './Home.css';
import '../login/button.css';

const Home = ({ user }) => {
  return (
    <div className="home">
      <h2>Hello, {user.displayName}</h2>
      <div className="padding-bottom-10px">Your profile photo is:</div>
      <img src={user.photoURL} alt="" />
      <br />
      <div className="explainer padding-top-10px">You have successfully logged in to the app via Google</div>
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
