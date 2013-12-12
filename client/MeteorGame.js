env = {
  verbose: true
};

logger = function logger() {
  if (env.verbose)
    console.log.apply(console, arguments);
}

Template.game.events({
  'click' : function () {
    console.log('focus');
    document.getElementById("hidden-input").focus();
  },
  'keydown input' : function (event) {
    logger("keydown", event, event.keyIdentifier);
    Template.newCharacter.keyPressed(event);
  },
  'keyup input' : function (event) {
    logger("keyup", event, event.keyIdentifier);
  }
});

Meteor.startup(function(){
  document.getElementById("hidden-input").focus();
});
