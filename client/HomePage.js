import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

//creating a base homepage component
//once logged in user will be routed to this page
//this page will have a navbar that the user can use to switch from feed to their profile page
//im going to try sending a GET request for all user profile info from the db, so i can prop drill it to feed and profile pages

const HomePage = () => {
  //declare state: want to access all user data here
  const [ friends, setFriends ] = useState();

  //fetching allUser data from the backend to store in our state so we can propdrill down to other components (Feed)
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios('/api/friends');
      console.log('this is my data', results.data);
      setFriends(results.data);
      // createFeed(results.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {/* nav bar: doesnt include welcome page*/}
        <nav>
          <ul>
            <li><Link to='/Feed'>Foodie Feed</Link></li>
            <li><Link to='/Profile'>My Profile</Link></li>
          </ul>
        </nav>
      </div>
      <div>
        {/* change username to be the actual username */}
        <h2>Welcome username</h2>
        <h4>You succesfully logged in~</h4>
        {/* add image */}
      </div>     
    </div>
  )
};

export default HomePage;