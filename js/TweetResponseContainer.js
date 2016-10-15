import { connect } from 'react-redux'
import TweetResponse from './TweetResponse'
import {selectTweet} from './actions'
import React from 'react'

const mapStateToProps = (state) => {
  return {
    selectedTweet: state.selectedTweet,
    client: state.client
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    oneReplySend: (messageText) => {

    }
  }
}

export default connect(mapStateToProps)(TweetResponse)
