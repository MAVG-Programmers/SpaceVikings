﻿

Player.prototype = Object.create(GameObject.prototype);
Player.prototype.constructor = Player;

function Player(x, y) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.velX = 0;
    this.velY = 0;
    this.lastShotTime = 0;
    this.shotInterval = 200;
}

Player.prototype.update = function (deltaTime) {

    if (Key.isDown(Key.LEFT)) {
        this.velX = -50;
    }
    else if (Key.isDown(Key.RIGHT)) {
        this.velX = 50;
    }
    else {
        this.velX = 0;
    }

    if (Key.isDown(Key.SHOOT)) {
        var now = Date.now();
        if (now - this.lastShotTime >= this.shotInterval) {
            this.lastShotTime = now;
			var bullet = new Bullet();
			bullet.x = this.x + this.width / 2.0 - bullet.width / 2.0;
			bullet.y = this.y;
            Game.addGameObject(bullet);
        }
    }

    this.x = this.x + this.velX * deltaTime;
    this.y = this.y + this.velY * deltaTime;
}
