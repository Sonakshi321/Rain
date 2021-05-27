class Rain {
    constructor(x, y) {

        var options ={
            restitution:0.4,
            friction:0.1,
            isStatic:false
        }
var drops;
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r,options);       
        World.add(world, this.body);
        this.color=color("blue");
    
     

     
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
      

       
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }}