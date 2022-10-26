import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import FeedItem from './components/FeedItem';
import MatchPopUp from './components/MatchPopUp';
import './stylesheets/Feed.css';

const Feed = (props) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [currUserFeed, setCurrUserFeed] = useState([]);
  const [toggleMatchPopUp, setToggleMatchPopUp] = useState(false);

  const yesHandler = () => {
    const clickedUser = document.querySelector('#userName').textContent;

    fetch(`/api/${props.currUser}/${clickedUser}/yes`, {
      method: 'PATCH',
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setToggleMatchPopUp(data);
        if (!data) {
          setCurrIndex((prevState) => prevState + 1);
        }
      });
  };

  const noHandler = (e) => {
    const clickedUser = document.querySelector('#userName').textContent;
    fetch(`/api/${props.currUser}/${clickedUser}/no`, {
      method: 'PATCH',
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setCurrIndex((prevState) => prevState + 1);
        // console.log(data);
      });
  };

  useEffect(() => {
    fetch(`/api/${props.currUser}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        const { matches } = data;
        const nonRejectedUsers = props.allUsers.filter((el) => {
          if (!matches[el.username]) return true;
        });
        setCurrUserFeed(nonRejectedUsers);
        console.log(nonRejectedUsers);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='feedDiv'>
        {toggleMatchPopUp && (
          <MatchPopUp
            setToggleMatchPopUp={setToggleMatchPopUp}
            setCurrIndex={setCurrIndex}
          />
        )}
        <FeedItem user={currUserFeed[currIndex]} yes={yesHandler} no={noHandler} />
      </div>
    </div>
  );
};

export default Feed;

// return (
//   <div>
//     <nav>
//       <ul>
//         <li>
//           <Link to='/Feed'>Foodie Feed</Link>
//         </li>
//         <li>
//           <Link to='/Profile'>My Profile</Link>
//         </li>
//       </ul>
//     </nav>
//     <h3>Foodie Friends</h3>
//     <div>
//       {/* sad attempt to render FeedItem */}
//       {/* <Link to='/Profile'>
//       <button>Profile</button>
//       </Link> */}
//       {/* friends.map((friend) => (
//         <div>
//           <FeedItem key={friends.id} friend={ friend }/>
//         </div>
//       )); */}
//     </div>
//   </div>
// );

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
