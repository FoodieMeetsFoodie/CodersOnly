import React, { useState, useEffect } from 'react';

import '../stylesheets/ChatFire.css';

const Chat = (props) => {
  return (
    <div className='fire-chat'>
      {props.messages.map(({ id, text, createdAt }) => {
        return (
          <div key={createdAt}>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chat;
