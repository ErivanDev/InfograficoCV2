updateIntrodution = function(){
    this.rocket.ang = 3.14;
    this.renderPlanets();
    this.renderAstrounaut();
    this.rocket.draw();

    this.astronaut.ang = 0;
    if( this.astronaut.pos.x < this.planets[0].pos.x + cos( 45) * ( this.planets[0].radius + 60 ) )
        this.astronaut.pos.x += 4;
    else this.update = updatePainel;
}

updatePainel = function(){
    this.renderPlanets();
    this.renderAstrounaut();
    this.rocket.draw();

    var div = document.getElementById("gamestartscreen"); 
    div.innerHTML = `
    <div style="width: 100%; text-align: center; font-size: 4vw; font-weight: 900">
        <span style="font-family: 'Montserrat', sans-serif" > O QUE É O MEDIA DAY? </span>
    </div>
    <div style="position: absolute; font-size: 2vw; padding: 6%; font-weight: 600; text-align: center; font-family: 'Montserrat', sans-serif">
    O Media Day é um projeto de extensão itinerante da Universidade Federal do Ceará com o objetivo de difundir conhecimento e despertar as habilidades dos participantes através do contato direto e prático com as áreas de estudo do curso de Sistemas e Mídias Digitais. A principal ideia do projeto é divulgar em diversas cidades do Estado do Ceará os trabalhos desenvolvidos no curso e estimular o interesse pela Universidade. São ofertadas disciplinas nas áreas de Design, Audiovisual, Sistemas e Jogos. O Media Day é gratuito e aberto a toda a sociedade. 
    </div>
    `;
    document.getElementById("gamestartscreen").style.display = "block";
    this.painel.draw();
    ///console.log(this.painel);
    this.buttonINT.draw();

    if( this.buttonINT.collision() && mouseIsPressed && this.buttonINT.func != undefined ){
        this.buttonINT.func();
    }
}

updateInitial = function(){
    if (!mouseIsPressed && this.shoot.shooting) this.update = updateLaunch;

    this.renderPlanets();
    this.renderShooter();
    this.renderAstrounaut();
    this.rocket.draw();
}

updateLaunch = function(){
    this.renderPlanets();
    this.renderShooter();this
    this.renderAstrounaut();
    this.rocket.drawTraj();
    this.renderRocket();

    for (var i = 1; i < this.planets.length ; i++) {
        //console.log( planets[i].pos.dist( rocket.pos ) );
        //text( planets[i].pos.dist( rocket.pos ), planets[i].pos.x + 200, planets[i].pos.y )
        //text( planets[i].radius + 40, planets[i].pos.x + 200, planets[i].pos.y + 40 )
        if( this.planets[i].pos.dist( this.rocket.pos ) < this.planets[i].radius + this.rocket.radius + this.distance_minus_planet + 50 ){
            //this.rocket.vel = this.rocket.vel.mult(0.8);
            //this.rocket.vel
            let v1 = this.rocket.vel.heading() - 3.14/2;
            let v2 = coordenadasTan( this.rocket.pos.x - this.planets[i].pos.x , this.rocket.pos.y - this.planets[i].pos.y );
            this.rocket.ang = ( v1 + v2 )/2;

            fill(255,0,0);
            line( this.planets[i].pos.x + cos(v2), this.planets[i].pos.x + sin(v2), this.planets[i].pos.x + cos(v2) * 34, this.planets[i].pos.x + sin(v2) * 34  )
        }
        if( this.planets[i].pos.dist( this.rocket.pos ) < this.planets[i].radius + this.rocket.radius + this.distance_minus_planet ){
            this.rocket.planet = this.planets[i];
            this.rocket.dist = this.planets[i].pos.dist( this.rocket.pos );
            this.rocket.stop = true;
            this.rocket.orbitAng = coordenadasTan( this.rocket.pos.x - this.planets[i].pos.x , this.rocket.pos.y - this.planets[i].pos.y );
            //atan2( this.planets[i].pos.dist( this.rocket.pos ).y, this.planets[i].pos.dist( this.rocket.pos ).x )
            this.update = updateOrbit;
        }
    }
}

updateOrbit = function(){
    this.renderPlanets();
    this.renderShooter();
    this.renderAstrounaut();
    this.rocket.ang = coordenadasTan( this.rocket.pos.x - this.rocket.planet.pos.x , this.rocket.pos.y - this.rocket.planet.pos.y ) + 3.14;
    this.rocket.drawTraj();
    this.rocket.draw();
    
    let x = this.rocket.planet.pos.x + cos(this.rocket.orbitAng) * this.rocket.dist;
    let y = this.rocket.planet.pos.y + sin(this.rocket.orbitAng) * this.rocket.dist;
    this.rocket.pos = createVector( x, y ); 
    this.rocket.orbitAng -= 0.01; //( this.rocket.vel.x + this.rocket.vel.y )/200;
    
    //console.log(this.rocket.orbitAng);
    if( this.rocket.orbitAng < -3)
        this.update = updateMap;
}

