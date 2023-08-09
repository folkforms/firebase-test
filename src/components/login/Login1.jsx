import React from 'react';
import { signInWithGooglePopup } from '../../firebase/firebase';
import './button.css';

const Login = () => {
  return (
    <>
      <div className="explainer">Sign in via pop-up window:</div>
      <button className="login-button" onClick={signInWithGooglePopup}>
        <div className="google-btn">
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <span className="btn-text">Sign in with Google</span>
        </div>
      </button>
    </>
  )
}

export default Login;
