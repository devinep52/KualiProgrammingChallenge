class Elevator {

	constructor(elevatorId){
		this.elevatorId = elevatorId;
		this.stops = 0;
		this.totalFloors = 0;
		this.currentFloor = 1;
		this.outForService = false;
	}
	
	goUptToFloor(floorNumber) {
		while(this.currentFloor < floorNumber) {
			this.currentFloor += 1;
			this.totalFloors++;
			console.log('Elevator number ' + this.elevatorId + ' is currently on floor ' +
				this.currentFloor + ' heading up to ' + floorNumber);
		}
		this.openDoors();
	}
	
	goDownToFloor(floorNumber) {
		while(currentFloor > floorNumber) {
			this.currentFloor -= 1;
			this.totalFloors++;
			console.log('Elevator number ' + this.elevatorId + ' is currently on floor ' +
				this.currentFloor + ' heading down to ' + floorNumber);
		}
		this.openDoors();
	}
	
	openDoors() {
		console.log('Elevator number ' + elevatorId + ' has opened its doors for passengers');
		this.closeDoors();
	}
	
	closeDoors() {
		console.log('Elevator number ' + elevatorId + ' has closed its doors for passengers');
		this.totalStops++;
		this.checkIfNeedsService();
	}
	
	checkIfNeedsService() {
		if(this.stops == 100) {
			this.outForService = true;
		}
	}
	
	serviceElevator() {
		this.stops = 0;
	}
	
}
module.exports = Elevator
