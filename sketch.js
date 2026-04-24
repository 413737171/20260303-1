function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(173, 216, 230);
  
  // 繪製圓圈
  stroke(255, 0, 0);
  strokeWeight(4);
  fill(255, 182, 193);
  circle(width / 2, height / 2, 200);
  
  // 繪製左眼
  fill(0);
  noStroke();
  circle(width / 2 - 35, height / 2 - 30, 15);
  
  // 繪製右眼
  circle(width / 2 + 35, height / 2 - 30, 15);
  
  // 繪製笑嘴 (弧形)
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(width / 2, height / 2 + 10, 50, 40, 0, PI);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
