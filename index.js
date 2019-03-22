//Load HTTP module
const ElevatorSimulation = require('./ElevatorSimulation')
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  let floors = 10;
  let elevators = 2;
  let elevatorSimulation = new ElevatorSimulation(floors, elevators);
  elevatorSimulation.runSimulation();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('server initiated1\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});