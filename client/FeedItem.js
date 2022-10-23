import React from "react";

const FeedItem = (props) => {
  //the way each user profile will look in the feed
  const {
    username, age, location, comment, cuisine
  } = props;
  return (
    <div>
      <div className="feedContainer">
        <h3 className="userName">{username}</h3>
      </div>
      <ul className="userProfile">
        <li className="userDetail">Age: {age}</li>
        <li className="userDetail">Location: {location}</li>
        <li className="userDetail">Bio: {comment}</li>
        <li className="userDetail">Cuisine: {cuisine}</li>
      </ul>
      <div>
        <button>Heart</button>
        <button>X</button>
      </div>
    </div>
  )
};

export default FeedItem;