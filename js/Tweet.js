import React from 'react'
import { Link } from 'react-router'
import {browserHistory} from 'react-router';


const Tweet = ({visit, tweet, onSelectTweet, onViewConversation}) => {
  var referenceMsg = <div/>;
  if(tweet.event.content.inReplyTo){
    var reference = tweet.room.findEventById(tweet.event.content.inReplyTo);
    var viewConvo;
    if(reference){
      referenceMsg = (
        <div>
          In reply to <b>{reference.event.content.body}</b> {reference.sender.userId}
        </div>
      )
      viewConvo = (
        <a onClick={() => {
          browserHistory.push("/conversation")
          onViewConversation(tweet.event.event_id)
        }} className="view-conversation"> View Conversation</a>
      )
    }
  }
  return (
    <div className="tweet">
      <div className="innerTweet">
        <p>
          <img src={tweet.avatar} className="avatar"/>
          {tweet.sender.name} . {tweet.sender.userId} . {tweet.room.name}
        </p>
        <p>{tweet.event.content.body}</p>
        {referenceMsg}
      </div>
      <div className="reply">
        {viewConvo}
        <a onClick={()=>{onSelectTweet(tweet.event.event_id)}}> Reply</a>
      </div>
    </div>
  );
}

export default Tweet
