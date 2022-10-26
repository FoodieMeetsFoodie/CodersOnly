import React, { useEffect, useState } from 'react';
import '../stylesheets/ModalContainer.css';
import Messages from './Messages';
import axios from 'axios';

const ChatBoxModal = (props) => {
    const [msgs, setMsgs] = useState();

    useEffect(() => {
        async function getMsgs() {
            // will be making await calls using axios to backend - passing down to model as messages prop
            axios.get('http://localhost:8080/api/messages/dummymessage')
            .then(response => {
                const newArr = response.data.map(el => {
                    return <Messages message={el.message} />
                })
                // console.log(newArr)
                setMsgs(newArr); 
            })
        }
        getMsgs()
    }, []);

    if (!props.show) return null
    return ( 
        <div className="ModalContainer">
            <h1 className="chatWith">Your chat with {props.name}</h1>
            <div className="msgDisplay">{msgs}</div>
            <input name='forChat' type='text' placeholder='Send Your Message...' className="forMsg"></input>
            <button onClick={props.close} className="closeButton">X</button>
            <button onClick={props.close} className="sendButton"><span className="sendButtonSpan">Send</span></button>
        </div>
    )
}

export default ChatBoxModal;