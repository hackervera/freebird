export function updateSomething(thing) {
  return {type: 'FOO', thing}
}

export function selectTweet(eventId) {
  return {type: "SELECT_TWEET", eventId}
}

export const viewConversation = (eventId) => {
  return {type: "VIEW_CONVERSATION", eventId}
}

export function updateClient(client) {
  return {type: "UPDATE_CLIENT", client}
}

export function sendReply(messagetext) {
  return {type: "SEND_REPLY", messageText}
}

export function addTweet(tweet) {
  return {type: "ADD_TWEET", tweet}
}

export const login = (credentials) => {
  return {type: "LOGIN", credentials}
}
