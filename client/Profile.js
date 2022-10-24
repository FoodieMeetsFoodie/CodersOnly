import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//need to fetch our profile data from the database to fill in our profile
const Profile = (props) => {
  //deconstructed props object
  const { username, age, location, comment, cuisine } = props;

  return (
    <div className='profile'>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/Feed'>Foodie Feed</Link>
            </li>
            <li>
              <Link to='/Profile'>My Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>My Profile</h1>
      <div className='profile-page'>
        <div className='profile-image'>
          <img />
          {/* should we have an upload pic feature if we dont actually code out edit profile? */}
          <h1>Hello I need an image pls</h1>
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
            <li className='userDetail'>Cuisine: {cuisine}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