updateMap = function(){
    this.renderPlanets();
    this.renderAstrounaut();
    this.rocket.draw();
    this.map.draw();

    document.getElementById("gamestartscreen").style.display = "none";

    for( var i=0; i<this.map.build.length; i++)
        this.map.build[i].draw();

    for( var i=0; i<this.map.build.length; i++)
        if( this.map.build[i].collision() )
            this.map.build[i].glowing.draw();

    for( var i=0; i<this.map.build.length; i++)
        if( this.map.build[i].collision() && mouseIsPressed && this.map.build[i].func != undefined ){
            this.map.build[i].func();
        }
}

updateMapPainel = function(){
    this.renderPlanets();
    this.renderAstrounaut();
    this.rocket.draw();

    document.getElementById("gamestartscreen").style.display = "block";
    this.map.draw();

    this.map.build[0].draw();
    this.map.build[1].draw();
    this.map.build[2].draw();
    this.map.build[3].draw();
    this.map.build[4].draw();
    //this.map.build[5].draw();

    this.painel.draw();
    this.buttonDSN.draw();

    if( this.buttonDSN.collision() && mouseIsPressed && this.buttonDSN.func != undefined ){
        this.buttonDSN.func();
    }
}

class Infografico
{
    constructor(){
        this.background = loadImage('assets/tela_base.png');
        this.planets = [];
        this.planetsSpr = [ loadImage('assets/terra.png'),
                            loadImage('assets/PLANETA - AUDIOVISUAL.png'),
                            loadImage('assets/PLANETA - DESING.png'), 
                            loadImage('assets/PLANETA - JOGOS.png'), 
                            loadImage('assets/PLANETA - SISTEMA.png') ];
        this.planets.push( new Planet( this.planetsSpr[0],  680, 510,   0,  0) );
        this.planets.push( new Planet( this.planetsSpr[1],  600, 210, 100,  0) ); //900
        this.planets.push( new Planet( this.planetsSpr[2], 1000, 648, 100, 65) ); //900
        this.planets.push( new Planet( this.planetsSpr[3],  346, 596, 100, 75) ); //200
        this.planets.push( new Planet( this.planetsSpr[4], 1180, 320, 100, 50) );
        //this.planets.push( new Planet( this.planetsSpr[0], 946, 334, 75, 75) ); //X*/

        let cnv = createCanvas(1920, 1080);
        cnv.id("mycanvas");
        cnv.parent("infografico");

        let x = this.planets[0].pos.x + cos( 45) * ( this.planets[0].radius + 15 ) - 50;
        let y = this.planets[0].pos.y + sin(-45) * ( this.planets[0].radius + 15 ) - 25;
        this.astronautSpr =  loadImage('assets/astronaut.png');
         
        this.astronaut = new Player( x, y, 0, 0, 255, 255, 30, 15, false, this.astronautSpr );
        this.astronaut.orbit = function(body){};
        this.astronaut.newton = function(body){};
        this.astronaut.ang = 6.28/8;
        
        this.rocket = new Player(746, 534-65-20, 0, 0, 0, 255, 255, 20, true);
        
        this.shoot = new Shooter( this.rocket );

        this.space = loadImage('assets/space.jpg');

        this.distance_minus_planet = 5;
        this.painelSpr = loadImage('assets/POPUP - DESIGN.png')

        var b = new Button( loadImage('assets/DESIGN/design_fechar.png'),  0, 0, 680, 510, 
                            function(){ 
                                document.getElementById("gamestartscreen").style.display = "none";
                                infografico.update = updateInitial; 
                            } 
                          );
        this.painel = new Painel( this.painelSpr, 10, 10, 400, 400, b );

        this.map = new Mapa( loadImage('assets/DESIGN/DESIGN - BASE MAPA.png'), 0, 0);
        this.map.build = [];
        
        this.lapis = loadImage('assets/DESIGN/predio_lapis.png', img => {
            img.loadPixels();
            img.pontos = infografico.lapis.imageData.data;
            img.updatePixels();
        });
        this.criatividade = loadImage('assets/DESIGN/predio_criatividade.png', img => {
            img.loadPixels();
            img.pontos = infografico.criatividade.imageData.data;
            img.updatePixels();
        });
        this.interface = loadImage('assets/DESIGN/predio_interface.png', img => {
            img.loadPixels();
            img.pontos = infografico.interface.imageData.data;
            img.updatePixels();
        });
        this.edicao = loadImage('assets/DESIGN/predio_edicao.png', img => {
            img.loadPixels();
            img.pontos = infografico.edicao.imageData.data;
            img.updatePixels();
        });
        this.planetario = loadImage('assets/DESIGN/predio_planetario.png', img => {
            img.loadPixels();
            img.pontos = infografico.planetario.imageData.data;
            img.updatePixels();
        });
        this.voltar_design = loadImage('assets/DESIGN/voltar_design.png', img => {
            img.loadPixels();
            img.pontos = infografico.voltar_design.imageData.data;
            img.updatePixels();
        });
        this.fechar = loadImage('assets/DESIGN/design_fechar.png', img => {
            img.loadPixels();
            img.pontos = infografico.fechar.imageData.data;
            img.updatePixels();
        });

        this.map.build.push( new Building( this.lapis, 0, 0, 680, 510, 
            new Building( loadImage('assets/DESIGN/predio_lapis_brilho.png'), 0, 0, 680, 510 ) ) );
        this.map.build[0].func =
            function(){
                var div = document.getElementById("gamestartscreen"); 
                div.innerHTML = `
                <div style="width: 100%; text-align: center; font-size: 4vw; font-weight: 900">
                    <span style="font-family: 'Montserrat', sans-serif" > DESENHO </span>
                </div>
                <div style="position: absolute; font-size: 2vw; padding: 6%; font-weight: 200; text-align: center; font-family: 'Montserrat', sans-serif">
                Na subárea de desenho, o participante encontrará oficinas tanto de desenho analógico quanto de desenho digital. As oficinas de desenho analógico trazem conhecimento à respeito das melhores técnicas para desenho à mão livre, pintura com lápis de cor, entre outros. O desenho digital é feito a partir de processos digitais, e os participantes irão aprender a utilizar softwares de computador e equipamentos que auxiliem na produção de ilustrações digitais, pintura digital, entre outros. 
                </div>
                `;
                infografico.update = updateMapPainel;
            }

        this.map.build.push( new Building( this.criatividade, 0, 0, 680, 510, 
            new Building( loadImage('assets/DESIGN/predio_criatividade_brilho.png'), 0, 0, 680, 510 ) ) );
        this.map.build[1].func =
            function(){
                var div = document.getElementById("gamestartscreen"); 
                div.innerHTML = `
                <div style="width: 100%;text-align: center; font-size: 4vw; font-weight: 900">
                    <span style="font-family: 'Montserrat', sans-serif" > CRIATIVIDADE </span>
                </div>
                <div style="position: absolute; font-size: 2vw; padding: 6%; font-weight: 600; text-align: center; font-family: 'Montserrat', sans-serif">
                São oferecidas oficinas que estimulam a produção criativa do participante e sua capacidade de invenção, reinvenção e inovação. Serão apresentados conceitos que tornarão amplo o repertório de cada pessoa, permitindo que a partir desse repertório e da sua vivência, criem novas ideias.
                </div>
                `;
                infografico.update = updateMapPainel;
            }

        this.map.build.push( new Building( this.interface, 0, 0, 680, 510, 
            new Building( loadImage('assets/DESIGN/predio_interface_brilho.png'), 0, 0, 680, 510 ) ) );
        this.map.build[2].func =
            function(){
                var div = document.getElementById("gamestartscreen"); 
                div.innerHTML = `
                <div style="width: 100%; text-align: center; font-size: 4vw; font-weight: 900">
                    <span style="font-family: 'Montserrat', sans-serif" > DESIGN DE INTERFACES GRÁFICAS </span>
                </div>
                <div style="position: absolute; font-size: 2vw; padding: 6%; font-weight: 600; text-align: center; font-family: 'Montserrat', sans-serif">
                Na subárea de Design de Interfaces Gráficas, serão apresentados os conceitos de design de interfaces, usabilidade, design gráfico, entre outros. Além de aprender as técnicas para utilização de softwares da área, os participantes também serão orientados sobre conceitos de usabilidade, que permitem que se pense na interação do usuário com a sua interface gráfica.
                </div>
                `;
                infografico.update = updateMapPainel;
            }

        this.map.build.push( new Building( this.edicao, 0, 0, 680, 510, 
            new Building( loadImage('assets/DESIGN/predio_edicao_brilho.png'), 0, 0, 680, 510 ) ) );
        this.map.build[3].func =
            function(){
                var div = document.getElementById("gamestartscreen"); 
                div.innerHTML = `
                <div style="width: 100%;text-align: center; font-size: 4vw; font-weight: 900">
                    <span style="font-family: 'Montserrat', sans-serif" > EDIÇÃO DE IMAGEM </span>
                </div>
                <div style="position: absolute; font-size: 2vw; padding: 6%; font-weight: 600; text-align: center; font-family: 'Montserrat', sans-serif">
                Nas oficinas relacionadas à edição de imagem os participantes irão aprender a alterar e manusear os conteúdos de imagens de acordo com o seu objetivo de uso. Além disso, é ensinado também como utilizar os softwares específicos para edição de imagens, como Photoshop e Gimp.</div>
                `;
                infografico.update = updateMapPainel;
            }

        this.map.build.push( new Building( this.planetario, 0, 0, 680, 510, 
            new Building( loadImage('assets/DESIGN/predio_planetario_brilho.png'), 0, 0, 680, 510 ) ) );
        this.map.build[4].func =
            function(){
                var div = document.getElementById("gamestartscreen"); 
                div.innerHTML = "Erivan";
                infografico.update = updateMapPainel;
            }

        this.map.build.push( new Building( this.voltar_design, 0, 0, 680, 510, 
            new Building( loadImage('assets/DESIGN/voltar_design.png'), 0, 0, 680, 510 ) ) );
        this.map.build[5].func =
            function(){
                var div = document.getElementById("gamestartscreen"); 
                div.innerHTML = "Erivan";
                infografico.update = updateInitial;
            }

        this.buttonDSN = new Building( this.fechar, 0, 0, 680, 510, 
            new Building( loadImage('assets/DESIGN/design_fechar.png'), 0, 0, 680, 510 ) );
        this.buttonDSN.func =
            function(){
                infografico.update = updateMap;
            }

        this.buttonINT = new Building( this.fechar, 0, 0, 680, 510, 
            new Building( loadImage('assets/DESIGN/design_fechar.png'), 0, 0, 680, 510 ) );
        this.buttonINT.func =
            function(){
                var div = document.getElementById("gamestartscreen"); 
                div.style.display = "none";
                infografico.update = updateInitial;
            }

        /*this.map.build.push( new Building( this.design_fechar, 0, 0, 680, 510, 
            new Building( loadImage('assets/DESIGN/design_fechar.png'), 0, 0, 680, 510 ) ) );
        this.map.build[5].func =
            function(){
                infografico.update = updateMap;
            }*/

        //var a = function(){
        //    var div = document.getElementById("gamestartscreen"); 
        //    div.style.display = "none";
       //    infografico.update = updateMap; 
        //}
        //this.buttonDSN = new Button( loadImage('./assets/rocket.png'), 1200 - 50, 50, 50, 50, a );

        windowResized();
    }

