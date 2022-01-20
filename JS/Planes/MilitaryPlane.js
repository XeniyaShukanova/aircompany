const Plane = require('./Plane');

class MilitaryPlane extends Plane {
    constructor({ model, maxSpeed, maxFlightDistance, maxLoadCapacity, type }) {
        super({ model, maxSpeed, maxFlightDistance, maxLoadCapacity });
        this.type = type;
    }
}

module.exports = MilitaryPlane;
