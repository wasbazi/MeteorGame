function logger() {
  if (typeof console !== 'undefined')
    console.log.apply(console, arguments);
}

if (Meteor.isClient) {
  Template.game.events({
    'click' : function () {
      console.log('focus');
      document.getElementById("hidden-input").focus();
    },
    'keydown input' : function () {
      logger("keydown", arguments);
    },
    'keyup input' : function () {
      logger("keyup", arguments);
    }
  });

  Meteor.startup(function(){
    document.getElementById("hidden-input").focus();
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
