import React from 'react';
import '../stylesheets/MatchPopUp.css';

const MatchPopUp = (props) => {
  return (
    <button
      className='matchPopUp'
      onClick={() => {
        props.setToggleMatchPopUp(false);
        props.setCurrIndex((prevState) => prevState + 1);
      }}
    >
      You Matched!
    </button>
  );
};

export default MatchPopUp;
