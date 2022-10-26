import React from 'react';
import '../stylesheets/ModalContainer.css';

const Messages = (props) => {
    return (
        <div className="mSent">
            <p>{props.message}</p><img src={props.pic}/>
        </div>
    );
}
 
export default Messages;