import React from 'react';

function Message ({text}) {
  if (!text){
    return null
  }
    return (
      <div className="message">
       {text}
      </div>
    )
  }
export default Message;
