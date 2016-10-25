import React from 'react'
import $ from 'jquery'
export default ({selectedTweet, client, onReplySend, tweets, onClearReply}) => {
  var replyMsg = <div/>
  if(selectedTweet){
    replyMsg = (
      <div>
        Now responding to eventId: {selectedTweet}
        <button onClick={ () => onClearReply()}>X</button>
      </div>
    )
  }
  if(tweets.length > 0){
    return (
      <div className="send-tweet">
        {replyMsg}
        <div><textarea id="replyText" /></div>
        <div>
          <button onClick={() =>
              onReplySend($("#replyText").val(), client, selectedTweet)
            }>Send Message</button>
          </div>
        </div>
    )
  } else {
    return <div/>
  }
}
