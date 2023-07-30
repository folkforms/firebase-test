import React from 'react';
import { signInWithGoogleRedirect } from '../../firebase/firebase';

const Login = () => {
  return (
    <div>
      <button className="button" onClick={signInWithGoogleRedirect}>
        Sign in with google (redirect)
      </button>
    </div>
  )
}

export default Login;
