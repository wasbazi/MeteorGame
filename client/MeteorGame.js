var env = {
  verbose: true
};

function logger() {
  if (env.verbose)
    console.log.apply(console, arguments);
}

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
