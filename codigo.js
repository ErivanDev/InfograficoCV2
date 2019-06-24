planetsNames = ['terra','audiovisual','design','jogos','sistemas'];
//style="word-wrap: normal;white-space: nowrap;"
textPredios = {
    'iniciais' : {
        0 : `
        <div class="painel" >
            <div class="informacao" >
            Há pouco tempo, em uma galáxia não muito distante...
            Um jovem astronauta iniciou uma viagem espacial revolucionária a bordo de seu pequeno foguete.
            </div>
        </div>    
        `,
        1 : `
        <div class="painel" >
            <div class="informacao" >
            Ele foi convocado para uma importante missão, chamada
            "Missão Media Day"
            </div>
        </div>    
        `,
        2 : `
        <div class="painel" >
            <div class="informacao" >
            Que recebeu esse nome devido a um projeto de extensão itinerante da Universidade Federal do Ceará.
            Cujo objetivo é difundir conhecimento e despertar as habilidades dos participantes através do contato direto e prático com as áreas de estudo do curso de Sistemas e Mídias Digitais, que incluem Design, Audiovisual, Sistemas e Jogos. 
            </div>
        </div>    
        `,
        3 : `
        <div class="painel" >
            <div class="informacao" >
            A principal ideia do projeto é divulgar em diversas cidades do Estado do Ceará os trabalhos desenvolvidos no curso e estimular o interesse pela Universidade.
            Assim como os participantes das oficinas do projeto de extensão, o viajante espacial precisa adquirir o máximo de conhecimento possível das áreas de estudo do curso de Sistemas e Mídias Digitais.
            </div>
        </div>    
        `,
        4 : `
        <div class="painel" >
            <div class="informacao" >
            E pra isso, ele precisa da sua ajuda.
            Impulsione o foguete na direção dos planetas e explore suas cidades ao lado desse jovem astronauta.
            </div>
        </div>    
        `
    },
    'design' : {
        'lapis' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > DESENHO </span>
            </div>
            <div class="informacao" >
            Na subárea de desenho, o participante encontrará oficinas tanto de desenho analógico quanto de desenho digital. As oficinas de desenho analógico trazem conhecimento à respeito das melhores técnicas para desenho à mão livre, pintura com lápis de cor, entre outros. O desenho digital é feito a partir de processos digitais, e os participantes irão aprender a utilizar softwares de computador e equipamentos que auxiliem na produção de ilustrações digitais, pintura digital, entre outros. 
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://pt.wikipedia.org/wiki/Desenho"> Clique aqui para saber mais </a>
            </div>
        </div>    
        `, 
        'criatividade' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > CRIATIVIDADE </span>
            </div>
            <div class="informacao" >
            São oferecidas oficinas que estimulam a produção criativa do participante e sua capacidade de invenção, reinvenção e inovação. Serão apresentados conceitos que tornarão amplo o repertório de cada pessoa, permitindo que a partir desse repertório e da sua vivência, criem novas ideias.
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://manualdasecretaria.com.br/criatividade/"> Clique aqui para saber mais </a>
            </div>
        </div>
        `,
        'interface' : `
        <div class="painel" >
            <div style="width: 100%; text-align: center; font-size: 4vw; font-weight: 900">
                <span class="titulo" > DESIGN DE INTERFACES </span>
            </div>
            <div class="informacao" >
            Na subárea de Design de Interfaces Gráficas, serão apresentados os conceitos de design de interfaces, usabilidade, design gráfico, entre outros. Além de aprender as técnicas para utilização de softwares da área, os participantes também serão orientados sobre conceitos de usabilidade, que permitem que se pense na interação do usuário com a sua interface gráfica.
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://www.chiefofdesign.com.br/ui-design/"> Clique aqui para saber mais </a>
            </div>
        </div>
        `,
        'edicao' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > EDIÇÃO DE IMAGEM </span>
            </div>
            <div class="informaca o" >
            Nas oficinas relacionadas à edição de imagem os participantes irão aprender a alterar e manusear os conteúdos de imagens de acordo com o seu objetivo de uso. Além disso, é ensinado também como utilizar os softwares específicos para edição de imagens, como Photoshop e Gimp.
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://blog.emania.com.br/tudo-que-voce-precisa-saber-sobre-a-edicao-de-fotos/"> Clique aqui para saber mais </a>
            </div>
        </div>    
        `,
        'planetario' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > DESIGN </span>
            </div>
            <div class="informacao" >
            Na área de Design, o projeto apresenta oficinas de Desenho, Edição de Imagem, Design de Interfaces Gráficas, Criatividade, entre outras. Conhecimento que pode levar para oportunidades de criação e produção de peças gráficas para o meio digital, criação de logotipos, marcas, embalagens, criação visual de sites, blogs, banners para a internet, desenvolvimento de anúncios, panfletos, cartazes, etc. 
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://www.guiadacarreira.com.br/guia-das-profissoes/design-grafico/"> Clique aqui para saber mais </a>
            </div>
        </div>
        ` 
    },
    'audiovisual' : {
        '3d' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > MODELAGEM 3D </span>
            </div>
            <div class="informacao" >
            As oficinas relacionadas à Modelagem 3D, apresentam como utilizar softwares de modelagem e as diversas técnicas que podem ser utilizadas para modelar. A modelagem 3D também traz conhecimentos que podem ser utilizados na área de Animação.
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://saga.art.br/o-que-e-modelagem-3d/"> Clique aqui para saber mais </a>
            </div>
        </div>
        `,
        'animacao' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > ANIMAÇÃO </span>
            </div>
            <div class="informacao" >
            As oficinas de Animação trazem conceitos de desenho para criação de filmes quadro a quadro. Desenvolvendo e produzindo animações digitais ou analógicas, usando técnicas 2D (bidimensional), 3D (tridimensional), stop motion, entre outras.
            </div>
            <div class="tituloParent">
                <a target="_blank" href="http://www.mundogump.com.br/os-12-principios-da-animacao/"> Clique aqui para saber mais </a>
            </div>    
        </div>
        `,
        'fotografia' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > FOTOGRAFIA </span>
            </div>
            <div class="informacao" >
            Na subárea de fotografia, os participantes aprenderão técnicas fotográficas e diferentes orientações sobre como utilizar os equipamentos e como aprimorar sua forma de enxergar oportunidades de fotografar.
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://pt.wikipedia.org/wiki/Fotografia"> Clique aqui para saber mais </a>
            </div>
        </div>
        `,
        'narrativas' : `
        <div class="paine l" >
            <div class="tituloParent" >
                <span class="titulo" > NARRATIVAS </span>
            </div>
            <div class="informacao" >
            Nas oficinas de Narrativas, os participantes serão orientados sobre conceitos audiovisuais para a criação de roteiros a partir da sua criatividade. São apresentados também técnicas e softwares que auxiliarão nessa produção.
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://vidmonsters.com/blog/narrativa-audiovisual/"> Clique aqui para saber mais </a>
            </div>    
        </div>
        `,
        'planetario' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > AUDIOVISUAL </span>
            </div>
            <div class="informacao" >
            Na área de Audiovisual, são oferecidas oficinas de Narrativas, Fotografia, Modelagem 3D, Animação, entre outras. A área de Audiovisual permite a participação produção de vídeos, cobertura de eventos, vídeos institucionais, videoaulas, animações, vídeos publicitários, documentais, institucionais e jornalísticos, vinhetas, etc. 
            </div>
            <div class="tituloParent">
                <a target="_blank" href="http://tutano.trampos.co/15344-guia-de-profissoes-producao-audiovisual/"> Clique aqui para saber mais </a>
            </div>    
        </div>
        ` 
    },
    'sistemas' : {
        'logica' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > LÓGICA DE PROGRAMAÇÃO </span>
            </div>
            <div class="informacao" >
            Na subárea de Lógica de Programação é ensinado o modo de escrever programas de computador, que mais tarde serão implementados, utilizando algoritmos. Um algoritmo é a sequência de passos para se executar uma função. 
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://becode.com.br/melhor-forma-de-aprender-logica-de-programacao/"> Clique aqui para saber mais </a>
            </div>    
        </div>
        `,
        'arduino' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > ARDUÍNO </span>
            </div>
            <div class="informacao" >
            Nas oficinas de Arduíno é ensinado como utilizar o hardware único, de placa única, para criar prototipagens eletrônicas. O microcontrolador cria ferramentas fáceis de se usar por principiantes e profissionais para automatização, criação de robôs, entre outros. 
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://www.filipeflop.com/blog/o-que-e-arduino/"> Clique aqui para saber mais </a>
            </div>
        </div>
        `,
        'web' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > DESENVOLVIMENTO WEB </span>
            </div>
            <div class="informacao" >
            Na subárea de Desenvolvimento Web são ensinados conceitos de programação utilizados para desenvolvimento de sites, entre outros.
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://usemobile.com.br/desenvolvimento-web-processo/"> Clique aqui para saber mais </a>
            </div>
        </div>
        `,
        'bd' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > BANCO DE DADOS </span>
            </div>
            <div class="informacao" >
            Nas oficinas relacionadas a Banco de Dados, são apresentados softwares, recursos e conceitos a respeito da criação, manipulação e interação das informações de um Banco de Dados com os usuários.
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://tecnoblog.net/245120/banco-de-dados-importancia/"> Clique aqui para saber mais </a>
            </div>    
        </div>
        `,
        'planetario' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > SISTEMAS </span>
            </div>
            <div class="informacao" >
            Na área de Sistemas, são apresentadas oficinas relacionadas à Lógica de Programação, Arduíno, Desenvolvimento Web, Banco de Dados, entre outras. O conhecimento na área permite atuação em projetar e desenvolver sistemas, modernizar o processo de comunicação de uma empresa, criando, adaptando e instalando programas, fazer a interligação entre a administração da empresa e a área de computação, desenvolver softwares para planejar e administrar rotas, sistemas de armazenagem e o tempo de entrega de produtos, por exemplo.
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://guiadoestudante.abril.com.br/profissoes/sistemas-de-informacao/"> Clique aqui para saber mais </a>
            </div>    
        </div>
        ` 
    },
    'jogos' : {
        'jogos' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > CONCEPÇÃO DE JOGOS </span>
            </div>
            <div class="informacao" >
            Nas oficinas de Concepção de Jogos são apresentados os conceitos fundamentais para o desenvolvimento de um jogo digital ou analógico. 
            </div>
            <div class="tituloParent">
                <a target="_blank" href="http://www.formuladejogos.com.br/single-post/2016/05/03/2%C2%BA-M%C3%B3dulo-Game-Design"> Clique aqui para saber mais </a>
            </div>    
        </div>
        `,
        'personagens' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > CRIAÇÃO DE PERSONAGENS <br> PARA JOGOS </span>
            </div>
            <div class="informacao" >
            Na subárea de Criação de Personagens para Jogos, os participantes são introduzidos a conceitos e técnicas que facilitem o desenvolvimento de personagens para suas narrativas de jogos, assim como o conceito visual do personagem, desenho, entre outros.
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://www.designerd.com.br/design-de-games-criacao-dos-personagens/"> Clique aqui para saber mais </a>
            </div>    
        </div>
        `,
        'tabuleiro' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > JOGOS DE TABULEIRO </span>
            </div>
            <div class="informacao" >
            Nas oficinas relacionadas a Jogos de Tabuleiro são ensinadas técnicas para a produção de jogos analógicos de tabuleiro.
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://gamedevelopment.tutsplus.com/pt/articles/how-to-learn-board-game-design-and-development--gamedev-11607"> Clique aqui para saber mais </a>
            </div>    
        </div>
        `,
        'planetario' : `
        <div class="painel" >
            <div class="tituloParent" >
                <span class="titulo" > JOGOS </span>
            </div>
            <div class="informacao" >
            Na área de Jogos, as oficinas são relacionadas a Concepção de Jogos, Criação de Personagens para Jogos, Jogos de Tabuleiro, entre outros. O mercado da área permite atuação na produção direta de games, na concepção de ambientes e cenários 3D, além de em projetos ligados ao cinema, televisão, teatro, animações, propaganda, educação e entretenimento. 
            </div>
            <div class="tituloParent">
                <a target="_blank" href="https://vestibular.mundoeducacao.bol.uol.com.br/guia-de-profissoes/jogos-digitais.htm"> Clique aqui para saber mais </a>
            </div>    
        </div>
        ` 
    }
}

