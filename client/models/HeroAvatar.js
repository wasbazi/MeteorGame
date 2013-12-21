function addPx(num){
  return num + "px";
}

var module = Template.heroAvatar;

_.extend(module, {
  characters: [
    {position: {x: -37, y: -25}},
    {position: {x: -113, y: -25}},
    {position: {x: -189, y: -25}},
    {position: {x: -265, y: -25}}
  ],
  backgroundPosition: function(){
    var sizeMult = 1;

    var position = this.position;
    if (this.hasOwnProperty('character')) {
      position = Template.heroAvatar.characters[this.character].position;
      sizeMult = 4;
    }

    var top = position.y - 19;
    var positionPrefix = "background-position: ";
    position = [addPx(position.x * sizeMult), addPx(top * sizeMult)];
    return  positionPrefix + position.join(" ");
  }
});