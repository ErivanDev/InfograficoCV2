class Building {
    constructor( sprite, x, y, width, height, glowing ) {
        this.pos = createVector(0, 0);
	    this.pos.x = x;
        this.pos.y = y;
        this.width = width;
        this.height = height;
        this.spr = sprite || loadImage('./assets/rocket.png');

        this.button = new Button( loadImage('./assets/rocket.png'), 1200 - 50, 50, 50, 50 );
        this.glowing = glowing;
        this.func;
    }

	draw() {
        image( this.spr, this.pos.x, this.pos.y );
        
        if( this.collision() )
        {
            fill(0,255,0);
            rect(0,0,100,100)
        }
    }

    collision() {
        var p =  sizeFactor();
        if ( this.spr.pontos != undefined && mouseX < 0 + this.spr.width * p && mouseY < 0 + this.spr.height * p ){
            if( this.spr.pontos[ ( int( mouseX/p ) + int( mouseY/p ) * this.spr.width ) * 4 + 3 ] != 0 ){
                return true;
            }
        }
        
        return false;
    }
}