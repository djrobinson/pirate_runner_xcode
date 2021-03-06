var platform = platform || {};

platform.Preload = function() {};


platform.Preload.prototype = {
    preload: function() {
        this.load.image('ground', 'assets/gray.png');
        this.load.image('box', 'assets/RTS_Crate.png');
        this.load.image('coin', 'assets/coin_01.png');
        this.load.image('menu', 'assets/lazy_menu.png');
        this.load.spritesheet('hero', 'assets/Run.png', 67, 100, 8);
        this.load.image('jump-button', 'assets/jump-Button.png');
        this.load.image('flip-button', 'assets/flip-Button.png');
        this.load.image('background', 'assets/pirate.jpg');
        this.load.image('menu-back', 'assets/pirate_entry.png');
        this.load.image('game-over', 'assets/game_over.jpg');
        this.load.image('high-scores', 'assets/high-scores.jpg');
        this.load.image('home-button', 'assets/home-button.png');
      },
    create: function() {

        var user = prompt("Please enter your name for high score entry ");
        window.localStorage.setItem("currentUser", user);
        window.localStorage.setItem("highScore", 0);
        console.log(window.localStorage.getItem("currentUser"));
        this.state.start('Menu');
    }
};


// 67 by 100 high
