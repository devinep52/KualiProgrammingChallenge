class Elevator {

	Elevator(elevatorId){
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
	}
	
	goDownToFloor(floorNumber) {
		while(currentFloor > floorNumber) {
			currentFloor -= 1;
			console.log('Elevator number ' + elevatorId + ' is currently on floor ' +
				currentFloor + ' heading down to ' + floorNumber;
		}
	}
}