require("./index.scss")
import { createStore } from 'redux'
var React = require('react');
var sdk = require('matrix-react-sdk');
var TweetContainer = require('./tweetContainer')
var Conversation = require('./conversation')
var Scene = require('./scene')
var friends;
var room;
var tweets = [];

function tweetFunc(state = {}, action){
  switch(action.type){
  case 'UPDATE':
    state[action.key] = action.value
    return state
  default:
    return state
  }
}
let store = createStore(tweetFunc)
store.subscribe(() =>
  console.log(store.getState())
)
window.store = store;
window.rawSdk = require("matrix-js-sdk");
window.client = rawSdk.createClient({baseUrl: "https://matrix.org"});
window.bcrypt = require("bcryptjs");
// window.delete_rooms = function(){
//   var counter = 0;
//   setInterval(function(){
//     client.leave(client.getRooms()[counter].roomId);
//     counter += 1;
//   }, 2000)
// }

window.matrixChat = React.render(
    <TweetContainer store={store} display={"block"} />,
    document.getElementById('matrixchat')
);
