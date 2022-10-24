import React from 'react';
import './stylesheets/SignUp.css';
import { Link } from 'react';

//fetch request ---->>>>
const SignUp = (props) => {
  const createUserHandler = (e) => {
    e.preventDefault();
    const userObj = {};
    const inputs = document
      .querySelectorAll('.SignUpForm input')
      .forEach((el) => {
        userObj[el.name] = el.value;
      });

    const langType = document.querySelector('.proglangDropDown').value;
    userObj.proglang = langType;
    userObj.matches = {};
    userObj.matches[userObj.username] = 'no';

    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        props.setToggleSignUp(false);
      });
  };

  return (
    <div className='SignUpDiv'>
      <div className='SignUp'>
        <button onClick={() => props.setToggleSignUp(false)}>
          Back to Login
        </button>
        <form className='SignUpForm' onSubmit={createUserHandler}>
          <label>Username:</label>
          <input name='username' type='text' placeholder='Username'></input>

          <label>Password:</label>
          <input name='password' type='password' placeholder='Password'></input>

          <label>Age:</label>
          <input name='age' type='number' placeholder='Age' min='1'></input>

          <label>State:</label>
          <input name='location' type='text' placeholder='State'></input>

          <label>Photo url:</label>
          <input name='url' type='text' placeholder='url'></input>

          <label>Programming Language:</label>
          <select
            className='proglangDropDown'
            name='proglang'
            type='text'
            placeholder='Programming Language'
          >
            <option value='javascript'>JavaScript</option>
            <option value='java'>Java</option>
            <option value='python'>Python</option>
            <option value='C++'>C++</option>
            <option value='C#'>C#</option>
          </select>

          <label>Bio:</label>
          <input name='comment' type='text' placeholder='bio'></input>
        </form>
        <button onClick={createUserHandler}>Create Profile</button>
      </div>
    </div>
  );
};

export default SignUp;

// Old button router
// {/* linking submit button back to login page */}
// {/* this breaks for some reason when we uncomment the link component :( */}
// {/* <Link to='/'> */}
// <button
//   onClick={() => props.setToggleSignUp(false)}
//   className='submitPost'
// >
//   Signup
// </button>
// {/* </Link> */}
