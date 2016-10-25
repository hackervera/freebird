var React = require('react');


module.exports = React.createClass({
  componentDidMount: function(){
    var self = this;
    this.props.store.subscribe(function(){
      self.setState({tweet: self.props.store.getState().tweetData});
    })
  },
  onChange: function(ev){
    this.setState({message: ev.target.value})
  },
  onClick: function(){
    //console.log(this.state.message);
    client.sendMessage("!xtYgwAVUadJnJUydMa:matrix.org", {
      msgtype: "cat.tyler.twitter",
      body: this.state.message,
      inReplyTo: this.state.tweet.event.event_id
    })
  },
  render: function() {
      if(this.state){
        //console.log(this.state);
        return (
          <div className="new-tweet">
            <p>Sending reply to {this.state.tweet.sender.name} in reply to {this.state.tweet.event.event_id}</p>
            <input type="text" onChange={this.onChange} value={this.state.message} />
            <button onClick={this.onClick}>Send</button>
          </div>
        );
      } else {
        return <div style={{display: "none"}} />;
      }
  }
});
