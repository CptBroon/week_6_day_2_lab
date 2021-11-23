const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let tRex;

  beforeEach(function () {
    park = new Park("Jurassic Park", 1000);
    tRex = new Dinosaur("T-Rex", "carnivore", 50);
    fluffy = new Dinosaur("T-Rex", "carnivore", 50);
    toothy = new Dinosaur("T-Rex", "carnivore", 50);
    chompyboi = new Dinosaur("T-Rex", "carnivore", 50);
    stegosaurus = new Dinosaur("Stegosaurus", "herbivore", 15);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 1000);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(tRex);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(tRex);
    park.removeDinosaur(tRex);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(tRex);
    park.addDinosaur(stegosaurus);
    const popularDino = park.findMostPopular();
    assert.strictEqual(popularDino.species, "T-Rex");
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(tRex);
    park.addDinosaur(fluffy);
    park.addDinosaur(toothy);
    park.addDinosaur(chompyboi);
    const actual = park.findDinosaursBySpecies("T-Rex");
    assert.deepStrictEqual(actual, [tRex, fluffy, toothy, chompyboi]);
  });
    

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(tRex);
    park.addDinosaur(fluffy);
    park.addDinosaur(toothy);
    park.addDinosaur(chompyboi);
    park.addDinosaur(stegosaurus);
    const actual = park.visitorsPerDay();
    assert.strictEqual(actual, 215);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(tRex);
    park.addDinosaur(fluffy);
    park.addDinosaur(toothy);
    park.addDinosaur(chompyboi);
    park.addDinosaur(stegosaurus);
    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 78475);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(tRex);
    park.addDinosaur(fluffy);
    park.addDinosaur(toothy);
    park.addDinosaur(chompyboi);
    park.addDinosaur(stegosaurus);
    const actual = park.incomePerYear();
    assert.strictEqual(actual, 78475000)
  });

});
