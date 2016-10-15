var React = require('react');
var Conversation = require('./conversation')
var TweetContainer = require('./tweetContainer')

module.exports = React.createClass({
  getInitialState: function(){
    return {scene: this.props.scene}
  },
  componentDidMount: function(){
    var self = this;
    this.props.store.subscribe(function(){
      //console.log("state update")
      self.setState({scene: self.props.store.getState().scene});
    })
  },

  render: function() {
      var scene = <div>Empty Scene</div>;
      //console.log(this.state.scene);
      if(this.state && this.state.scene){
        if(this.state.scene == "conversation"){
          scene = <Conversation/>
        }
        if(this.state.scene == "container"){
          scene = <TweetContainer store={this.props.store} />
        }
      }
      return (
        scene
      );
  }
});
