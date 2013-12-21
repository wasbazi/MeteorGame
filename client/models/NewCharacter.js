var module = Template.newCharacter;

var selectedIdx = 0;
var selectedIdxDep = new Deps.Dependency;

_.extend(module, {
  keyPressed: function(event){
    var maxIdx = this.characters.length - 1;
    switch (event.keyIdentifier) {
      case "Up":
        this.setSelectedIdx(!selectedIdx ? maxIdx : selectedIdx - 1);
        break;
      case "Down":
        this.setSelectedIdx(maxIdx == selectedIdx ? 0 : selectedIdx + 1);
        break;
    }
  },
  getSelectedIdx: function(){
    selectedIdxDep.depend();
    return selectedIdx;
  },
  setSelectedIdx: function(idx){
    selectedIdx = idx;
    selectedIdxDep.changed();
    logger('idx', idx);
  },
  selectedClass: function(idx){
    var classString = "";
    if (module.getSelectedIdx() == idx) {
      classString = "selected";
    }

    return classString;
  }
});
