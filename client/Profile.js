import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/NavBar';

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
    <div className='profile'>
      <Navbar />
      <h1>{username}</h1>
      <div className='profile-page'>
        <div className='profile-image'>
          {/* should we have an upload pic feature if we dont actually code out edit profile? */}
          <img src={url} alt='profileImage' />
          {/* when Edit Profile is clicked it will route to UpdatProfile page */}
          <Link to='/UpdateProfile'>
            <button>Edit Profile</button>
          </Link>
        </div>
        <div className='profile-bio'>
          <div className='feedContainer'>
            {/* <h3 className="userName">{userName}</h3> */}
          </div>
          <ul className='userProfile'>
            <li className='userDetail'>Age: {age}</li>
            <li className='userDetail'>Location: {location}</li>
            <li className='userDetail'>Bio: {comment}</li>
            <li className='userDetail'>Programming Language: {proglang}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
