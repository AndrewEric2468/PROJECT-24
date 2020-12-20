class Paper{
    constructor(x,y){
        var options = {
            isStatic : false,
            resititution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.body = Bodies.circle(this.x, this.y, 15, options);

        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }



    
}