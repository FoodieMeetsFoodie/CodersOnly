import React from 'react';
import '../stylesheets/MatchesItem.css';

const MatchesItem = (props) => {
  // The way each user profile will look in the feed
  if (!props.user) {
    return <p>You have no matches xD</p>;
  }
  const { username, age, location, comment, proglang, url } = props.user;
  return (
    <div className='matchesContainer'>
      <div className='username'>
        <h3 id='userName'>{username}</h3>
      </div>
      <img className='matchesImage' src={url} alt='profileImage' />
      <p className='userDetail'>Age: {age}</p>
      <p className='userDetail'>Location: {location}</p>
      <p className='userDetail'>Bio: {comment}</p>
      <p className='userDetail'>Programming Language: {proglang}</p>
      <button onClick={() => props.slideDms(username)}>slideInto{username}DMs()</button>
    </div>
  );
};

export default MatchesItem;

// const MatchesItem = (props) => {
//   //the way each user profile will look in the feed
//   if (!props.user) {
//     return <p>No matches yet. Check back later!</p>;
//   }
//   const { username, age, location, comment, proglang, url } = props.user;
//   return (
//     <div>
//       <div className='feedContainer'>
//         <h3 id='userName'>{username}</h3>
//       </div>
//       <ul className='userProfile'>
//         <img src={url} alt='profileImage' />
//         <li className='userDetail'>Age: {age}</li>
//         <li className='userDetail'>Location: {location}</li>
//         <li className='userDetail'>Bio: {comment}</li>
//         <li className='userDetail'>Programming Language: {proglang}</li>
//       </ul>
//     </div>
//   );
// };

// export default MatchesItem;import React from 'react';
