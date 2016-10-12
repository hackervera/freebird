var React = require('react');


module.exports = React.createClass({
    reply: function(ev){
      console.log(ev)
      this.props.store.dispatch({type: 'UPDATE', key: "tweetData", value: this.props.tweetData})
    },
    viewConvo: function(){
      this.props.store.dispatch({type: 'UPDATE', key: "convoData", value: this.props.tweetData})
    },
    waitForData: function(count){
      var self = this;
      setTimeout(function(){
        var room = client.getRoom(self.props.tweetData.room.roomId);
        var event = room.findEventById(self.props.tweetData.getContent().inReplyTo);
        if(event){
          self.setState({event: event});
        } else {
          console.log("waiting for data: " + self.props.tweetData.getContent().inReplyTo);
          if (count < 5){ self.waitForData(count + 1) }
        }
      }, 1000);
    },
    render: function() {
      var replyString;
      if(this.props.tweetData.getContent().inReplyTo){
        this.waitForData(0)
        if(this.state && this.state.event){
          replyString = <p>In reply to <b>{this.state.event.getContent().body}</b> {this.state.event.getSender()}
          <span className="view-convo" onClick={this.viewConvo}>[view conversation]</span></p>
        }
      }
        return (
          <div className="tweet">
            <div className="innerTweet">
              <p>
                <img src={this.props.tweetData.avatar}/>
                {this.props.tweetData.sender.name} . {this.props.tweetData.sender.userId} . {this.props.tweetData.room.name}</p>
              <p>{this.props.tweetData.getContent().body}</p>
              {replyString}
            </div>
            <div className="reply">
              <a onClick={this.reply}>Reply</a>
            </div>
          </div>
        );
    }
});
