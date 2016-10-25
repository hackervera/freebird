import { connect } from 'react-redux'
import Placeholder from './placeholder'
import {updateSomething} from './actions'

import React from 'react'

const mapStateToProps = (state) => {
  return {
    foo: state.firstNamedReducer,
    jaz: state.defaultReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    bar: (id) => {
      dispatch(updateSomething(83))
    }
  }
}
const PlaceholderContainer = connect(mapStateToProps, mapDispatchToProps)(Placeholder)
export default PlaceholderContainer
