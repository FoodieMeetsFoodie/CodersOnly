import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import './stylesheets/Profile.css';

//need to fetch our profile data from the database to fill in our profile
const Profile = (props) => {
  //deconstructed props object
  const [profileData, setProfileData] = useState({
    username: null,
    age: null,
    location: null,
    comment: null,
    proglang: null,
  });

  useEffect(() => {
    fetch(`/api/${props.currUser}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setProfileData(data);
      });
  }, []);

  console.log(profileData);

  const { username, age, location, comment, proglang, url } = profileData;

  return (
    <div>
      <Navbar removeToken={props.removeToken} />
      <div className='profilePage'>
        <div className='profileContainer'>
          <div className='username'>
            <h1>{username}</h1>
          </div>
          <img className='profileImage' src={url} alt='profileImage' />
          <p className='userDetail'>Age: {age}</p>
          <p className='userDetail'>Location: {location}</p>
          <p className='userDetail'>Bio: {comment}</p>
          <p className='userDetail'>Programming Language: {proglang}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
