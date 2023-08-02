import React from 'react';
import { auth } from '../../firebase/firebase';
import './Home.css';
import '../login/button.css';
import Graph from '../../d3/Graph';

const Home = ({ user }) => {
  return (
    <div className="home">
      <h3>Hello, {user.displayName}</h3>
      <img src={user.photoURL} alt="" />
      <br />
      <div className="explainer">You have successfully logged in to the app via Google</div>
      <button className="login-button" onClick={() => auth.signOut()}>
        <div className="google-btn">
          <div className="sign-out-button-text-container">
            <div className="btn-text sign-out-button-text">Sign out</div>
          </div>
        </div>
      </button>
      <br />
      <br />
      <Graph />
    </div>
  )
}

export default Home;
