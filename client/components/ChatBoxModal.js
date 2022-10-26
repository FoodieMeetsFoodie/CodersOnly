import React, { useEffect, useState } from 'react';
import '../stylesheets/ModalContainer.css';
import Messages from './Messages';
import axios from 'axios';
import MessagesRecieved from './MessagesRecieved'

const ChatBoxModal = (props) => {
    const [msgs, setMsgs] = useState();
    const [pfp, setPfp] = useState();
    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        async function getMsgs() {
            // will be making await calls using axios to backend - passing down to model as messages prop
            const user1 = await axios.get(`/api/${token}`)
            axios.get(`/api/messages?user_1=${user1.data.username}&user_2=${props.name}`)
            .then(response => {
                const newArr = response.data.map(el => {
                    if(el.owner_name === user1.data.username){
                        return <Messages username={el.owner_name} message={el.message_text} pic={user1.data.url} />
                    } else {
                        return <MessagesRecieved username={el.owner_name} message={el.message_text} pic={props.pic} />
                    }
                })
                // console.log(newArr)
                setMsgs(newArr); 
            })
        }
        getMsgs()
    }, []);

    async function sendMsgs() {
        const user1 = await axios.get(`/api/${token}`)
        await axios.post('api/messages', {
            user_1: user1.data.username,
            user_2: props.name,
            messageText: document.querySelector('.forMsg').value
        })
        document.querySelector('.forMsg').value = ''
        // console.log(document.querySelector('.forMsg').value)
    }

    
    if (!props.show) return null
    return ( 
        <div className="ModalContainer">
            <h1 className="chatWith">Your chat with {props.name}</h1>
            <div className="msgDisplay">{msgs}</div>
            <input name='forChat' type='text' placeholder='Send Your Message...' className="forMsg"></input>
            <button onClick={props.close} className="closeButton">X</button>
            <button onClick={sendMsgs} className="sendButton"><span className="sendButtonSpan">Send</span></button>
        </div>
    )
}

export default ChatBoxModal;