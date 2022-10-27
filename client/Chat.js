import React, { useEffect, useState } from 'react';

const Chat = (props) => {
    fetch('/api/chat/${props.user}/${props.matchUser}')
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            messages = [];
            data.forEach((element) => {
                if (element.sender === props.user) {
                    messages.push(<SentMessage/>)
                } else {
                    messages.push(<ReceivedMessage/>)
                }
            })
        })
    return (
        <div>
            <h1 className='chat'>Chat</h1>
            <button onClick={() => {} }>
                Back to Login
            </button>
            {messages}
            <SendMessage />
        </div>
    )
}





//when user clicks, socket event is emitted to backend
//server receives socket event to "open" room, this will be the messages "convo" component Chat.js
