import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeedItem from "./FeedItem";
import axios from 'axios';

const Feed = (props) => {
  //Fetch user profiles from the database to populate our feed
  //make sure to not include our own profile
  const [ friends, setFriends ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios('/api/friends');
      console.log('this is my data', results.data);
      // setFriends(results.data);
      createFeed(results.data);
    };
    fetchData();
  }, []);

  // fetch('/api/friends', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // }).then((data) => {
  //   console.log(data);
  // });

  const createFeed = (results) => {
    console.log('this is friends', results)
    // setFriends(results);
    const item = [];
    for (let i = 0; i < results.length; i++) {
      item.push(<FeedItem key={i} friends={ results[i] }/>)
    }
    return item;
  }
  // console.log(friends)

  return (
    <div>
      <h3>Foodie Friends</h3>
      <div>
        <Link to='/Profile'>
        <button>Profile</button>
        </Link>
        { item }
      </div>
    </div>
  )
};

export default Feed;