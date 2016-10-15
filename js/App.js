import React from 'react'
import LoginContainer from './LoginContainer'
export default ({children}) => (
  <div>
    <div><LoginContainer/></div>
    <div>{children}</div>
  </div>
)
