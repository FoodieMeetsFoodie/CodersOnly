import React from 'react';
import '../stylesheets/ModalContainer.css';

const Messages = (props) => {
    return (
        <div className="mSent">
            <p>{props.message} {props.pic}</p>
        </div>
    );
}
 
export default Messages;