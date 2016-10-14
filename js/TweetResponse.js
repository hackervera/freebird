import React from 'react'
export default ({selectedTweet}) => {
  if(selectedTweet){
    return (
      <div>
      <div>Now responding to eventId: {selectedTweet} <input type='text'/></div>
      <div><button>Submit</button></div>
      </div>

    )
  } else {
    return <div/>
  }
}
