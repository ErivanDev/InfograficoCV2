class Planet {
    constructor( sprite, x, y, r, m ) {
        this.pos = createVector(0, 0);
	    this.pos.x = x;
	    this.pos.y = y;
	    this.radius = r; //30
		this.mass = m; //1000
		this.r = floor(random(255));
		this.g = floor(random(255));
		this.b = floor(random(255));
		this.spr = sprite || loadImage('./assets/rocket.png');
    }

	draw() {
		fill( this.r, this.g, this.b );
		//ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2); 
		imageMode(CENTER);
		if( this.radius != 0 )
			image( this.spr, this.pos.x, this.pos.y, this.radius*2, this.radius*2 ); 
		else 
			image( this.spr, this.pos.x, this.pos.y ); 
	}
}