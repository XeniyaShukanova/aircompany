const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');

class Airport {
    constructor(planes) {
        this.planes = planes;
    }

    getPlanesByType(type) {
        return this.planes.filter((el) => el instanceof type);
    }
    sortByMaxDistance() {
        return this.planes.sort((a, b) => b.maxFlightDistance - a.maxFlightDistance);
    }
    sortByMaxSpeed() {
        return this.planes.sort((a, b) => b.maxSpeed - a.maxSpeed);
    }
    sortByMaxLoadCapacity() {
        return this.planes.sort((a, b) => b.maxLoadCapacity - a.maxLoadCapacity);
    }
    getPassengerPlaneWithMaxPassengersCapacity() {
        return this.getPlanesByType(PassengerPlane).sort(
            (a, b) => b.passengersCapacity - a.passengersCapacity
        )[0];
    }
    getMilitaryPlanesByType(type) {
        return this.getPlanesByType(MilitaryPlane).filter((plane) => plane.type === type);
    }
    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
