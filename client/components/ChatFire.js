import React, { useState, useEffect } from 'react';
import db from '../firebase';
import SendMessage from './SendMessage';
import '../stylesheets/ChatFire.css';

const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const friend = props.friend;
  const currUser = props.currUser;

  const collectionName = [friend, currUser].sort();

  useEffect(() => {
    console.log('hi');
    db.collection(`${collectionName}`)
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="fire-chat">
      {messages.map(({ id, text, createdAt }) => {
        return (
          <div key={createdAt}>
            <p>{text}</p>
          </div>
        );
      })}
      <SendMessage currUser={props.currUser} collectionName={collectionName} />
    </div>
  );
};

export default Chat;
