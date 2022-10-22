import React from "react";

import FeedItem from "./FeedItem";

const Feed = () => {
  //Fetch user profiles from the database to populate our feed
  //make sure to not include our own profile
  return (
    <div>
      <h3>Foodie Friends</h3>
      <div>
        <FeedItem />
      </div>
    </div>
  )
};

export default Feed;