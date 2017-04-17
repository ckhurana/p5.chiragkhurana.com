function LectureImage(id) {
  this.url = "https://iattend-32ac0.firebaseio.com/attendance/" + id + ".json";
  this.faces = "";
  this.persons = [];

  this.loadCallback = function(faces) {
    this.faces = faces;
    
  }

  this.loadData = function() {
    loadJSON(this.url, this.loadCallback)
  }


}