rocketLoading = function(){
    
    fill(255,0,0);
    ellipse(0,-240,430,560);
    
    fill(255);
    ellipse(0,0,260,560);
    rect(-131,-100,262,100);

    fill(3,18,45);
    ellipse(0,-340,270,220);
    rect(-136,-480,272,148);

    fill(255);
    ellipse(0,-120,260,560);
    
    fill(3,18,45);
    rect(-134/2-40,-498,270/2+80,188);

    fill(255);
    rect(-134/2,-520,270/2,218);
    
    fill(255);
    rect(-94,-310,188,300);
    
    fill(190,190,190);
    rect(-106,-320,212,40);
    rect(-130,-20,260,40);

    fill(255,0,0);
    ellipse(0,-280,60,360);
    
    fill(118,182,222);
    ellipse(0,0,120,120);
    
    fill(255,0,0);
    arc(0,200,178,160,0,3.14);
}

var imagesToLoad = 0, imagesLoaded = 0, angFactToLoad = 0;

updateLoading = function(){
    fill(255);
    arc(1920/2, 1080/2, 1080/1.182, 1080/1.182, 0, angFactToLoad * imagesLoaded );
    fill(3,18,45);
    ellipse(1920/2, 1080/2, 1080/1.26, 1080/1.26);
    
    fill(242, 242, 242);
    ellipse(1920/2, 1080/2, 1080/2, 1080/2);

    strokeWeight(4);
    fill(194, 194, 194);
    stroke(255)
    ellipse(1920/2-100, 1080/2+100, 1080/8, 1080/8);
    ellipse(1920/2, 1080/2+140, 1080/16, 1080/16);
    ellipse(1920/2-80, 1080/2-140, 1080/10, 1080/10);
    ellipse(1920/2+10, 1080/2-60, 1080/12, 1080/12);
    ellipse(1920/2+160, 1080/2+60, 1080/10, 1080/10);
    ellipse(1920/2+160, 1080/2-40, 1080/16, 1080/16);
    noStroke();

    push()
    //translate( 1920/2, 1080/2 );
    translate(1920/2 + cos(angFactToLoad * imagesLoaded ) * 1080/2.5 , 1080/2 + sin(angFactToLoad * imagesLoaded ) * 1080/2.5 );
    rotate(angFactToLoad * imagesLoaded );
    scale(0.2);
    rocketLoading();
    pop()

    if( imagesToLoad == imagesLoaded ) this.update = updateIntrodution;
}

