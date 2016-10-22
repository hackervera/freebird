import { connect } from 'react-redux'
import Conversation from './Conversation'
import {selectTweet, viewConversation} from './actions'
import {browserHistory, hashHistory} from 'react-router';
import React from 'react'
import _ from 'underscore'
import TweetContainer from './TweetContainer'

const conversationTweet = (tweets, conversationId) => {
  return _.find(tweets, (tweet) => {
    return tweet.event.event_id == conversationId
  })
}

const nextTweet = (tweet, references = [tweet]) => {
  var reply = tweet.event.content.inReplyTo
  if(reply){
    var reference = tweet.room.findEventById(tweet.event.content.inReplyTo);
    if(reference){
      console.log("found reference")
      return nextTweet(reference, [...references, reference])
    } else {
      console.log("reference not found")
      return references
    }
  } else {
    console.log("no reply found")
    return references
  }
}

const mapStateToProps = (state, ownProps) => {
  var tweet = conversationTweet(state.tweets, ownProps.params.id)
  nextTweet(tweet)
  return {
    conversationTweet: state.conversationTweet,
    tweets: nextTweet(tweet)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSelectTweet: (eventId) => {
      dispatch(selectTweet(eventId))
    },
    onViewConversation: (eventId) => {
      dispatch(viewConversation(eventId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Conversation)
