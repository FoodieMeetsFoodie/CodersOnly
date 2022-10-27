import React from 'react';

const ReceivedMessage = (props) => {
    return (
        <div className = 'receivedMessage'>
            <p>{props.user}</p>
            <p>{props.time}</p>
            <p>{props.message}</p>
        </div>
    )
}

export default ReceivedMessage;