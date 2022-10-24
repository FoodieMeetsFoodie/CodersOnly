import React from 'react';

const FeedItem = (props) => {
  //the way each user profile will look in the feed
  if (!props.user) {
    return <p>No more users in your area</p>;
  }
  const { username, age, location, comment, cuisine } = props.user;
  return (
    <div>
      <div className='feedContainer'>
        <h3 id='userName'>{username}</h3>
      </div>
      <ul className='userProfile'>
        <li className='userDetail'>Age: {age}</li>
        <li className='userDetail'>Location: {location}</li>
        <li className='userDetail'>Bio: {comment}</li>
        <li className='userDetail'>Cuisine: {cuisine}</li>
      </ul>
    </div>
  );
};

export default FeedItem;
