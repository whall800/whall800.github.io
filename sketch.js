function setup() {
	createCanvas(800,600) // make an HTML canvas element width x height pixels
    rectMode(CENTER);
    angleMode(DEGREES);
    noStroke();
}
function draw() {
  
    background(185, 217, 235);

    translate(width / 2, height / 2);
  
    fill( 2, 33, 105);
    ellipse(-0,-0,400,400);
  
    
    let v0 = createVector(0, 0);
    let v1 = createVector(200, 0);

    drawArrow(v0, v1.rotate(270 + (hour()%12 * 30) ),200, 'black');
  
    fill( 0, 51, 160);
    ellipse(-0,-0,300,300);
  
    let v2 = createVector(0, 0);
    let v3 = createVector(150, 0);
  
    drawArrow(v2, v3.rotate(270 + (minute())*6),150, 'black');
  
    fill(0, 114, 206);
    ellipse(-0,-0,200,200);

    let v4 = createVector(0, 0);
    let v5 = createVector(100, 0);

    drawArrow(v4, v5.rotate(270 + (second()*6)),100, 'black');
  
    fill(108, 172, 228);
    ellipse(-0,-0,100,100);
    
    
  
    
}

// method adapted from https://p5js.org/reference/#/p5.Vector/rotate
function drawArrow(base, vec, arrowSize, myColor) {
    push();
    fill(myColor);
    rotate(vec.heading());
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 3, 0, -arrowSize / 3, arrowSize, 0);
    pop();
    
}
