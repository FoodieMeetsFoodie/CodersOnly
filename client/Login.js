import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import SignUp from './SignUp.js';


const Login = () => {
  //is this state used?
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
        //are we fetching currUser data?
        console.log('this is data',data);
      });
  };
  return (
    <div>
      {/* <SignUp /> */}
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
        {/* created route to feed...will need to make a conditional route so it will only route when verified user logs in*/}
        <Link to='/HomePage'>
          <button onClick={loginHandler}>Login</button>
        </Link>
        <Link to='/SignUp'>
          <button onClick={() => setToggleSignUp(true)}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
