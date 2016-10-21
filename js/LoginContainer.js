import { connect } from 'react-redux'
import Login from './Login'
import {updateClient, addTweet} from './actions'
import React from 'react'
import toml from 'toml'
import rawSdk from "matrix-js-sdk";
import config from './config'
var sdkClient = rawSdk.createClient({baseUrl: config.baseUrl})
import timeline from './timeline'


const timelineFunc = (client, dispatch) => {
  return timeline(client, function(d){
    dispatch(addTweet(d))
  });
}

const mapStateToProps = (state) => {
  return {
    client: state.client,
    scrollback: state.scrollback
  }
}

const setupClient = (client, dispatch) => {
  var scrollback = false
  client.joinRoom(config.roomId).done(room => {
    //console.log(room)
    // client.scrollback(room).done(room => {
    //   //console.log(room.timeline);
    //   return room.timeline.map(event => timelineFunc(client, dispatch)(event, room));
    // });
  });
  client.on("Room.timeline", (event, room, toStartOfTimeline) => {
    console.log("timeline")
    timelineFunc(client, dispatch)(event, room);
  });
  client.on("Room", function(room){
    console.log("joined room")
    console.log(room)
  });
  client.on("sync", (state, prev, data) => {
    let rooms = client.getRooms()
    if(rooms.length > 0 && !scrollback){
      scrollback = true
      let room = client.getRoom(config.roomId)
      client.scrollback(room, 100).done(room => {
        //console.log(room.timeline);
        return room.timeline.map(event => timelineFunc(client, dispatch)(event, room));
      });
    }
    console.log([state,prev,data])
    console.log(client.getRooms())
    console.log("^ rooms")
  });
  client.startClient();
}

const mapDispatchToProps = (dispatch) => {

  return {
    loginAsGuest: (client) => {
      client.registerGuest().done((d) => {
        var newClient = rawSdk.createClient({baseUrl: config.baseUrl, accessToken: d.access_token, userId: d.user_id})
        newClient.setGuest(true)
        setupClient(newClient, dispatch)
        dispatch(updateClient(newClient))
      })
    },
    onLogin: (credentials, client) => {
      client.loginWithPassword(credentials.username, credentials.password).done(function(d){
        var newClient = rawSdk.createClient({baseUrl: config.baseUrl, accessToken: d.access_token, userId: d.user_id})
        setupClient(newClient, dispatch)
        dispatch(updateClient(newClient))
      });
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
