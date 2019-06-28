import React from 'react';

export default function UserMessage(props) {
  return (
    <div className="user-message">{props.userMessage[0]}</div>
  );
}