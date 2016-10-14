export default function(client, cb){
  var timeline = function(event, room, toStartOfTimeline  ) {
    var friends = client.getAccountData("cat.tyler.friends").event.content.friends
    if (toStartOfTimeline) {
        return; // don't print paginated results
    }
    if (event.getType() !== "m.room.message") {
        //console.log(event.event.content);
        //console.log(event.event.type);

        //console.log(event.event.content)
        return; // only print messages

    }
    console.log(event.getSender());
    if(friends.indexOf(event.getSender()) != -1){
        client.getProfileInfo(event.sender.userId).done(function(profile){
          event["avatar"] = client.mxcUrlToHttp(profile.avatar_url);
          event["room"] = room;
          //tweets.push(event)
          cb(event)
        })
        console.log(
        //the room name will update with m.room.name events automatically
        "(%s) %s :: %s", room.name, event.getSender(), JSON.stringify(event.getContent())
      );
    }
  }
  return timeline;
}
