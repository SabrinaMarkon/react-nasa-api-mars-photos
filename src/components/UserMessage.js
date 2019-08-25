import React from 'react';
import PropTypes from 'prop-types';

export default function UserMessage (props) {
    return (
        <div className="user-message">{props.userMessage}</div>
    );
}

UserMessage.propTypes = {
    userMessage: PropTypes.string
};
