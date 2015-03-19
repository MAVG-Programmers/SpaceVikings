InvaderBullet.prototype = Object.create(Bullet.prototype);
InvaderBullet.prototype.constructor = InvaderBullet;

function InvaderBullet(x, y, row) {
    var _this = this;
	Bullet.call(this, x, y);
	this.velY = 100;

    switch(row) {
        case 4:
        case 3:
            this.sprite = new Sprite({
                path: "images/Bullet_Invader_1.png",
                type: "static",
                width: 3,
                height: 12
            });
        break;

        case 2:
        case 1:
            this.sprite = new Sprite({
                path: "images/Bullet_Invader_2.png",
                type: "static",
                width: 3,
                height: 16
            });
        break;

        case 0:
            this.sprite = new Sprite({
                path: "images/Bullet_Invader_3.png",
                type: "spritesheet",
                width: 4,
                height: 6,
                sheet_width: 2,
                sheet_height: 1
            });

            this.animationTimer = setInterval(function() {
                if(_this.dead) { clearInterval(_this.animationTimer); }
                _this.sprite.step();
            }, 100);
        break;
    }
}