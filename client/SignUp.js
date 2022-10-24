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

    const cuisineType = document.querySelector('.CuisineDropDown').value;
    userObj.cuisine = cuisineType;
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
        <input name='age' type='number' placeholder='Age'></input>

        <label>State:</label>
        <input name='location' type='text' placeholder='State'></input>

        <label>Cuisine:</label>
        <select
          className='CuisineDropDown'
          name='cuisine'
          type='text'
          placeholder='Cuisine'
        >
          <option value='american'>American</option>
          <option value='chinese'>Chinese</option>
          <option value='italian'>Italian</option>
          <option value='indian'>Indian</option>
          <option value='korean'>Korean</option>
        </select>

        <label>Bio:</label>
        <input name='comment' type='text' placeholder='bio'></input>
      </form>
      <button onClick={createUserHandler}>Create Profile</button>
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
