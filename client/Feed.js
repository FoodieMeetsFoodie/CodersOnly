import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeedItem from "./FeedItem";
import axios from 'axios';

const Feed = (props) => {
  //Comments
  //Fetch user profiles from the database to populate our feed
  //make sure to not include our own profile

  //L&P attempt: tried to fetch state here and then loop through it to pass our state to our FeedItem component
  // const [ friends, setFriends ] = useState();

  // useEffect(() => {
  //   fetch('/api/friends')
  //   .then(response => response.json())
  //   .then(({data: friends}) => {
  //     console.log('i am data', {data: friends})
  //     setFriends(friends)
  //   })
  // }, []);
  // fetch('/api/friends', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // }).then((data) => {
  //   console.log(data);
  // });

  // const createFeed = (results) => {
  //   console.log('this is friends', results)
  //   // setFriends(results);
  //   const item = [];
  //   for (let i = 0; i < results.length; i++) {
  //     item.push(<FeedItem key={i} friends={ results[i] }/>)
  //   }
    // return item;
  
  // console.log(friends)

  return (
    <div>
      <nav>
          <ul>
            <li><Link to='/Feed'>Foodie Feed</Link></li>
            <li><Link to='/Profile'>My Profile</Link></li>
          </ul>
      </nav>
      <h3>Foodie Friends</h3>
      <div>
        {/* sad attempt to render FeedItem */}
        {/* <Link to='/Profile'>
        <button>Profile</button>
        </Link> */}
        {/* friends.map((friend) => (
          <div>
            <FeedItem key={friends.id} friend={ friend }/>
          </div>
        )); */}
      </div>
    </div>
  )
};

export default Feed;