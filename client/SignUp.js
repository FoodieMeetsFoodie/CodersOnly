import React from 'react';
import './SignUp.css';

const SignUp = () => {
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
    }).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className='SignUp'>
      <button>X</button>
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
          <option value='japanese'>Japanese</option>
        </select>

        <label>Bio:</label>
        <input name='comment' type='text' placeholder='bio'></input>

        <button className='submitPost' type='submit'>
          Submit
        </button>
      </form>
      {/* <button onClick={createUserHandler}>Create Profile</button> */}
    </div>
  );
};

export default SignUp;
