import React from 'react';

export default function UserMessage(props) {
  let userMessage = JSON.stringify(props.userMessage);
  return (
    <div className="user-message">{userMessage}</div>
  );
}