class Particle {
    constructor(x,y,dia) {
      var options = {
          restitution:0.5
      }
       this.radius=dia/2;
      
      this.body = Bodies.circle(x,y,this.radius,options);
      this.r=random(0,255);
      this.g=random(0,255);
      this.b=random(0,255);
     
      World.add(world, this.body);
     
    }
    display(){
         var pos =this.body.position;
   var angle=this.body.angle;
       
      push();
    translate(pos.x, pos.y);
    rotate(angle);
      ellipseMode(RADIUS);
     fill(this.r,this.g,this.b);
    
      ellipse(0,0, this.radius,this.radius);
     pop();
     
    }
  }