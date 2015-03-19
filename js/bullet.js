Bullet.prototype = Object.create(GameObject.prototype);
Bullet.prototype.constructor = Bullet;

function Bullet(x, y) {
	GameObject.call(this, x, y, 4, 16);
	this.velY = -700;

	this.sprite = new Sprite({
		path: "images/Bullet_Player.png",
		type: "static",
		width: 3,
		height: 16
	});
}

Bullet.prototype.update = function(deltaTime) { 
	GameObject.prototype.update.call(this, deltaTime);
};