    renderShooter(){
        /* Render shooter */
        this.shoot.update();
        this.shoot.draw();
    }

    renderPlanets(){
        for (var i = 0; i < this.planets.length ; i++) {
            this.planets[i].draw();
        }
    }

    renderAstrounaut(){
        for (var i = 0; i < this.planets.length; i++) {
            this.astronaut.orbit( this.planets[i] );
        }
        this.astronaut.newton();
        this.astronaut.draw();
    }

    renderRocket(){
        for (var i = 0; i < this.planets.length ; i++) {
            this.rocket.orbit( this.planets[i] );
        }
        this.rocket.newton();
        this.rocket.draw();
    }

    update(){
        this.update = updateIntrodution;
    }
}

function setup(){
    infografico = new Infografico();

    a = loadImage('./assets/rocket.png', img => {
        img.loadPixels();
        img.pontos = a.imageData.data;
        img.updatePixels();
    });

    bck1 = loadImage('./assets/ESTRELAS - 1.png');
    bck2 = loadImage('./assets/ESTRELAS - 2.png');

    bck = bck1;
    back = loadImage('./assets/TELA_INICIAL.png');
}

function sizeFactor(){
    return ( windowWidth )/1920;
}

var cont = 0;


function draw(){
    cont++;
    
    scale( sizeFactor() );
    imageMode(CORNER);
    background( 3,18,45 );
    //image( back , 0, 0 );
    infografico.update();

    if( cont >= 120 ){
        if( bck == bck1 )
            bck = bck2;
        else if( bck == bck2 )
            bck = bck1;
        cont = 0;
    }
}

function windowResized() {
    var valor = document.getElementById("mycanvas").offsetTop;
    resizeCanvas( windowWidth, (windowWidth ) * 0.5625);
    document.getElementById("gamestartscreen").style.top = ( sizeFactor() * 100 + (valor + sizeFactor() * 200) ) + "px";
}

function mouseReleased(){
    if( infografico.painel )
        if( infografico.painel.button )
            infografico.painel.button.released = true;

    if( infografico.map )
        if( infografico.map.button )
            infografico.map.button.released = true;

    if( infografico.buttonDSN )
        if( infografico.buttonDSN )
            infografico.buttonDSN.released = true;
}


function coordenadasTan(x,y) {
    var yy = y;
    var xx = x;
    var ta;
    var t = 0;
    if (xx != 0) {
      ta = yy/xx;
      t = atan(ta);
      if (xx<0)
        t+=PI;
      else if (xx>0 && yy<0)
        t+=TWO_PI;
    }

    return t;
}
