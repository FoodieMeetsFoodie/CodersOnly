import React from 'react';
import '../stylesheets/Chat.css';

const Chat = (props) => {
  return (
    <div className="render-chat-box">
      <h1>
        Thundergoose: hi <br />
        testuser: how are you <br />
        Thundergoose: good, just coding a lot
        <br />
      </h1>
    </div>
  );
};

export default Chat;
