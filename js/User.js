import React from 'react'
import TweetContainer from './TweetContainer'
import {browserHistory, hashHistory} from 'react-router';
export default ({tweets}) => {
  let tweetComps = tweets.map(tweet => {
    return <TweetContainer tweet={tweet}/>
  })
  return (
    <div>
    <div><button onClick={() => hashHistory.replace("/")}>Back to main screen</button></div>
    <div>{tweetComps}</div>
    </div>
  )
}
