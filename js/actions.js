export function updateSomething(thing) {
  return {type: 'FOO', thing}
}

export function selectTweet(eventId) {
  return {type: "SELECT_TWEET", eventId}
}

export function addTweet(tweet) {
  return {type: "ADD_TWEET", tweet}
}
