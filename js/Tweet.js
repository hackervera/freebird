import React from 'react'
import { Link } from 'react-router'
import {browserHistory} from 'react-router';


const Tweet = ({visit, tweet, onSelectTweet, onViewConversation}) => {
  var referenceMsg = <div/>;
  if(tweet.event.content.inReplyTo){
    var reference = tweet.room.findEventById(tweet.event.content.inReplyTo);
    if(reference){
      referenceMsg = (
        <div>
          In reply to <b>{reference.event.content.body}</b> {reference.sender.userId}
          <a onClick={() => {
            browserHistory.push("/conversation")
            onViewConversation(tweet.event.event_id)
          }} class="view-conversation"> View Conversation</a>
        </div>
      )
    }
  }
  return (
    <div className="tweet">
      <div className="innerTweet">
        <p>
          <img src={tweet.avatar} className="avatar"/>
          {tweet.sender.name} . {tweet.sender.userId} . {tweet.room.name}</p>
        <p>{tweet.event.content.body}</p>
        {referenceMsg}
      </div>
      <div className="reply">
        <a onClick={()=>{onSelectTweet(tweet.event.event_id)}}>Reply</a>
      </div>
    </div>
  );
}

export default Tweet
