class Mapa {
    constructor( sprite, x, y, width, height ) {
        this.pos = createVector(0, 0);
	    this.pos.x = x;
        this.pos.y = y;
        this.width = width;
        this.height = height;
        this.spr = sprite || loadImage('./assets/rocket.png');

        this.button = new Button( loadImage('./assets/rocket.png'), 1200 - 50, 50, 50, 50, (function(){ infografico.update = updateMap; }) );
    }

	draw() {
        imageMode(CORNER);
        image( this.spr, this.pos.x, this.pos.y );
        
        this.button.update();
    }
}