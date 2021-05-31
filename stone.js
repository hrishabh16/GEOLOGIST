class stone {
    constructor(x,y,width,height) {
        var options = {
            density : 12,
            restitution : 0.8,
            friction : 0.9

        };
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display()
	{
			var stonepos = this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
            rect(0, 0, this.width, this.height);
			

			pop()
	}
}