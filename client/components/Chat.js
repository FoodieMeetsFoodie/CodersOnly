import React, { useState, useEffect } from 'react';
import db from '../firebase';
import SendMessage from './SendMessage';

const Chat = (props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log('hi');
    db.collection('messages')
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      {messages.map(({ id, text }) => {
        return (
          <div key={id}>
            <p>{text}</p>
          </div>
        );
      })}
      <SendMessage currUser={props.currUser} />
    </div>
  );
};

export default Chat;
