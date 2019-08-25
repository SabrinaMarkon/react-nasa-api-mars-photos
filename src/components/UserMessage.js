import React from 'react';
import PropTypes from 'prop-types';

export default function UserMessage (props) {
    let userMessage = props.userMessage;
    if (props.userMessage.length > 1) {
        userMessage = 'No Results Found';
    }
    return (
        <div className="user-message">{userMessage}</div>
    );
}

UserMessage.propTypes = {
    userMessage: PropTypes.string
};
