var Bullet = function(options){
	var spaceship = options.spaceship,
		bullet = options.bullet;
		bulletLeft = 0;
	
	function loadBullet(){
		var offset = spaceship.offset();
		bulletLeft = offset.left + (spaceship.width() / 2) - (bullet.width() / 2);
		return bullet.clone().offset({left: bulletLeft, top: offset.top}).appendTo(spaceship.parent());
	}
	
	this.fire = function(){
		var bullet = loadBullet();
		bullet.show().animate({
			top: -bullet.height()
		}, 
		{
			duration: 'slow',
			complete: function() {
				$(this).remove();
			},
			step: function(now, fx){
				$(document).trigger("bullet:fired", {
					bullet: bullet,
					now: now,
					fx: fx
				});
			}
		});
	};
};