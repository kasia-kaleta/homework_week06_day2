const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dinosaurs = [new Dinosaur('t-rex', 'carnivore', 50), new Dinosaur('brachiosaurus', 'herbivore', 100), new Dinosaur('velociraptor', 'carnivore', 75)]
    park = new Park('Jurassic Park', 19.99, dinosaurs)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 19.99);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.howManyDinosaurs();
    assert.deepStrictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(new Dinosaur('triceratops', 'herbivore', 60));
    const actual = park.howManyDinosaurs();
    assert.deepStrictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur('t-rex');
    const actual = park.howManyDinosaurs();
    assert.deepStrictEqual(actual, 2);
  });


  xit('should be able to find the dinosaur that attracts the most visitors', {

  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
