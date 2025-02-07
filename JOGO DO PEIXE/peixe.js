var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser .Game (config);

var peixe_verde;

function preload() {    
this.load.image('oceano', 'assets/bg_azul-claro.png'  );
this.load.image('logo', 'assets/logo-inteli_azul.png');
this.load.image('personagem','peixe/peixinho_laranja.png');
this.load.image('baleia','peixe/imagem_extra.png');
} 

    function create  () {
    this.add.image(400,300,'oceano');
   this.add.image(400,500,'logo').setScale(0.5);
  peixe_verde = this.add.image(400,300,'personagem').setTint(0x00ff00).setOrigin(0.5,0.5).setFlip(true,false);
this.add.image(400,300,'baleia').setScale(0.4);
  }
    

   
   function update () { 
    peixe_verde.x = this.input.x;
    peixe_verde.y = this.input.y; }
