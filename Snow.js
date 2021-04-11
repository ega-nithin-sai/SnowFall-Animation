class Snow{
    constructor(x,y){
        var options = {
            restitution:0.5,
            friction:0.5
        }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);

        // this.display();
        this.img = loadImage("snow4.webp");
    }
    display(){
        push();
            translate(this.body.position.x,this.body.position.y);
            // fill("white");
            // ellipseMode(RADIUS);
            // ellipse(this.body.position.x,this.body.position.y,5,5);
            imageMode(CENTER);
            image(this.img,0,0,12,12);
        pop();
        if(this.body.position.y > 600){
            Body.setPosition(this.body,{x:random(0,800),y:0});
            Body.setVelocity(this.body,{x:0,y:5});
        }
    }
}