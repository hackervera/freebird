import React from 'react'
import { connect } from 'react-redux'
import LoginContainer from './LoginContainer'
const App = ({children, tweets}) => {
  var comp;
  if(tweets.length == 0) {
    comp = <div><LoginContainer/></div>
  } else {
    comp = <div>{children}</div>
  }
  return (
    <div>
    {comp}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  }
}

export default connect(mapStateToProps)(App)
