import config from './config'
export default function(client, cb){
  var timeline = function(event, room, toStartOfTimeline  ) {
    console.log(event);
    if (toStartOfTimeline) {
      return;
    }
    if (event.getType() !== "m.room.message") {
      return;
    }
    //console.log(event.getSender());
    if(room.roomId == config.roomId){
        client.getProfileInfo(event.sender.userId).done(function(profile){
          event["avatar"] = client.mxcUrlToHttp(profile.avatar_url);
          event["room"] = room;
          cb(event)
        })
      //   console.log(
      //   //the room name will update with m.room.name events automatically
      //   "(%s) %s :: %s", room.name, event.getSender(), JSON.stringify(event.getContent())
      // );
    }
  }
  return timeline;
}
