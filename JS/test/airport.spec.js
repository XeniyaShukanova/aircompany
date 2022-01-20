const { expect } = require('chai');

const ExperimentalPlane = require('../Planes/ExperimentalPlane');
const MilitaryPlane = require('../Planes/MilitaryPlane');
const PassengerPlane = require('../Planes/PassengerPlane');
const Airport = require('../Airport');

const militaryTypes = require('../models/militaryTypes');
const experimentalTypes = require('../models/experimentalTypes');
const classificationLevel = require('../models/classificationLevel');

describe('My Test', () => {
    const c130 = new MilitaryPlane({
        model: 'C-130 Hercules',
        maxSpeed: 650,
        maxFlightDistance: 5000,
        maxLoadCapacity: 110000,
        type: militaryTypes.TRANSPORT,
    });
    const boeing737 = new PassengerPlane({
        model: 'Boeing-737',
        maxSpeed: 900,
        maxFlightDistance: 12000,
        maxLoadCapacity: 60500,
        passengersCapacity: 164,
    });
    const boeing737800 = new PassengerPlane({
        model: 'Boeing-737-800',
        maxSpeed: 940,
        maxFlightDistance: 12300,
        maxLoadCapacity: 63870,
        passengersCapacity: 192,
    });
    const boeing747 = new PassengerPlane({
        model: 'Boeing-747',
        maxSpeed: 980,
        maxFlightDistance: 16100,
        maxLoadCapacity: 70500,
        passengersCapacity: 242,
    });
    const b1bLancer = new MilitaryPlane({
        model: 'B-1B Lancer',
        maxSpeed: 1050,
        maxFlightDistance: 21000,
        maxLoadCapacity: 80000,
        type: militaryTypes.BOMBER,
    });
    const b2Spirit = new MilitaryPlane({
        model: 'B-2 Spirit',
        maxSpeed: 1030,
        maxFlightDistance: 22000,
        maxLoadCapacity: 70000,
        type: militaryTypes.BOMBER,
    });
    const f15 = new MilitaryPlane({
        model: 'F-15',
        maxSpeed: 1500,
        maxFlightDistance: 12000,
        maxLoadCapacity: 10000,
        type: militaryTypes.FIGHTER,
    });
    const f22 = new MilitaryPlane({
        model: 'F-22',
        maxSpeed: 1550,
        maxFlightDistance: 13000,
        maxLoadCapacity: 11000,
        type: militaryTypes.FIGHTER,
    });
    const bellX14 = new ExperimentalPlane({
        model: 'Bell X-14',
        maxSpeed: 277,
        maxFlightDistance: 482,
        maxLoadCapacity: 500,
        type: experimentalTypes.HIGH_ALTITUDE,
        classificationLevel: classificationLevel.SECRET,
    });
    const ryanX13Vertijet = new ExperimentalPlane({
        model: 'Ryan X-13 Vertijet',
        maxSpeed: 560,
        maxFlightDistance: 307,
        maxLoadCapacity: 500,
        type: experimentalTypes.VTOL,
        classificationLevel: classificationLevel.TOP_SECRET,
    });
    let planes = [
        c130,
        boeing737,
        boeing737800,
        boeing747,
        b1bLancer,
        b2Spirit,
        f15,
        f22,
        bellX14,
        ryanX13Vertijet,
    ];
    const airport = new Airport(planes);
    const airport3Planes = new Airport([c130, boeing737, boeing737800]);

    it('should return military plane with transport type', () => {
        expect(airport.getMilitaryPlanesByType(militaryTypes.TRANSPORT)).to.eql([c130]);
    });

    it('should return passenger plane with max capacity', () => {
        expect(airport.getPassengerPlaneWithMaxPassengersCapacity()).to.eql(boeing747);
    });

    it('should return planes sorted by max load capacity', () => {
        expect(airport3Planes.sortByMaxLoadCapacity()).to.eql([c130, boeing737800, boeing737]);
    });

    it('should return planes sorted by max speed', () => {
        expect(airport3Planes.sortByMaxSpeed()).to.eql([boeing737800, boeing737, c130]);
    });

    it('should return planes sorted by max distance', () => {
        expect(airport3Planes.sortByMaxDistance()).to.eql([boeing737800, boeing737, c130]);
    });
    it('should return military planes', () => {
        expect(airport.getPlanesByType(MilitaryPlane)).to.eql([
            c130,
            b1bLancer,
            b2Spirit,
            f15,
            f22,
        ]);
    });
});
