const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    const dinoIndex = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(dinoIndex,1);
};

Park.prototype.findMostPopular = function () {
    let mostPopular = this.dinosaurs[0];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay) {
            mostPopular = dinosaur;
        }
    }
    return mostPopular;
};

Park.prototype.findDinosaursBySpecies = function (species) {
    let dinoList = []
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            dinoList.push(dinosaur);
        }
    }
    return dinoList;
}

Park.prototype.visitorsPerDay = function () {
    let visitors = 0;
    for (let dinosaur of this.dinosaurs) {
        visitors += dinosaur.guestsAttractedPerDay
    }
    return visitors
}

Park.prototype.visitorsPerYear = function () {
   return this.visitorsPerDay() * 365
}

Park.prototype.incomePerYear = function () {
    return this.visitorsPerYear() * this.ticketPrice
}

module.exports = Park