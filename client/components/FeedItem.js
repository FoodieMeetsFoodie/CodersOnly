import React from 'react';
import '../stylesheets/FeedItem.css';

const FeedItem = (props) => {
  //the way each user profile will look in the feed
  if (!props.user) {
    return <p>No more users in your area</p>;
  }
  const { username, age, location, comment, proglang, url } = props.user;
  return (
    <div className='feedContainer'>
      <div className='username'>
        <h3 id='userName'>{username}</h3>
      </div>
      <img className='feedImage' src={url} alt='profileImage' />
      <p className='userDetail'>Age: {age}</p>
      <p className='userDetail'>Location: {location}</p>
      <p className='userDetail'>Bio: {comment}</p>
      <p className='userDetail'>Programming Language: {proglang}</p>
    </div>
  );
};

export default FeedItem;