var textoInicial = 0;

updateIntrodution = function(){
    this.rocket.ang = 3.14;
    this.renderPlanets();
    this.renderAstrounaut();
    this.rocket.draw();

    this.astronaut.ang = 0;
    if( this.astronaut.pos.x < this.planets[0].pos.x + cos(45) * ( this.planets[0].radius + 120 ) )
        this.astronaut.pos.x += 0.3;
    else{
        var div = document.getElementById("gamestartscreen"); 
        div.innerHTML = textPredios['iniciais'][textoInicial]; 
        document.getElementById("gamestartscreen").style.display = "block";
        this.update = updatePainel;
    }
}

updatePainel = function(){
    this.renderPlanets();
    this.rocket.draw();
    
    this.painelInicial.draw();
    this.buttonINT.draw();
    this.buttonANV.draw();

    if( this.buttonINT.clicked && this.buttonINT.func != undefined ){
        this.buttonINT.func();
        this.buttonINT.clicked = false;
    }

    if( this.buttonANV.clicked && this.buttonANV.func != undefined ){
        this.buttonANV.func();
        this.buttonANV.clicked = false;
    }
}

var learning = 0, know = false;

updateInitial = function(){
    if (!mouseIsPressed && this.shoot.shooting) this.update = updateLaunch;

    this.renderPlanets();
    this.renderShooter();
    this.rocket.draw();

    if( !know ){
        if( learning > 100 ) learning = 0;

        fill(255);
        ellipse( this.rocket.pos.x, this.rocket.pos.y + learning, 50, 50 ); 
        rect( this.rocket.pos.x-4, this.rocket.pos.y, 8, 100); 
        noFill();
        strokeWeight(4);
        stroke(255);
        ellipse( this.rocket.pos.x, this.rocket.pos.y + 100, 60, 60 ); 
        noStroke(); 

        learning+=1;
    }
    if( mouseIsPressed ) know = true;
}

