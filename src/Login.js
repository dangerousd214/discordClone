import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from "./firebase";

auth.signInWithPopup(provider).catch((error) => alert(error.message));

function Login() {
    const signIn = () => {
        // Google Login
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
      };

    return (
        <div className='login'>
            <div className='login_logo'>#Thumbnail</div>
            <Button onClick={signIn}>Sign-In</Button>
        </div>
       
    )
}

export default Login;
