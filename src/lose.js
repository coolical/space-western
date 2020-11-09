var Lose = {};
Lose.key = 'lose';
Lose.preload = function() {
    Lose.scene = this;
    Lose.options = ["tutorial", "stage1"];
    //https://www.needpix.com/photo/571005/wood-texture-background-structure-grain-textures-boards-plank-fence-table - wood
    Lose.scene.load.image('loseTitle', './Sprites/signs/Lose1.png')
    Lose.scene.load.image('playAgainButton', './Sprites/signs/playAgainButton1.png');   
    
}

Lose.create = function() {
    console.log('you lost');
    Lose.title = this.add.image(400, 100, 'loseTitle').setScale(4);
    Lose.tutorial = this.add.image(400, 300, 'playAgainButton').setName('playAgain').setScale(2).setInteractive();
    this.input.once('gameobjectdown', function (pointer, gameObject){
        if (gameObject.name == 'playAgain'){
            game.scene.stop('lose');
            game.scene.start('stage1');
        }
    }, Lose);
}