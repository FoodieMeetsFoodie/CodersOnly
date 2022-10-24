import React, { useState, useEffect } from "react";

//need to send patch request 
// stretch feature?
const UpdateProfile = () => {
  return (
    <div className="profile-bio">
      <form>
          <label for="username">Username: </label>
          <input type= "text" id="username" name ="username"></input><br></br>
          <label for="age">Age: </label>
          <input type= "text" id="age" name ="age"></input><br></br>
          <label for="location">Location: </label>
          <input type= "text" id="location" name ="location"></input><br></br>
          <label for="bio">Bio: </label>
          <input type= "text" id="bio" name ="bio"></input><br></br>
          <input type="submit" value="Update"></input><br></br>
      </form>
    </div>
  )
};


export default UpdateProfile;