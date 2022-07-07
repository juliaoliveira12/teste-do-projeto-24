class Rubber{
	constructor(x,y)
	{
		var options={
			'restitution':0.3,
        	'friction':5,
       	 	'density':1
		}
	// assign options to the rubber ball
		this.body = Bodies.circle(x, y,50,50, options);
     	this.width = 50;
      	this.height = 50;
		
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			rect(0, 0, this.width, this.height);
			pop()
	}

}