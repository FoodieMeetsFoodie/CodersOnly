import React from 'react';
import './SignUp.css';

const SignUp = () => {
  // const createUserHandler = async () => {
  //   const request = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify,
  //   };
  // };

  return (
    <div className='SignUp'>
      <button>X</button>
      <form method='POST' action='/api' className='Signup'>
        <div className='SignUpField'>
          <label>Username:</label>
          <input name='username' type='text' placeholder='Username'></input>
        </div>
        <div className='SignUpField'>
          <label>Password:</label>
          <input name='password' type='password' placeholder='Password'></input>
        </div>
        <div className='SignUpField'>
          <label>Age:</label>
          <input name='age' type='number' placeholder='Age'></input>
        </div>
        <div className='SignUpField'>
          <label>State:</label>
          <input name='location' type='text' placeholder='State'></input>
        </div>
        <div className='SignUpField'>
          <label>Cuisine:</label>
          <select name='cuisine' type='text' placeholder='Cuisine'>
            <option value='american'>American</option>
            <option value='chinese'>Chinese</option>
            <option value='italian'>Italian</option>
            <option value='indian'>Indian</option>
            <option value='japanese'>Japanese</option>
          </select>
        </div>
        <div className='SignUpField'>
          <label>Bio:</label>
          <input name='comment' type='text' placeholder='bio'></input>
        </div>
        <button className='submitPost' type='submit'>
          Submit
        </button>
      </form>
      {/* <button onClick={createUserHandler}>Create Profile</button> */}
    </div>
  );
};

export default SignUp;
