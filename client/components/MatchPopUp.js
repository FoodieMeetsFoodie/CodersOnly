import React from 'react';

const MatchPopUp = (props) => {
  return (
    <div>
      <p>You Matched!!</p>
      <button
        onClick={() => {
          props.setToggleMatchPopUp(false);
        }}
      >
        close
      </button>
    </div>
  );
};

export default MatchPopUp;
