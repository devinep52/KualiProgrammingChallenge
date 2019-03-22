class ElevatorSimulation {

	constructor(floors, elevators) {
		this.floors = floors;
		this.elevators = elevators;
	}

	runSimulation() {
		alert('running simulation for ' + this.floors + ' floors and ' + this.elevators + ' elevators.');
	}

}