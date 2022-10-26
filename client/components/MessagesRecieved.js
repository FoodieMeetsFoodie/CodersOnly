import React from 'react';
import '../stylesheets/ModalContainer.css';

const MessagesRecieved = (props) => {
    console.log(props.pic)
    return ( 
        <div className="mRecieved">
            <img src={props.pic}/><p>{props.message}</p>
        </div>
    );
}

export default MessagesRecieved;