var React = require('react');
var Tweet = require('./tweet');

module.exports = React.createClass({

  render: function() {
      return (
        <Tweet tweetData={this.props.tweet} store={this.props.store} />
      );
  }
});
