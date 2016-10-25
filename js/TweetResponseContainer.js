import { connect } from 'react-redux'
import TweetResponse from './TweetResponse'
import {selectTweet} from './actions'
import React from 'react'
import config from './config'
import $ from 'jquery'

const mapStateToProps = (state) => {
  return {
    selectedTweet: state.selectedTweet,
    client: state.client,
    tweets: state.tweets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onReplySend: (messageText, client, selectedTweet) => {
      $("#replyText").val("")
      var data = {
        body: messageText,
        msgtype: "cat.tyler.twitter"
      }
      if(selectedTweet){
        data["inReplyTo"] = selectedTweet
      }
      client.sendMessage(config.roomId, data)
      dispatch(selectTweet(null))
    },
    onClearReply: () => {
      dispatch(selectTweet(null))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetResponse)
