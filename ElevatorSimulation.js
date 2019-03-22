const Elevator = require('./Elevator')
class ElevatorSimulation {

	constructor(floors, elevators) {
		this.floors = floors;
		this.elevators = elevators;
		this.secondsPerPassenger = 5;
		this.secondsSinceLastPassenger = 0;
		this.elevatorArray = [];
		for(let elevatorId = 1; elevatorId <= this.elevators; elevatorId++) {
			let elevator = new Elevator(elevatorId);
			this.elevatorArray.push(elevator);
		}
	}
	
	runSimulation() {
		console.log('running simulation for ' + this.floors + ' floors and ' + this.elevators + ' elevators.');
		
		while(true){
			if(this.isPassengerDelayMet()) {
				this.requestAnElevator();
			}
			setTimeout(function(){ 
			}, 1000);
		}
	}

	
	isPassengerDelayMet(){
		this.secondsSinceLastPassenger += 1;
		if(this.secondsPerPassenger == this.secondsSinceLastPassenger) {
			return true;
		}
		return false;
	}
	
	requestAnElevator(){
		let floor = Math.floor(Math.random() * this.floors) + 1
		let elevator = this.findClosestElevator(floor);
		console.log('hailing elevator at floor ' + floor);
		console.log('elevator id ' + elevator.elevatorId + ' heading there now');
		if(elevator.currentFloor < floor) {
			elevator.goUpToFloor(floor);
		} else if(elevator.currentFloor > floor) {
			elevator.goDownToFloor(floor);
		} else {
			elevator.openDoors();
		}
			
		
	}
	
	findClosestElevator(floor){
		let arrayLength = this.elevatorArray.length;
		let closestIndex = 0;
		let minDistance = this.floors + 1;
		for (let i = 0; i < arrayLength; i++) {
			if(!this.elevatorArray[i].isOutForService()) {
				let currentDistance = this.elevatorArray[i].currentFloor - floor
				if(currentDistance < minDistance) {
					closestIndex = i;
					minDistance = currentDistance;
				}
			}
		}
		return this.elevatorArray[closestIndex];
	}
	
	serviceElevators(){
		let arrayLength = this.elevatorArray.length;

		for (let i = 0; i < arrayLength; i++) {
			if(this.elevatorArray[i].isOutForService()) {
				this.this.elevatorArray[i].serviceElevator();
			}
		}
	}

}
module.exports = ElevatorSimulation
