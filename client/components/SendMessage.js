import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import db from '../firebase';

function SendMessage(props) {
  const [msg, setMsg] = useState('');
  const [blank, setBlank] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    setBlank('');
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
          value={blank}
          onChange={(e) => {
            let newText = e.target.value.replace(/\bshit|fuck|bitch|create +react +app| hate +javascript|hate +codesmith\b/gi, " 🧐🧐🧐🧐");
            setMsg(newText);
            setBlank(e.target.value)}}
            
          placeholder='...message'
        ></input>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default SendMessage;
