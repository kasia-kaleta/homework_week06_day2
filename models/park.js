const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.howManyDinosaurs = function () {
  return this.dinosaurs.length
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function (dinosaurName) {

  var indexOfDinosaur = 0;
  for (dino of this.dinosaurs){
    if (dinosaurName === dino.species)
    {
      break;
    }
    indexOfDinosaur++;
  }
  this.dinosaurs.splice(indexOfDinosaur, 1)
};

module.exports = Park;
