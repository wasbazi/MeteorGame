// Worlds - {wid: Number}

Worlds = new Meteor.Collection("worlds");

// Players - {level: Integer,
//            position: Object,
//            name: String,
//            pid: String,
//            character: Number}
Players = new Meteor.Collection("players");

Meteor.publish("players", function (pid) {
  return Players.find({pid: pid});
});
