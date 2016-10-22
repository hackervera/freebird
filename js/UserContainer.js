import { connect } from 'react-redux'
import Conversation from './Conversation'
import {selectTweet, viewConversation} from './actions'
import React from 'react'
import _ from 'underscore'
import User from './User'
import TweetContainer from './TweetContainer'

const filterTweets = (tweets, userId) => {
  return tweets.filter(tweet => {
    console.log(userId)
    if(tweet.getSender() == userId){

      console.log(tweet.getSender())
      return true
    }
  })
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    tweets: filterTweets(state.tweets, ownProps.params.id)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    bar: (id) => {
      dispatch(updateSomething(83))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
