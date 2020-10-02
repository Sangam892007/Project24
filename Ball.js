class Ball {
    constructor(x,y,radius){
        var options = {
            friction:0.5,
            restitution:0.3,
            density:1.2
            
        };
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        

        World.add(world,this.body);
    };
    display(color) {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(color);
        ellipse(pos.x,pos.y,this.radius+20,this.radius+20);
    };
};