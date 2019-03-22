class Elevator {

	constructor(elevatorId){
		this.elevatorId = elevatorId;
		this.stops = 0;
		this.currentFloor = 1;
	}
	
	goUptToFloor(floorNumber) {
		while(currentFloor < floorNumber) {
			currentFloor += 1;
			console.log('Elevator number ' + elevatorId + ' is currently on floor ' +
				currentFloor + ' heading up to ' + floorNumber;
		}
		openDoors();
	}
	
	goDownToFloor(floorNumber) {
		while(currentFloor > floorNumber) {
			currentFloor -= 1;
			console.log('Elevator number ' + elevatorId + ' is currently on floor ' +
				currentFloor + ' heading down to ' + floorNumber;
		}
		openDoors();
	}
	
	openDoors() {
		console.log('Elevator number ' + elevatorId + ' has opened its doors for passengers');
		closeDoors();
	}
	
	closeDoors() {
		console.log('Elevator number ' + elevatorId + ' has closed its doors for passengers');
	}
}
module.exports = Elevator
