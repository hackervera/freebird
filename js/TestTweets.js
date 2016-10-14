import React from 'react'
import TweetContainer from './TweetContainer'
import TweetResponseContainer from './TweetResponseContainer'
const TestTweets = () => (
  <div>
    <TweetContainer userName={"Fred"} tweetId={88}/>
    <TweetResponseContainer/>
  </div>
)
export default TestTweets
