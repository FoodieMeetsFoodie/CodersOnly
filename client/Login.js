import React, { useState } from 'react';
import './Login.css';
import SignUp from './SignUp.js';

const Login = () => {
  const [currUser, setCurrUser] = useState('');
  const [toggleSignUp, setToggleSignUp] = useState(false);

  const loginHandler = () => {
    const id = document.getElementById('loginUsername').value;
    const pw = document.getElementById('password').value;
    console.log('id' + id);
    console.log('pw' + pw);

    fetch('/api/verification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: id, password: pw }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <SignUp />
      <div className='LoginBox'>
        <h1>RendezFood</h1>
        <input
          name='username'
          type='text'
          placeholder='Username'
          id='loginUsername'
        ></input>
        <input
          name='password'
          type='text'
          placeholder='Password'
          id='password'
        ></input>
        <button onClick={loginHandler}>Login</button>
        <button onClick={() => setToggleSignUp(true)}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
