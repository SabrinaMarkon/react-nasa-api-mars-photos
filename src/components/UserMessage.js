import React from 'react';

export default function UserMessage(props) {
  let userMessage = props.userMessage;
  if (typeof userMessage === 'object') {
    userMessage = props.userMessage.message;
  }
  return (
    <div className="user-message">{userMessage}</div>
  );
}