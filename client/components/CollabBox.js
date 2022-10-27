import React from 'react';
import '../stylesheets/CollabBox.css';
import Chat from './ChatFire';
import CodingCollab from './CodingCollab';
import Prompts from './Prompts';
import SendMessage from './SendMessage';
import { useEffect } from 'react';
import db from '../firebase';
import { useState } from 'react';

const CollabBox = (props) => {
  const [messages, setMessages] = useState([]);
  const friend = props.friend;
  const currUser = props.currUser;

  const collectionName = [friend, currUser].sort();

  useEffect(() => {
    console.log('hi');
    db.collection(`${collectionName}`)
      .orderBy('createdAt', 'desc')
      .limit(8)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return props.trigger ? (
    <section className='collab-box-container'>
      <div className='chat-box'>
        <div className='chatTitle'>
          <h1>
            Chat with your Match and work on some practice problems together
          </h1>
          <button
            className='close-btn'
            onClick={() => props.setButtonPopup(false)}
          >
            X
          </button>
        </div>
        <div className='chat-container'>
          <Prompts />
          <div className='msgAndCoding'>
            <CodingCollab />
            <div className='chatAndMsg'>
              <Chat
                currUser={props.currUser}
                friend={props.friend}
                messages={messages}
              />
              <SendMessage
                currUser={props.currUser}
                collectionName={collectionName}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    ''
  );
};

export default CollabBox;
