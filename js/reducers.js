
import toml from 'toml'
import rawSdk from "matrix-js-sdk";
var config = toml.parse(require('raw!../config.toml'))
var sdkClient = rawSdk.createClient({baseUrl: config.base_url})
const selectedTweet = (state = null, action) => {
  if(action.type == "SELECT_TWEET"){
    console.log(action)
    return action.eventId
  } else {
    return state
  }
}
const client = (state = sdkClient, action) => {
  if(action.type == "UPDATE_CLIENT") {

  }
  return state;
}


const tweets = (state = [], action) => {
  if(action.type == "ADD_TWEET") {
    state.push(action.tweet)
    return state
  } else {
    return state;
  }
}

export default {selectedTweet, tweets, client}
