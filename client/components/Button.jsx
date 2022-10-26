import React from 'react';

const Button = (props) => {

    return (
        <button className='myButton' onClick={props.onClick}>{props.text}</button>
    );
};

//module.exports = Button;
export default Button;