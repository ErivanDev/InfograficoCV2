class Painel {
    constructor( sprite, x, y, width, height, button ) {
        this.pos = createVector(0, 0);
	    this.pos.x = x;
        this.pos.y = y;
        this.width = width;
        this.height = height;
        this.spr = sprite || loadImage('./assets/botao_inicial.png');

        this.button = button;
    }

	draw() {
        imageMode(CORNER);
        image( this.spr, this.pos.x, this.pos.y );
        //console.log(this.spr);
        
        this.button.update();
	}
}