var React = require('react');
var Tweet = require('./tweet');
var NewTweet = require('./newTweet');
var Friends = require('./friends');
var Conversation = require('./conversation')
var toml = require('toml')

var React = require('react');
var sdk = require('matrix-react-sdk');
var friends;
var room;
var tweets = [];

var config = toml.parse(require('raw!../config.toml'))

window.rawSdk = require("matrix-js-sdk");
window.client = rawSdk.createClient({baseUrl: config.base_url})

module.exports = React.createClass({
    getInitialState: function(){
      return {tweets: []};
    },
    containerDisplay: function(){
      var display = this.props.display;
      if(this.state && this.state.display){
        display = this.state.display
      }
      return display;
    },
    componentDidMount: function(){
      var self = this;
      this.props.store.subscribe(function(){
        self.setState({display: self.props.store.getState().display});
        self.setState({tweet: self.props.store.getState().convoData});
      })
      console.log("mounted");
      var self = this;
      if(!localStorage["client"]){
        client.loginWithPassword(config.username, config.password).done(function(d){
          client = rawSdk.createClient({baseUrl: config.base_url, accessToken: d.access_token, userId: d.user_id})

          //localStorage["client"] = JSON.stringify(client);
          window.creds = d
          client.on("Room.timeline", function(event, room, toStartOfTimeline) {
            friends = client.getAccountData("cat.tyler.friends").event.content.friends
            if (toStartOfTimeline) {
                return; // don't print paginated results
            }
            if (event.getType() !== "m.room.message") {
                //console.log(event.event.content);
                //console.log(event.event.type);

                //console.log(event.event.content)
                return; // only print messages

            }
            console.log(event.getSender());
            if(friends.indexOf(event.getSender()) != -1){
                console.log(event)
                client.getProfileInfo(event.sender.userId).done(function(profile){
                  event["avatar"] = client.mxcUrlToHttp(profile.avatar_url);
                  event["room"] = room;
                  tweets.push(event)
                  self.setState({tweets: tweets})
                })
                console.log(
                //the room name will update with m.room.name events automatically
                "(%s) %s :: %s", room.name, event.getSender(), JSON.stringify(event.getContent())
              );
            }
          });
          client.startClient();
        })
      } else {
        console.log("fail")
        client = JSON.parse(localStorage["client"]);
      }
    },
    render: function() {
      var self = this;
      var propTweets = this.state.tweets.map(function(tweet){
        return <Tweet tweetData={tweet} store={self.props.store} />
      })
      var conversation;
      if(this.state.tweet){
        conversation = <Conversation tweet={this.state.tweet} store={this.props.store} />
      }
      return (
        <div>
          <div>
            {conversation}
          </div>
          <div style={{display: this.containerDisplay()}}>
            <div><NewTweet store={this.props.store} /></div>
            {propTweets.reverse()}
          </div>
        </div>
      )
    }
});
