var React = require('react');


module.exports = React.createClass({
  getInitialState: function(){
    return {text: JSON.stringify(this.props.friends)};
  },
  onChange: function(ev){
    //console.log(ev.target.value);
    this.setState({text: ev.target.value})
  },
  render: function() {
      return (
        <input type="text" onChange={this.onChange} value={this.state.text} />
      );
  }
});
