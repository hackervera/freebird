import React from 'react'
const Placeholder = ({foo, bar, jaz}) => (
  <div onClick={() => bar(82)}>one: {foo} {jaz}</div>
)
export default Placeholder
