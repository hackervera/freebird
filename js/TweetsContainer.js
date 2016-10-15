import { connect } from 'react-redux'
import Tweets from './Tweets'
import {addTweet} from './actions'
import React from 'react'


const mapStateToProps = (state) => {
  //console.log(state)
  return {
    tweets: state.tweets,
    client: state.client
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddTweet: (tweet) => {
      dispatch(addTweet(tweet))
    }
  }
}

const TweetsContainer = connect(mapStateToProps, mapDispatchToProps)(Tweets)
export default TweetsContainer