updateLaunch = function(){
    this.renderPlanets();
    this.renderShooter();
    this.rocket.drawTraj();
    this.renderRocket();

    if( this.rocket.pos.y < 0 ) this.rocket.pos.y = 1080;
    if( this.rocket.pos.y > 1080 ) this.rocket.pos.y = 0;
    if( this.rocket.pos.x < 0) this.rocket.pos.x = 1920;
    if( this.rocket.pos.x > 1920 ) this.rocket.pos.x = 0;

    for (var i = 1; i < this.planets.length ; i++) {
        if( this.planets[i].mass != 0 ) {
            if( this.planets[i].pos.dist( this.rocket.pos ) < this.planets[i].radius + this.rocket.radius + this.distance_minus_planet + 50 ){
                let v1 = this.rocket.vel.heading() - 3.14/2;
                let v2 = coordenadasTan( this.rocket.pos.x - this.planets[i].pos.x , this.rocket.pos.y - this.planets[i].pos.y );
                this.rocket.ang = ( v1 + v2 )/2;

                fill(255,0,0);
                line( this.planets[i].pos.x + cos(v2), this.planets[i].pos.x + sin(v2), this.planets[i].pos.x + cos(v2) * 34, this.planets[i].pos.x + sin(v2) * 34  )
            }
            if( this.planets[i].pos.dist( this.rocket.pos ) < this.planets[i].radius + this.rocket.radius + this.distance_minus_planet ){
                this.rocket.planet = this.planets[i];
                
                if( this.currentPlanet != undefined ) 
                    this.planets[ planetsNames.indexOf( this.currentPlanet ) ].mass = 250;
            
                this.currentPlanet = planetsNames[i];
                this.planets[i].mass = 0;
                this.rocket.dist = this.planets[i].pos.dist( this.rocket.pos );
                this.rocket.stop = true;
                this.rocket.orbitAng = coordenadasTan( this.rocket.pos.x - this.planets[i].pos.x , this.rocket.pos.y - this.planets[i].pos.y );
                //atan2( this.planets[i].pos.dist( this.rocket.pos ).y, this.planets[i].pos.dist( this.rocket.pos ).x )
                this.rocket.inicialAng = this.rocket.orbitAng;
                
                //if( this.rocket.vel.heading() < -2.09  )
                    this.rocket.dir = 0.14;
                //else {
                //    this.rocket.dir =  0.2;
                //}
                console.log( "heading: " + this.rocket.vel.heading() );
                this.update = updateOrbit;
            }
        }
    }
}

updateOrbit = function(){
    this.renderPlanets();
    this.rocket.ang = coordenadasTan( this.rocket.pos.x - this.rocket.planet.pos.x , this.rocket.pos.y - this.rocket.planet.pos.y ) + 3.14;
    this.rocket.drawTraj();
    this.rocket.draw();
    
    let x = this.rocket.planet.pos.x + cos(this.rocket.orbitAng) * this.rocket.dist;
    let y = this.rocket.planet.pos.y + sin(this.rocket.orbitAng) * this.rocket.dist;
    this.rocket.pos = createVector( x, y ); 
    this.rocket.orbitAng -= this.rocket.dir; //( this.rocket.vel.x + this.rocket.vel.y )/200;
    
    //console.log(this.rocket.orbitAng);
    if( abs( this.rocket.orbitAng - this.rocket.inicialAng ) > 3.14 )
        this.update = updateMap;
}

updateMap = function(){
    this.map[ this.currentPlanet ].draw();

    document.getElementById("gamestartscreen").style.display = "none";

    for( var i=0; i<this.map[ this.currentPlanet ].build.length; i++)
        this.map[ this.currentPlanet ].build[i].draw();

    for( var i=0; i<this.map[ this.currentPlanet ].build.length; i++)
        if( this.map[ this.currentPlanet ].build[i].collision() )
            this.map[ this.currentPlanet ].build[i].glowing.draw();

    for( var i=0; i<this.map[ this.currentPlanet ].build.length; i++)
        if( this.map[ this.currentPlanet ].build[i].clicked && this.map[ this.currentPlanet ].build[i].func != undefined ){
            //console.log( "predio", this.map[ this.currentPlanet ].build[i] );
            this.map[ this.currentPlanet ].build[i].func();
            this.map[ this.currentPlanet ].build[i].clicked = false;
        }
}

updateMapPainel = function(){
    document.getElementById("gamestartscreen").style.display = "block";
    this.map[ this.currentPlanet ].draw();

    for( var i=0; i<this.map[ this.currentPlanet ].build.length; i++)
        this.map[ this.currentPlanet ].build[i].draw();

    this.map[ this.currentPlanet ].painel.draw();
    this.map[ this.currentPlanet ].button.draw();

    if( this.map[ this.currentPlanet ].button.clicked && this.map[ this.currentPlanet ].button.func != undefined ){
        this.map[ this.currentPlanet ].button.func();
        this.map[ this.currentPlanet ].button.clicked = false;
    }
}

imageLoaded = function(){
    imagesLoaded++;
}

