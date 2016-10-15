import { connect } from 'react-redux'
import Login from './Login'
import {updateClient, addTweet} from './actions'
import React from 'react'
import toml from 'toml'
import rawSdk from "matrix-js-sdk";
import config from './config'
var sdkClient = rawSdk.createClient({baseUrl: config.baseUrl})
import timeline from './timeline'


const mapStateToProps = (state) => {
  return {
    client: state.client
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (credentials, client) => {
      client.loginWithPassword(credentials.username, credentials.password).done(function(d){
        var newClient = rawSdk.createClient({baseUrl: config.baseUrl, accessToken: d.access_token, userId: d.user_id})
        newClient.on("Room.timeline", timeline(newClient, function(d){
          dispatch(addTweet(d))
        }));
        newClient.startClient()
        newClient.joinRoom(config.roomId)
        dispatch(updateClient(newClient))
      });
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
