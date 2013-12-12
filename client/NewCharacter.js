var module = Template.newCharacter;

function addPx(num){
  return num + "px";
}

Template.newCharacter.characters = [
  {position: {x: -37, y: -25}},
  {position: {x: -113, y: -25}},
  {position: {x: -189, y: -25}},
  {position: {x: -265, y: -25}}
];

Template.newCharacter.keyPressed = function(event){
  var maxIdx = this.characters.length - 1;
  switch (event.keyIdentifier) {
    case "Up":
      this.setSelectedIdx(!selectedIdx ? maxIdx : selectedIdx - 1);
      break;
    case "Down":
      this.setSelectedIdx(maxIdx == selectedIdx ? 0 : selectedIdx + 1);
      break;
  }
}

Template.newCharacter.heroPosition = function(){
  var character = module.characters[module.getSelectedIdx()];
  var charCoords = module.backgroundPosition.call(character, null, 4);
  return charCoords;
};

Template.newCharacter.backgroundPosition = function(hash, sizeMult){
  sizeMult = sizeMult || 1;
  var top = this.position.y - 19;
  var positionPrefix = "background-position: ";
  var position = [addPx(this.position.x * sizeMult), addPx(top * sizeMult)];
  return  positionPrefix + position.join(" ");
};

var selectedIdx = 0;
var selectedIdxDep = new Deps.Dependency;

Template.newCharacter.getSelectedIdx = function(){
  selectedIdxDep.depend();
  return selectedIdx;
};

Template.newCharacter.setSelectedIdx = function(idx){
  selectedIdx = idx;
  selectedIdxDep.changed();
  logger('idx', idx);
};

Template.newCharacter.selectedClass = function(idx){
  var classString = "";
  if (module.getSelectedIdx() == idx) {
    classString = "selected";
  }

  return classString;
};
