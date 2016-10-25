import React from 'react'
export default ({tweet}) => {
  return (
    <div className="reply-tweet">
      <div>
        <p>
          <img src={tweet.avatar} className="avatar"/>
          {tweet.sender.name} . {tweet.sender.userId} . {tweet.room && tweet.room.name}</p>
        <p>{tweet.event.content.body}</p>
      </div>
    </div>
  );
}
