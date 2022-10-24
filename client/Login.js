import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './stylesheets/Login.css';
import SignUp from './SignUp.js';

const Login = (props) => {
  //is this state used?
  const [toggleSignUp, setToggleSignUp] = useState(false);

  const loginHandler = () => {
    const id = document.getElementById('loginUsername').value;
    const pw = document.getElementById('password').value;
    console.log('id ' + id);
    console.log('pw ' + pw);

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
        if (data) {
          props.setCurrUser(id);
        }
      });
  };
  if (toggleSignUp) {
    return <SignUp setToggleSignUp={setToggleSignUp} />;
  }
  return (
    <div>
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
        <button onClick={loginHandler}>Login</button>
        {props.currUser && <Navigate to='/feed' />}
        <button onClick={() => setToggleSignUp(!toggleSignUp)}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;

/*
<Route exact path="/">
  {currUser !== '' && <Redirect to="/" /> : <Feed />}
</Route>
*/