class Infografico
{
    constructor(){
        this.currentPlanet = undefined;

        this.sprites = { 
            'planeta_terra' : loadImage('assets/terra.png', imageLoaded ),
            'planeta_audiovisual' : loadImage('assets/PLANETA - AUDIOVISUAL.png', imageLoaded ),
            'planeta_design' : loadImage('assets/PLANETA - DESING.png', imageLoaded ),
            'planeta_jogos' : loadImage('assets/PLANETA - JOGOS.png', imageLoaded ),
            'planeta_sistemas' : loadImage('assets/PLANETA - SISTEMA.png', imageLoaded ),
            'astronaut' : loadImage('assets/astronaut.png', imageLoaded ),

            'design_map' : loadImage('assets/DESIGN/DESIGN - BASE MAPA.png', imageLoaded ),
            'design_popup' : loadImage('assets/DESIGN/design_popup.png', imageLoaded ),
            'design_lapis' : loadImage('assets/DESIGN/predio_lapis.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['design_lapis'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'design_lapis_brilho' : loadImage('assets/DESIGN/predio_lapis_brilho.png', imageLoaded ),
            'design_criatividade' : loadImage('assets/DESIGN/predio_criatividade.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['design_criatividade'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }), 
            'design_criatividade_brilho' : loadImage('assets/DESIGN/predio_criatividade_brilho.png', imageLoaded ),
            'design_interface' : loadImage('assets/DESIGN/predio_interface.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['design_interface'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }), 
            'design_interface_brilho' : loadImage('assets/DESIGN/predio_interface_brilho.png', imageLoaded ),
            'design_edicao' : loadImage('assets/DESIGN/predio_edicao.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['design_edicao'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }), 
            'design_edicao_brilho' : loadImage('assets/DESIGN/predio_edicao_brilho.png', imageLoaded ),
            'design_planetario' : loadImage('assets/DESIGN/predio_planetario.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['design_planetario'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }), 
            'design_planetario_brilho' : loadImage('assets/DESIGN/predio_planetario_brilho.png', imageLoaded ),
            'design_voltar' : loadImage('assets/DESIGN/voltar_design.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['design_voltar'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }), 
            'design_voltar_brilho' : loadImage('assets/DESIGN/voltar_design_brilho.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['design_voltar_brilho'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }), 
            'design_fechar' : loadImage('assets/DESIGN/design_fechar.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['design_fechar'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),

            'sistemas_map' : loadImage('assets/SISTEMAS/SISTEMAS - BASE.png', imageLoaded ),
            'sistemas_popup' : loadImage('assets/SISTEMAS/sistemas_popup.png', imageLoaded ),
            'sistemas_arduino' : loadImage('assets/SISTEMAS/predio_arduino.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['sistemas_arduino'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'sistemas_arduino_brilho' : loadImage('assets/SISTEMAS/predio_arduino_brilho.png', imageLoaded ),
            'sistemas_bd' : loadImage('assets/SISTEMAS/predio_bd.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['sistemas_bd'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'sistemas_bd_brilho' : loadImage('assets/SISTEMAS/predio_bd_brilho.png', imageLoaded ),
            'sistemas_prog' : loadImage('assets/SISTEMAS/predio_prog.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['sistemas_prog'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'sistemas_prog_brilho' : loadImage('assets/SISTEMAS/predio_prog_brilho.png', imageLoaded ),
            'sistemas_web' : loadImage('assets/SISTEMAS/predio_web.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['sistemas_web'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'sistemas_web_brilho' : loadImage('assets/SISTEMAS/predio_web_brilho.png', imageLoaded ),
            'sistemas_planetario' : loadImage('assets/SISTEMAS/predio_planetario.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['sistemas_planetario'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }), 
            'sistemas_planetario_brilho' : loadImage('assets/SISTEMAS/predio_planetario_brilho.png', imageLoaded ),
            'sistemas_voltar' : loadImage('assets/SISTEMAS/voltar_sistemas.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['sistemas_voltar'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'sistemas_voltar_brilho' : loadImage('assets/SISTEMAS/voltar_sistemas_brilho.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['sistemas_voltar_brilho'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'sistemas_fechar' : loadImage('assets/SISTEMAS/sistemas_fechar.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['sistemas_fechar'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),

            'jogos_map' : loadImage('assets/JOGOS/JOGOS - BASE.png', imageLoaded ),
            'jogos_popup' : loadImage('assets/JOGOS/jogos_popup.png', imageLoaded ),
            'jogos_boneco' : loadImage('assets/JOGOS/predio_boneco.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['jogos_boneco'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'jogos_boneco_brilho' : loadImage('assets/JOGOS/predio_boneco_brilho.png', imageLoaded ),
            'jogos_jogos' : loadImage('assets/JOGOS/predio_jogos.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['jogos_jogos'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'jogos_jogos_brilho' : loadImage('assets/JOGOS/predio_jogos_brilho.png', imageLoaded ),
            'jogos_tabuleiro' : loadImage('assets/JOGOS/predio_tabuleiro.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['jogos_tabuleiro'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'jogos_tabuleiro_brilho' : loadImage('assets/JOGOS/predio_tabuleiro_brilho.png', imageLoaded ),
            'jogos_planetario' : loadImage('assets/JOGOS/predio_planetario.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['jogos_planetario'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }), 
            'jogos_planetario_brilho' : loadImage('assets/JOGOS/predio_planetario_brilho.png', imageLoaded ),
            'jogos_voltar' : loadImage('assets/JOGOS/voltar_jogos.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['jogos_voltar'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'jogos_voltar_brilho' : loadImage('assets/JOGOS/voltar_jogos_brilho.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['jogos_voltar_brilho'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'jogos_fechar' : loadImage('assets/JOGOS/jogos_fechar.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['jogos_fechar'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),

            'audiovisual_map' : loadImage('assets/AUDIOVISUAL/AUDIO - BASE MAPA.png', imageLoaded ),
            'audiovisual_popup' : loadImage('assets/AUDIOVISUAL/audiovisual_popup.png', imageLoaded ),
            'audiovisual_3d' : loadImage('assets/AUDIOVISUAL/predio_3d.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['audiovisual_3d'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'audiovisual_3d_brilho' : loadImage('assets/AUDIOVISUAL/predio_3d_brilho.png', imageLoaded ),
            'audiovisual_animacao' : loadImage('assets/AUDIOVISUAL/predio_animacao.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['audiovisual_animacao'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'audiovisual_animacao_brilho' : loadImage('assets/AUDIOVISUAL/predio_animacao_brilho.png', imageLoaded ),
            'audiovisual_fotografia' : loadImage('assets/AUDIOVISUAL/predio_fotografia.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['audiovisual_fotografia'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'audiovisual_fotografia_brilho' : loadImage('assets/AUDIOVISUAL/predio_fotografia_brilho.png', imageLoaded ),
            'audiovisual_narrativas' : loadImage('assets/AUDIOVISUAL/predio_narrativas.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['audiovisual_narrativas'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'audiovisual_narrativas_brilho' : loadImage('assets/AUDIOVISUAL/predio_narrativas_brilho.png', imageLoaded ),
            'audiovisual_planetario' : loadImage('assets/AUDIOVISUAL/predio_planetario.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['audiovisual_planetario'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }), 
            'audiovisual_planetario_brilho' : loadImage('assets/AUDIOVISUAL/predio_planetario_brilho.png', imageLoaded ),
            'audiovisual_voltar' : loadImage('assets/AUDIOVISUAL/voltar_audiovisual.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['audiovisual_voltar'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'audiovisual_voltar_brilho' : loadImage('assets/AUDIOVISUAL/voltar_audiovisual_brilho.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['audiovisual_voltar_brilho'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),
            'audiovisual_fechar' : loadImage('assets/AUDIOVISUAL/audiovisual_fechar.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['audiovisual_fechar'].imageData.data;
                img.updatePixels();
                imageLoaded();
            }),

            'avancar' : loadImage('assets/botao_avancar.png', img => {
                img.loadPixels();
                img.pontos = infografico.sprites['avancar'].imageData.data;
                img.updatePixels();
                imageLoaded();
            })
        };

        imagesToLoad = Object.keys( this.sprites ).length;
        angFactToLoad = 6.28/imagesToLoad;

        this.planets = [];
        this.planets.push( new Planet( this.sprites['planeta_terra'],  920, 610,   0,  0) );
        this.planets.push( new Planet( this.sprites['planeta_audiovisual'],  760, 250, 140, 250) ); //900
        this.planets.push( new Planet( this.sprites['planeta_design'], 1260, 800, 140, 250) ); //900
        this.planets.push( new Planet( this.sprites['planeta_jogos'],  440, 750, 140, 250) ); //200
        this.planets.push( new Planet( this.sprites['planeta_sistemas'], 1480, 400, 140, 250) );
        
        let x = this.planets[0].pos.x + cos( 45) * ( this.planets[0].radius + 15 ) - 50;
        let y = this.planets[0].pos.y + sin(-45) * ( this.planets[0].radius + 15 ) - 25;
        this.astronautSpr = this.sprites['astronaut'];
         
        this.astronaut = new Player( x, y, 0, 0, 255, 255, 30, 15, false, this.astronautSpr );
        this.astronaut.orbit = function(body){};
        this.astronaut.newton = function(body){};
        this.astronaut.ang = 6.28/8;
        
        this.rocket = new Player( x+100, y-20, 0, 0, 0, 255, 255, 20, true);
        
        this.shoot = new Shooter( this.rocket );

        //this.space = loadImage('assets/space.jpg');

        this.distance_minus_planet = 5;
        
        this.painelSpr = this.sprites['design_popup'];
        this.painelInicial = new Painel( this.painelSpr, 0, 0, 400, 400 );

        this.map = {};

        
        
        this.loadDesign();
        this.loadSistemas();
        this.loadJogos();
        this.loadAudiovisual();

        this.buttonANV = new Building( this.sprites['avancar'], 0, 0, 680, 510, 
            new Building( this.sprites['avancar'], 0, 0, 680, 510 ) );
        this.buttonANV.func =
            function(){
                textoInicial++;
                if( textPredios['iniciais'][textoInicial] == undefined ){
                    var div = document.getElementById("gamestartscreen"); 
                    div.style.display = "none";
                    infografico.update = updateInitial;
                }
                else {
                    var div = document.getElementById("gamestartscreen"); 
                    div.innerHTML = textPredios['iniciais'][textoInicial]; 
                    document.getElementById("gamestartscreen").style.display = "block";
                    this.update = updatePainel;       
                }         
            }

        this.buttonINT = new Building( this.sprites['design_fechar'], 0, 0, 680, 510, 
            new Building( this.sprites['design_fechar'], 0, 0, 680, 510 ) );
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
        this.update = updateLoading;
    }

    loadDesign(){
        this.map['design'] = new Mapa( this.sprites['design_map'], 0, 0);
        this.map['design'].clicked = false;
        this.map['design'].build = [];
        
        this.map['design'].build.push( new Building( this.sprites['design_lapis'], 0, 0, 680, 510, 
            new Building( this.sprites['design_lapis_brilho'], 0, 0, 680, 510 ) ) );
        this.map['design'].build[0].func = mostrarTexto(  textPredios['design']['lapis'] )

        this.map['design'].build.push( new Building( this.sprites['design_criatividade'], 0, 0, 680, 510, 
            new Building( this.sprites['design_criatividade_brilho'], 0, 0, 680, 510 ) ) );
        this.map['design'].build[1].func = mostrarTexto(  textPredios['design']['criatividade'] )

        this.map['design'].build.push( new Building( this.sprites['design_interface'], 0, 0, 680, 510, 
            new Building( this.sprites['design_interface_brilho'], 0, 0, 680, 510 ) ) );
        this.map['design'].build[2].func = mostrarTexto(  textPredios['design']['interface'] )

        this.map['design'].build.push( new Building( this.sprites['design_edicao'], 0, 0, 680, 510, 
            new Building(  this.sprites['design_edicao_brilho'], 0, 0, 680, 510 ) ) );
        this.map['design'].build[3].func = mostrarTexto( textPredios['design']['edicao'] );
        
        this.map['design'].build.push( new Building( this.sprites['design_planetario'], 0, 0, 680, 510, 
            new Building(  this.sprites['design_planetario_brilho'], 0, 0, 680, 510 ) ) );
        this.map['design'].build[4].func = mostrarTexto( textPredios['design']['planetario'] );

        this.map['design'].build.push( new Building( this.sprites['design_voltar'], 0, 0, 680, 510, 
            new Building( this.sprites['design_voltar_brilho'], 0, 0, 680, 510 ) ) );
        this.map['design'].build[5].func = function(){
            infografico.update = updateInitial;
        };

        this.map['design'].button = new Building( this.sprites['design_fechar'], 0, 0, 680, 510, 
            new Building( this.sprites['design_fechar'], 0, 0, 680, 510 ) );
            this.map['design'].button.func =
            function(){
                infografico.update = updateMap;
            }

        this.map['design'].painel = new Painel( this.sprites['design_popup'], 0, 0, 400, 400 );
    }

    loadSistemas(){
        this.map['sistemas'] = new Mapa( this.sprites['sistemas_map'], 0, 0);
        this.map['sistemas'].clicked = false;
        this.map['sistemas'].build = [];

        this.map['sistemas'].build.push( new Building( this.sprites['sistemas_arduino'], 0, 0, 680, 510, 
            new Building( this.sprites['sistemas_arduino_brilho'], 0, 0, 680, 510 ) ) );
        this.map['sistemas'].build[0].func = mostrarTexto( textPredios['sistemas']['arduino'] );

        this.map['sistemas'].build.push( new Building( this.sprites['sistemas_bd'], 0, 0, 680, 510, 
            new Building( this.sprites['sistemas_bd_brilho'], 0, 0, 680, 510 ) ) );
        this.map['sistemas'].build[1].func = mostrarTexto( textPredios['sistemas']['bd'] );

        this.map['sistemas'].build.push( new Building( this.sprites['sistemas_prog'], 0, 0, 680, 510, 
            new Building( this.sprites['sistemas_prog_brilho'], 0, 0, 680, 510 ) ) );
        this.map['sistemas'].build[2].func = mostrarTexto( textPredios['sistemas']['logica'] );

        this.map['sistemas'].build.push( new Building( this.sprites['sistemas_web'], 0, 0, 680, 510, 
            new Building( this.sprites['sistemas_web_brilho'], 0, 0, 680, 510 ) ) );
        this.map['sistemas'].build[3].func = mostrarTexto( textPredios['sistemas']['web'] );

        this.map['sistemas'].build.push( new Building( this.sprites['sistemas_planetario'], 0, 0, 680, 510, 
            new Building( this.sprites['sistemas_planetario_brilho'], 0, 0, 680, 510 ) ) );
        this.map['sistemas'].build[4].func = mostrarTexto( textPredios['sistemas']['planetario'] );

        this.map['sistemas'].build.push( new Building( this.sprites['sistemas_voltar'], 0, 0, 680, 510, 
            new Building( this.sprites['sistemas_voltar_brilho'], 0, 0, 680, 510 ) ) );
        this.map['sistemas'].build[5].func = function(){
            infografico.update = updateInitial;
        };

        this.map['sistemas'].button = new Building( this.sprites['sistemas_fechar'], 0, 0, 680, 510, 
            new Building( this.sprites['sistemas_fechar'], 0, 0, 680, 510 ) );
            this.map['sistemas'].button.func =
            function(){
                infografico.update = updateMap;
            }

        this.map['sistemas'].painel = new Painel( this.sprites['sistemas_popup'], 0, 0, 400, 400 );
    }
    
    loadJogos(){
        this.map['jogos'] = new Mapa( this.sprites['jogos_map'], 0, 0);
        this.map['jogos'].clicked = false;
        this.map['jogos'].build = [];

        this.map['jogos'].build.push( new Building( this.sprites['jogos_boneco'], 0, 0, 680, 510, 
            new Building( this.sprites['jogos_boneco_brilho'], 0, 0, 680, 510 ) ) );
        this.map['jogos'].build[0].func = mostrarTexto( textPredios['jogos']['personagens'] );

        this.map['jogos'].build.push( new Building( this.sprites['jogos_jogos'], 0, 0, 680, 510, 
            new Building( this.sprites['jogos_jogos_brilho'], 0, 0, 680, 510 ) ) );
        this.map['jogos'].build[1].func = mostrarTexto( textPredios['jogos']['jogos'] );

        this.map['jogos'].build.push( new Building( this.sprites['jogos_tabuleiro'], 0, 0, 680, 510, 
            new Building( this.sprites['jogos_tabuleiro_brilho'], 0, 0, 680, 510 ) ) );
        this.map['jogos'].build[2].func = mostrarTexto( textPredios['jogos']['tabuleiro'] );

        this.map['jogos'].build.push( new Building( this.sprites['jogos_planetario'], 0, 0, 680, 510, 
            new Building( this.sprites['jogos_planetario_brilho'], 0, 0, 680, 510 ) ) );
        this.map['jogos'].build[3].func = mostrarTexto( textPredios['jogos']['planetario'] );

        this.map['jogos'].build.push( new Building( this.sprites['jogos_voltar'], 0, 0, 680, 510, 
            new Building( this.sprites['jogos_voltar_brilho'], 0, 0, 680, 510 ) ) );
        this.map['jogos'].build[4].func = function(){
            infografico.update = updateInitial;
        };

        this.map['jogos'].button = new Building( this.sprites['jogos_fechar'], 0, 0, 680, 510, 
            new Building( this.sprites['jogos_fechar'], 0, 0, 680, 510 ) );
            this.map['jogos'].button.func =
            function(){
                infografico.update = updateMap;
            }

        this.map['jogos'].painel = new Painel( this.sprites['jogos_popup'], 0, 0, 400, 400 );
    }

    loadAudiovisual(){
        this.map['audiovisual'] = new Mapa( this.sprites['audiovisual_map'], 0, 0);
        this.map['audiovisual'].clicked = false;
        this.map['audiovisual'].build = [];

        this.map['audiovisual'].build.push( new Building( this.sprites['audiovisual_3d'], 0, 0, 680, 510, 
            new Building( this.sprites['audiovisual_3d_brilho'], 0, 0, 680, 510 ) ) );
        this.map['audiovisual'].build[0].func = mostrarTexto( textPredios['audiovisual']['3d'] );

        this.map['audiovisual'].build.push( new Building( this.sprites['audiovisual_animacao'], 0, 0, 680, 510, 
            new Building( this.sprites['audiovisual_animacao_brilho'], 0, 0, 680, 510 ) ) );
        this.map['audiovisual'].build[1].func = mostrarTexto( textPredios['audiovisual']['animacao'] );

        this.map['audiovisual'].build.push( new Building( this.sprites['audiovisual_fotografia'], 0, 0, 680, 510, 
            new Building( this.sprites['audiovisual_fotografia_brilho'], 0, 0, 680, 510 ) ) );
        this.map['audiovisual'].build[2].func = mostrarTexto( textPredios['audiovisual']['fotografia'] );

        this.map['audiovisual'].build.push( new Building( this.sprites['audiovisual_narrativas'], 0, 0, 680, 510, 
            new Building( this.sprites['audiovisual_narrativas_brilho'], 0, 0, 680, 510 ) ) );
        this.map['audiovisual'].build[3].func = mostrarTexto( textPredios['audiovisual']['narrativas'] );

        this.map['audiovisual'].build.push( new Building( this.sprites['audiovisual_planetario'], 0, 0, 680, 510, 
            new Building( this.sprites['audiovisual_planetario_brilho'], 0, 0, 680, 510 ) ) );
        this.map['audiovisual'].build[4].func = mostrarTexto( textPredios['audiovisual']['planetario'] );

        this.map['audiovisual'].build.push( new Building( this.sprites['audiovisual_voltar'], 0, 0, 680, 510, 
            new Building( this.sprites['audiovisual_voltar_brilho'], 0, 0, 680, 510 ) ) );
        this.map['audiovisual'].build[5].func = function(){
            infografico.update = updateInitial;
        };

        this.map['audiovisual'].button = new Building( this.sprites['audiovisual_fechar'], 0, 0, 680, 510, 
            new Building( this.sprites['audiovisual_fechar'], 0, 0, 680, 510 ) );
            this.map['audiovisual'].button.func =
            function(){
                infografico.update = updateMap;
            }

        this.map['audiovisual'].painel = new Painel( this.sprites['audiovisual_popup'], 0, 0, 400, 400 );
    }
}

function setup(){
    let cnv = createCanvas(1920, 1080);
    cnv.id("mycanvas");
    cnv.parent("infografico");

    bck1 = loadImage('./assets/ESTRELAS - 1.png');
    bck2 = loadImage('./assets/ESTRELAS - 2.png');

    bck = bck1;
    back = loadImage('assets/referencia.png');
}

function sizeFactor(){
    return ( windowWidth )/1920;
}

var cont = 0;


function draw(){
    if( infografico.update != undefined ){
        cont++;
        scale( sizeFactor() );
        imageMode(CORNER);
        background( 3,18,45 );
        //image( back , 0, 0 );
        infografico.update();
        //updateLoading();

        if( cont >= 120 ){
            if( bck == bck1 )
                bck = bck2;
            else if( bck == bck2 )
                bck = bck1;
            cont = 0;
        }
    }
}

function windowResized() {
    var valor = document.getElementById("mycanvas").offsetTop;
    resizeCanvas( windowWidth, (windowWidth ) * 0.5625);
    //document.getElementById("gamestartscreen").style.top = ( sizeFactor() * 100 + (valor + sizeFactor() * 200) ) + "px";
}


function mouseClicked(){
    if( infografico.update != undefined ){

    if( infografico.painel )
        if( infografico.painel.button )
            infografico.painel.button.clicked = true;

    if( infografico.map )
        if( infografico.map.button )
            infografico.map.button.clicked = true;

    if( infografico.buttonINT.collision() && infografico.buttonINT )
        infografico.buttonINT.clicked = true;

    if( infografico.buttonANV.collision() && infografico.buttonANV )
        infografico.buttonANV.clicked = true;

    if( infografico.map[ infografico.currentPlanet ].button.collision() && 
        infografico.map[ infografico.currentPlanet ].button.func != undefined && infografico.update == updateMapPainel ){
            infografico.map[ infografico.currentPlanet ].button.clicked = true;
        //console.log("clicked");
    }

    for( var i=0; i<infografico.map[ infografico.currentPlanet ].build.length; i++)
        if(     infografico.map[ infografico.currentPlanet ].build[i].collision() &&
                infografico.map[ infografico.currentPlanet ].build[i].func != undefined &&
                infografico.update == updateMap )
        {
            infografico.map[ infografico.currentPlanet ].build[i].clicked = true;
        }

    }
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

mostrarTexto = function( texto ){
    return function(){
        var div = document.getElementById("gamestartscreen"); 
        div.innerHTML = texto;
        infografico.update = updateMapPainel;
    }
}