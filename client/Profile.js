import React from "react";

const Profile = (props) => {
  return (
    <div className="profile">
      <div>
        <h2>Placeholder for Navbar</h2>
      </div>
      <h1>Profile Page</h1>
      <div className="profile-page">
        <div className="profile-image">
          <img/>
          <h1>Hello I need an image pls</h1>
          <button>Edit Profile</button>
        </div>
        <div className="profile-bio">
          <div className="feedContainer">
            {/* <h3 className="userName">{userName}</h3> */}
          </div>
          <ul className="userProfile">
          <li className="userDetail">Age: </li> 
          <li className="userDetail">Location: </li>
          <li className="userDetail">Bio: </li>
          <li className="userDetail">Cuisine: </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Profile;