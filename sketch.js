
let speed =  5;       

let radius = 100;     

let bumpCount = 0;    

let angle = 0;
let x;


function setup() {
  createCanvas(windowWidth, windowHeight);

  
  x = width/2;
}


function draw() {
  background(50);
  
  
  let from = color(255,150,0);
  let to =   color(0,0,0);
  let pct =  map(x, radius,width-radius, 0,1);
  
  fill( lerpColor(from, to, pct) );
  noStroke();
  circle(x, height/2, radius*2);
  
  
  x += speed;
  
  
  if (x-radius < 0 || x+radius > width) {
    speed *= -1;            
    
    bumpCount += 1;         
    
    console.log(bumpCount);
  }

  
  push();
  translate(x, height/2);     
  
  rotate(angle);              
  
  translate(0, radius*1.6);   
  

  if (angle < PI) {   
    
    fill(0);          
    
  }
  else {
    fill(255);        
    
  }
  
  pop();

  
  angle += radians(2);
  if (angle >= TWO_PI) {
    angle = 0;
  }
}
