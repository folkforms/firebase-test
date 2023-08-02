import React from 'react';
import { auth } from '../../firebase/firebase';
import '../login/button.css';
import * as d3 from "d3";
import Test1 from '../../d3/Test1';
import Test2 from '../../d3/Test2';

const Home = ({ user }) => {
  const data = d3.ticks(-2, 2, 200).map(Math.sin);

  return (
    <div className="home">
      <h1>Hello, {user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <br />
      <br />
      <div>You have successfully logged in to the app via Google</div>
      <br />
      <button className="login-button" onClick={() => auth.signOut()}>
        <div className="google-btn">
          <div className="sign-out-button-text-container">
            <div className="btn-text sign-out-button-text">Sign out</div>
          </div>
        </div>
      </button>
      <br />
      <Test1 data={data} />
    </div>
  )
}

export default Home;
