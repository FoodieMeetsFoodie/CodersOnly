import React, { useState, useEffect } from "react";
import axios from "axios";
import '../stylesheets/Profile.css';

//will send put request
// ez feature
const UpdateProfile = (props) => {
  console.log(props.user)

  //need function for put request - have props.user params, but need to get form params
  async function updateUserHandler(e){
    e.preventDefault();
    const userObj = {};
    const inputs = document
      .querySelectorAll('.updateForm input')
      .forEach((el) => {
        userObj[el.name] = el.value;
      });
    const langType = document.querySelector('.proglangDropDown').value;
    userObj.proglang = langType;
    // console.log(userObj)
    await axios.put(`/api/users/${props.user.username}`, {
      age: userObj.age,
      comment: userObj.bio,
      proglang: userObj.proglang,
      url: userObj.url,
      location: userObj.location
    })
    props.update({
      age: userObj.age,
      location: userObj.location,
      comment: userObj.bio,
      proglang: userObj.proglang,
      url: userObj.url
    })
    props.hide(!props.curr)
  }

  return (
    <div>
      <form className='updateForm' onSubmit={updateUserHandler}>
      <div className="profile-bio">
          <label htmlFor="age">Age: </label>
          <input type="text" id="age" name ="age" defaultValue={props.user.age}></input><br></br>
          <label htmlFor="location">Location: </label>
          <input type="text" id="location" name ="location" defaultValue={props.user.location}></input><br></br>
          <div className="forproglang">
            <label htmlFor="proglang">Programming Language: </label>
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
          </div>
          <label htmlFor="bio">Bio: </label>
          <input type="text" id="bio" name ="bio" defaultValue={props.user.comment}></input><br></br>
          <label htmlFor="url">Profile Pic: </label>
          <input type="text" id="url" name ="url" defaultValue={props.user.url}></input><br></br>
          <button onClick={updateUserHandler}>Update</button><br></br>
          </div>
      </form>
    </div>
  )
};


export default UpdateProfile;