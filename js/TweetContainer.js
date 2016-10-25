import { connect } from 'react-redux'
import Tweet from './Tweet'
import {selectTweet, viewConversation} from './actions'
import React from 'react'
import { push } from 'react-router-redux';
import $ from 'jquery'

const mapStateToProps = (state) => {
  return {
    selectedTweet: state.selectedTweet,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSelectTweet: (eventId) => {
      $("#replyText").val("")
      $("#replyText").focus()
      window.scrollTo(0,0)
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
