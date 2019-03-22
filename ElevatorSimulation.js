const Elevator = require('./Elevator')
class ElevatorSimulation {

	constructor(floors, elevators) {
		this.floors = floors;
		this.elevators = elevators;
		this.secondsPerPassenger = 5;
		this.secondsSinceLastPassenger = 0;
		this.elevatorArray = [];
		populateElevatorArray();
	}
	
	populateElevatorArray() {
		for(int elevatorId = 1; elevatorId <= this.elevators; elevatorId++) {
			let elevator = new Elevator(elevatorId);
			this.elevatorArray.push(elevator);
		}
	}

	runSimulation() {
		console.log('running simulation for ' + this.floors + ' floors and ' + this.elevators + ' elevators.');
		
		while(true){
			if(isPassengerDelayMet()) {
				requestAnElevator();
			}
			await sleep(1000);
		}
	}
	
	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	
	isPassengerDelayMet()
	{
		this.secondsSinceLastPassenger += 1;
		if(this.secondsPerPassenger == this.secondsSinceLastPassenger) {
			return true;
		}
		return false;
	}
	
	requestAnElevator()
	{
		let floor = Math.floor(Math.random() * this.floors) + 1
		elevator = findClosestElevator(floor);
		if(elevator.currentFloor < floor) {
			elevator.goUpToFloor(floor);
		} else if(elevator.currentFloor > floor) {
			elevator.goDownToFloor(floor);
		} else {
			elevator.openDoors();
		}
			
		
	}
	
	findClosestElevator(floor){
		var arrayLength = this.elevatorArray.length;
		let closestIndex = 0;
		let minDistance = this.floors + 1;
		for (var i = 0; i < arrayLength; i++) {
			let currentDistance = this.elevatorArray[i].currentFloor - floor
			if(currentDistance < minDistance) {
				closestIndex = i;
				minDistance = currentDistance;
			}
		}
		return this.elevatorArray[closestIndex];
	}

}
module.exports = ElevatorSimulation
