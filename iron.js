class iron{
    constructor(x,y,width,height){
        var options ={
        density :30,
        restitution : 0.8,
        friction :3

    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.height = height;
    this.width = width;
    World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    push ();
    translate(pos.x, pos.y);
 
    strokeWeight(3);
    stroke('grey')
    fill('silver')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
}
}