import React, { useState } from 'react';
import './Login.css';
import SignUp from './SignUp.js';

const Login = () => {
  const [currUser, setCurrUser] = useState('');
  const [toggleSignUp, setToggleSignUp] = useState(false);
  return (
    <div>
      <SignUp />
      <div className='LoginBox'>
        <h1>RendezFood</h1>
        <input name='username' type='text' placeholder='Username'></input>
        <input name='password' type='text' placeholder='Password'></input>
        <input type='submit' value='Login' />
        <button onClick={() => setToggleSignUp(true)}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
