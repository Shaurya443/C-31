class Particle{
constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:1,
        density:0.8,
        gravity:0.5
        
        }
    this.x=x;
    this.y=y;
    this.r=r
    
    this.body=Bodies.circle(this.x, this.y, this.r, options)
    this.color =color(random(0,255),random(0,255),random(0,255));
    World.add(world, this.body);


}
display(){
var pos = this.body.position;
push()
    translate(pos.x, pos.y);
    rectMode(CENTER)
    fill(255,0,255)
    ellipse(0,0,this.r, this.r);
pop()
			

    
}
}







