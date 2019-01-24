/*jshint esversion: 6*/
const doorImage1 = document.getElementById('door1'); 
const doorImage2 = document.getElementById('door2'); 
const doorImage3 = document.getElementById('door3'); 
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const startButton = document.getElementById('start');

const streakCounter = document.getElementById('streak');

var currentlyPlaying = true;
var streak = 0;

var openDoor1, openDoor2, openDoor3;

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

var numClosedDoors = 3;

const isBot = (door) => {
  return (door === botDoorPath);
};

const isClicked = (door) => {
  return (door.src === closedDoorPath);
};

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  } else {
  }
};

const randomChoreDoorGenerator = () => {
  var choreDoor = Math.floor(Math.random() * numClosedDoors);
  
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
};


doorImage1.onclick = () => {
  if (isClicked(doorImage1) && currentlyPlaying) {
    playDoor(openDoor1);
    doorImage1.src = openDoor1;
  }
};

doorImage2.onclick = () => {
  if (isClicked(doorImage2) && currentlyPlaying) {
    playDoor(openDoor2);
    doorImage2.src = openDoor2;
  }  
};

doorImage3.onclick = () => {
  if (isClicked(doorImage3) && currentlyPlaying) {
    playDoor(openDoor3);
    doorImage3.src = openDoor3;
  }
};

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;

  numClosedDoors = 3;
  
  startButton.innerHTML = 'Good Luck!';

  currentlyPlaying = true;

  streakCounter.innerHTML = streak;

  randomChoreDoorGenerator();
};

const gameOver = (status) => {
  if (status === 'win') {
    streak++;
    startButton.innerHTML = 'You win! Play again?';
    currentlyPlaying = false;
  } else {
    startButton.innerHTML = 'Game over! Play again?';
    streak = 0;
    currentlyPlaying = false;
  }
};

startRound();
