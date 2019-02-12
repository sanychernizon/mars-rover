// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  
  if (rover.direction = "W"){
      rover.x -= 1;
  } else if (rover.direction = "E") {
      rover.x += 1;
  } else if(rover.direction = "N"){
      rover.y += 1;
  } else if (rover.direction = "S") {
      rover.y -= 1;
  }

  console.log(rover.x,rover.y);
}
