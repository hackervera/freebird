import React from 'react'
import $ from 'jquery'
export default ({selectedTweet, client}) => {
  if(selectedTweet){
    return (
      <div>
      <div>Now responding to eventId: {selectedTweet} <input id="replyText" type='text'/></div>
      <div>
        <button onClick={() =>
          client.sendMessage("!xtYgwAVUadJnJUydMa:matrix.org", {
            body: $("#replyText").val(),
            msgtype: "cat.tyler.twitter",
            inReplyTo: selectedTweet
          })
        }>Submit</button></div>
      </div>

    )
  } else {
    return <div/>
  }
}
