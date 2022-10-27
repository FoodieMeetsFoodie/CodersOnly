import React from 'react';

const SentMessage = (props) => {
    return (
        <div className = 'sentMessage'>
            <p>{props.user}</p>
            <p>{props.time}</p>
            <p>{props.message}</p>
        </div>
    )
}

export default SentMessage;