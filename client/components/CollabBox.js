import React from 'react';
import '../stylesheets/CollabBox.css';
import Chat from './ChatFire';
import CodingCollab from './CodingCollab';
import Prompts from './Prompts';

const CollabBox = (props) => {
  return props.trigger ? (
    <section className="collab-box-container">
      <div className="chat-box">
        <button
          className="close-btn"
          onClick={() => props.setButtonPopup(false)}
        >
          X
        </button>
        <div className="chat-container">
          <Prompts />
          <CodingCollab />
          <Chat currUser={props.currUser} friend={props.friend} />
        </div>
      </div>
    </section>
  ) : (
    ''
  );
};

export default CollabBox;
