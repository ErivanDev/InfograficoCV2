class Button {
    constructor( sprite, x, y, width, height, func ) {
        this.pos = createVector(0, 0);
	    this.pos.x = x;
        this.pos.y = y;
        this.width = width;
        this.height = height;
        this.spr = sprite;
        this.released = false;
        this.func = func;
        console.log("func:" +func);
        console.log(this.func);
    }

	update() {
		image( this.spr, this.pos.x, this.pos.y ); 
        if( dist( mouseX/sizeFactor(), mouseY/sizeFactor(), this.pos.x, this.pos.y ) < 50 && this.released )
            this.func();

        this.released = false;
    }
}