import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import db from '../firebase';
import '../stylesheets/ChatFire.css';

function SendMessage(props) {
  const [msg, setMsg] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const currUser = props.currUser;

    await db.collection(`${props.collectionName}`).add({
      text: `${currUser}: ${msg}`,
      id: currUser,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg('');
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          className="msg-input"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="...type your message"
        ></input>
        <button className="msg-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
