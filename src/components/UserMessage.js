import React from 'react';
import PropTypes from 'prop-types';

export default function UserMessage (props) {
    let userMessage = props.userMessage;
    if (typeof userMessage === 'object') {
        userMessage = props.userMessage.message;
    }
    return (
        <div className="user-message">{userMessage}</div>
    );
}

UserMessage.propTypes = {
    userMessage: PropTypes.string
};
