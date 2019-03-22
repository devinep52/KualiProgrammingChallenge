const Elevator = require('./Elevator')
class ElevatorSimulation {

	constructor(floors, elevators) {
		this.floors = floors;
		this.elevators = elevators;
	}

	runSimulation() {
		console.log('running simulation for ' + this.floors + ' floors and ' + this.elevators + ' elevators.');
		let elevatorArray = [];
		for(int elevatorId = 1; elevatorId <= this.elevators; elevatorId++) {
			let elevator = new Elevator(elevatorId);
			elevatorArray.push(elevator);
		}
	}

}
module.exports = ElevatorSimulation
