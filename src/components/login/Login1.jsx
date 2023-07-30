import React from 'react';
import { signInWithGooglePopup } from '../../firebase/firebase';

const Login = () => {
  return (
    <div>
      <button className="button" onClick={signInWithGooglePopup}>
        Sign in with google (popup)
      </button>
    </div>
  )
}

export default Login;
