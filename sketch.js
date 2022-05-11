

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  
}

function setup() {

  canvas = createCanvas(1200, 600);
 
}

function draw() {

  image(backgroundImg, 0, 0, width, height);

}
