import React from 'react';
import '../stylesheets/CollabBox.css';
import Chat from './Chat';
import CodingCollab from './CodingCollab';

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
          <CodingCollab />
          {/* <Chat /> */}
        </div>
        <form id="chat-textbox">
          <input className="chat-input-box" label="Type your chat"></input>
          <button className="chat-btn" type="submit">
            Send Chat
          </button>
        </form>
      </div>
    </section>
  ) : (
    ''
  );
};

export default CollabBox;
