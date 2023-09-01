
function Snake () {
  this.x = 0
  this.y = 0
  this.xspeed = 0
  this.yspeed = 0
  this.total = 0
  this.tail = []

  //eat fruit
  this.eat = function (pos) {
    let d = dist(this.x , this.y , pos.x , pos.y)
    if ( d < 1 ) {
      this.total++
      return true
    } else {
      return false
    }
  }

  //movement direction of the snake
  this.dir = function (x , y) {
    this.xspeed = x
    this.yspeed = y
  }

  // snake dies then resets
  this.death = function () {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i]
      let d = dist(this.x , this.y , pos.x , pos.y)
      if (d < 1) {
        textSize(40);
        textString = 'Snake Dead'
        fill(255 , 0 , 100)
        this.total = 0
        this.tail = []
        
        console.log(d)
      }else  {
        //reset so when moved textString disappears MISSING
        textString = ''
      }
    }
  }

  // update position of snake head
  this.update = function () {

    for (let i = 0; i < this.tail.length -1; i++) {
      this.tail[i] = this.tail[i+1]
    }

    if ( this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x , this.y)
    }

    this.x = this.x + this.xspeed * scl
    this.y = this.y + this.yspeed * scl

    this.x = constrain(this.x , 0 , width - scl)
    this.y = constrain(this.y , 0 , height - scl)
  }

  // display snake
  this.show = function () {
    fill(200)
      
    for (let i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x , this.tail[i].y , scl , scl)
    }
    //head of the snake
      fill(250)
      rect(this.x , this.y , scl , scl)
  }

}