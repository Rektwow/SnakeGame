let s
let scl = 20
let food
let textString = ''

function setup() {
   createCanvas(600, 600)
   s = new Snake()
   frameRate(10)
   pickLocation()
  }

  function pickLocation() {
    let cols = floor(width/scl)
    let rows = floor(height/scl)
    food = createVector (floor(random(cols)), floor(random(rows)))
    //console.log(food)
    
    food.mult(scl)
    //console.log(food)
   }
  
 function draw() {
   background(50)
   if( s.eat(food)){
     pickLocation()
   }
   s.death()
   s.show()
   s.update()
   text(textString, 20 , height-20)
   
   fill(255 , 0 , 100)
   rect(food.x , food.y , scl , scl)
}



// recognise key presses
function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0,-1)
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0,1)
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1,0)
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1,0)
  }
}



