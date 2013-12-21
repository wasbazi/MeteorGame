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

Meteor.startup(function(){
  if(!Players.find().count()) {
    Players.insert({level: 0, position: {x: 0, y: 0}, name: 'aa', pid: '0', character: 1})
  }
});