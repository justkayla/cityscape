function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}

const buildingCount = 13;
const groundHeight = 100;
const windowRowCount = 10;
const windowColCount = 5;

let buildings;
let groundLocation;

function setup() {
  createCanvas(innerWidth, innerHeight);

  groundLocation = height - groundHeight;

  frameRate(2);

  buildings = Array(buildingCount)
    .fill()
    .map(() =>
      Building.random(width, groundLocation, windowRowCount, windowColCount)
    );

  noStroke();
  fill("green");
  rect(0, height - 100, width, 100);

  moon();

  randomStar();
  randomStar();
  randomStar();
  randomStar();
  randomStar();
  randomStar();
  randomStar();

  draw();
}

function moon() {
  // Moon
  fill("white");
  circle(100, 100, 75);
  // Craters
  fill("lightgray");
  circle(90, 100, 20);
  circle(90, 91, 18);
  circle(121, 100, 10);
  circle(121, 120, 13);
  circle(110, 120, 8);
  // Crescent
  fill(20);
  circle(90, 90, 68);
}

function randomStar() {
  push();
  fill("white");
  noStroke();
  circle(random(width), random(0, groundLocation), random(5, 10));
  pop();
}

/*
function generateStar(num) {
  return Array(num)
    .fill()
    .map(() => {
      x = random(width);
      y = random(groundLocation);
      size = random(5, 10);
    });
}
*/

function draw() {
  background(20);

  noStroke();
  fill("green");
  rect(0, height - 100, width, 100);

  moon();

  randomStar();
  randomStar();
  randomStar();
  randomStar();
  randomStar();
  randomStar();
  randomStar();

  buildings.forEach((b) => b.draw());
}
