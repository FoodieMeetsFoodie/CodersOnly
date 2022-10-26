import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './stylesheets/Login.css';
import SignUp from './SignUp.js';
import thundergoose from './assets/thundergoose.png';

const Login = (props) => {
  //is this state used?
  const [toggleSignUp, setToggleSignUp] = useState(false);
  const [toggleWrongLogin, setToggleWrongLogin] = useState(false);

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
        } else {
          setToggleWrongLogin(true);
        }
      });
  };
  if (toggleSignUp) {
    return <SignUp setToggleSignUp={setToggleSignUp} />;
  }
  return (
    <div className='LoginInDiv'>
      <div className='LoginBox'>
        <div className='LoginTitle'>
          <img className='loginImage' src={thundergoose} alt='starmole' />
          <h1 className='title'>CodersOnly</h1>
        </div>
        <input
          className='id'
          name='username'
          type='text'
          placeholder='Username'
          id='loginUsername'
        ></input>
        <input
          className='password'
          name='password'
          type='password'
          placeholder='Password'
          id='password'
        ></input>
        <div className='LoginScreenButtons'>
          <button className='loginButtons' onClick={loginHandler}>
            Login
          </button>
          {props.currUser && <Navigate to='/feed' />}
          <button
            className='loginButtons'
            onClick={() => setToggleSignUp(!toggleSignUp)}
          >
            Sign Up
          </button>
        </div>
        {toggleWrongLogin && (
          <p className='wrongLogin'>WRONG ID OR PW PLEASE TRY AGAIN!</p>
        )}
      </div>
    </div>
  );
};

export default Login;

{
  /* created route to feed...will need to make a conditional route so it will only route when verified user logs in*/
}
/*
<Route exact path="/">
  {currUser !== '' && <Redirect to="/" /> : <Feed />}
</Route>
*/
