import React from 'react'
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import toml from 'toml'
import rawSdk from "matrix-js-sdk";
var config = toml.parse(require('raw!../config.toml'))
var sdkClient = rawSdk.createClient({baseUrl: config.base_url})
import timeline from './timeline'

const Tweets = ({tweets, client, onAddTweet}) => {
  client.loginWithPassword(config.username, config.password).done(function(d){
    var newClient = rawSdk.createClient({baseUrl: config.base_url, accessToken: d.access_token, userId: d.user_id})
    newClient.on("Room.timeline", timeline(newClient, function(d){
      console.log(d);
      console.log(tweets)
      onAddTweet(d);
    }));
    newClient.startClient()
  });

  var tweetComponents = tweets.map(function(tweet){
    console.log(tweet.event.content.body)
    return <Tweet tweetContent={tweet.event.content.body}/>
  })
  return <div>{tweetComponents}</div>
}
export default Tweets
