import React from 'react'
import Tweet from './Tweet'
import TweetResponseContainer from './TweetResponseContainer'
import TweetContainer from './TweetContainer'
import _ from 'underscore'
const Tweets = ({tweets, client, onAddTweet}) => {

  //console.log("LOADING")
  //console.log(tweets)
  var tweetComponents;
  if(tweets.length == 0 && client.credentials.userId){
    tweetComponents = <div>Loading data...</div>
  } else {
    tweets = _.sortBy(tweets, (tweet) => {
      return tweet.event.origin_server_ts
    }).reverse()
    tweets = _.uniq(tweets,(tweet) => {
      return tweet.event.event_id
    })

    tweetComponents = tweets.map(function(tweet){
      //console.log(tweet.event.content.body)
      return <TweetContainer tweet={tweet}/>
    })

  }
  return (
    <div className="tweets">
    <div><TweetResponseContainer/></div>
    <div>{tweetComponents}</div>
    </div>
  )
}
export default Tweets
