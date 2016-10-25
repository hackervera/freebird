import rawSdk from "matrix-js-sdk";
import config from './config'
var sdkClient = rawSdk.createClient({baseUrl: config.baseUrl})

const selectedTweet = (state = null, action) => {
  if(action.type == "SELECT_TWEET"){
    //console.log(action)
    return action.eventId
  } else {
    return state
  }
}

const conversationId = (state = null, action) => {
  if(action.type == "VIEW_CONVERSATION"){
    return action.eventId
  }
  return state
}

const client = (state = sdkClient, action) => {
  if(action.type == "UPDATE_CLIENT") {
    return action.client
  }
  return state;
}

const credentials = (state = null, action) => {
  if(action.type == "LOGIN"){
    return state.credentials
  }
  return state
}

const scrollback = (state = false, action) => {
  if(action.type == "UPDATE_SCROLLBACK"){
    return true
  }
  return state
}

const tweets = (state = [], action) => {
  if(action.type == "ADD_TWEET") {
    //console.log("UPDATING STATE")
    return [...state, action.tweet]
  } else {
    return state;
  }
}

export default {selectedTweet, conversationId, client, tweets, scrollback}
