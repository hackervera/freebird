import React from 'react'
import Tweet from './Tweet'
import TweetResponseContainer from './TweetResponseContainer'
import TweetContainer from './TweetContainer'

const Tweets = ({tweets, client, onAddTweet}) => {

  //console.log("LOADING")
  //console.log(tweets)
  var tweetComponents;
  if(tweets.length == 0 && client.credentials.userId){
    tweetComponents = <div>Loading data...</div>
  } else {
    tweetComponents = tweets.map(function(tweet){
      //console.log(tweet.event.content.body)
      return <TweetContainer tweet={tweet}/>
    }).reverse()
  }
  return (
    <div>
    <div><TweetResponseContainer/></div>
    <div>{tweetComponents}</div>
    </div>
  )
}
export default Tweets
