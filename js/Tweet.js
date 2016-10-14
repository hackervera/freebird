import React from 'react'
import { Link } from 'react-router'
import {browserHistory} from 'react-router';

const Tweet = ({
  avatar,
  userName,
  userId,
  selectedTweet,
  selectedTweetSender,
  onSelectTweet,
  tweetId,
  roomName,
  tweetContent,
  browserHistory
}) => {
  console.log(browserHistory);
  return (
    <div className="tweet">
      <div className="innerTweet">
        <p>
          <img src={avatar}/>
          {userName} . {userId} . {roomName}</p>
        <p>{tweetContent}</p>
        <p>{selectedTweet}</p>
      </div>
      <div className="reply">
        <a onClick={()=>{onSelectTweet(userName)}}>Reply</a>
      </div>
    </div>
  );
}

export default Tweet
