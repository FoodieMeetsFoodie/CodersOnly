import React from 'react';
import '../stylesheets/ModalContainer.css';


const ChatBoxModal = (props) => {

    if (!props.show) return null
    return ( 
        <div className="ModalContainer">
            <h1 className="chatWith">Your chat with {props.name}</h1>
            <div className="msgDisplay"></div>
            <input name='forChat' type='text' placeholder='Send Your Message...' className="forMsg"></input>
            <button onClick={props.close} className="closeButton">X</button>
            <button onClick={props.close} className="sendButton"><span class="sendButtonSpan">Send</span></button>
        </div>
    )
}

export default ChatBoxModal;