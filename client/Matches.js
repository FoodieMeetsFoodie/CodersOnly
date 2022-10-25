import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MatchesItem from './components/MatchesItem';
import Navbar from './components/NavBar';
import './stylesheets/Matches.css';
const Matches = (props) => {
  const [userMatches, setUserMatches] = useState([]);

  useEffect(() => {
    fetch(`/api/${props.currUser}`)
      .then((data) => data.json())
      .then((data) => {
        //props.allUser contains all user profiles, el is another users profile
        const matchesArr = props.allUsers.filter((el) => {
          if (
            data.matches[el.username] === 'yes' &&
            el.matches[props.currUser] === 'yes'
          )
            return true;
        });
        const matchesItemsArr = matchesArr.map((el) => {
          return <MatchesItem key={el._id} user={el} />;
        });

        setUserMatches(matchesItemsArr);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className='MyMatches'>My Matches</h1>
      <div className='MainMatchesContainer'>{userMatches}</div>
    </div>
  );
};

export default Matches;
