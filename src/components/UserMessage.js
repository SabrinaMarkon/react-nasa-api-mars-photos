import React from 'react';

export default function UserMessage(props) {
  let userMessage = JSON.stringify(props.userMessage);
  // if (props.userMessage.length > 1) {
  //   userMessage = 'No Results Found';
  // }
  return (
    <div className="user-message">{userMessage}</div>
  );
}