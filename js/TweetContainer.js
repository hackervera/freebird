import { connect } from 'react-redux'
import Tweet from './Tweet'
import {selectTweet, viewConversation} from './actions'
import React from 'react'
import { push } from 'react-router-redux';


const mapStateToProps = (state) => {
  return {
    selectedTweet: state.selectedTweet,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSelectTweet: (eventId) => {
      dispatch(selectTweet(eventId))
    },
    onViewConversation: (eventId) => {
      dispatch(viewConversation(eventId))
    },
    visit: (link) => {
      dispatch(push(link))
    }
  }
}
const TweetContainer = connect(mapStateToProps, mapDispatchToProps)(Tweet)
export default TweetContainer
