import { connect } from 'react-redux'
import Tweet from './Tweet'
import {selectTweet} from './actions'
import React from 'react'


const mapStateToProps = (state) => {
  return {
    selectedTweet: state.selectedTweet,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSelectTweet: (eventId) => {
      dispatch(selectTweet(eventId))
    }
  }
}
const TweetContainer = connect(mapStateToProps, mapDispatchToProps)(Tweet)
export default TweetContainer
