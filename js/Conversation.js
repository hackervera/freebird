import React from 'react'
import { Link } from 'react-router'
import {browserHistory, hashHistory} from 'react-router';
import Reply from './Reply'

export default ({tweets}) => {
  var tweetComponents = tweets.map(function(tweet){
    //console.log(tweet.event.content.body)
    return <Reply tweet={tweet}/>
  })
  return (
    <div>
    <div><button onClick={() => hashHistory.replace("/")}>Back to main screen</button></div>
    <div className="replies">{tweetComponents}</div>
    </div>
  )
}
