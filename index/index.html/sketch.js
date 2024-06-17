cor;
let circuloX = [];
let circuloY = [];

function setup() {let
  createCanvas(400, 400);
  background(255);
  cor = color(random(255), random(255), random(255));
  for (let i = 0; i < 3; i++) {
    circuloX.push(0);
    circuloY.push(random(height));
  }
}

function draw() {
  fill(cor);
  for (let i = 0; i < circuloX.length; i++) {
    circle(circuloX[i], circuloY[i], 50);
    circuloX[i] += random(0, 3);
    circuloY[i] += random(-3, 3);
    if (circuloX[i] >= width) {
      circuloX[i] = 0;
      circuloY[i] = random(height);
    }
  }
  if (mouseIsPressed) {
    cor = color(random(255), random(255), random(255), random(100));
  }
}
