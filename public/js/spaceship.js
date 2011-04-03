var Spaceship = function(options) {
	var spaceship = $(['<div class="', options.spaceship, '"></div>'].join('')).appendTo(Space.universe),
		bullet = $(['<div class="', options.bullet, '"></div>'].join('')).appendTo(Space.universe),
		step = 25;

	function move(direction) {
		var previous = spaceship.offset().left,
			next = previous + (direction * step),
			boundaries = Space.getBoundaries();
		if(boundaries.left >= next){
			next = boundaries.left; 
		} else if(boundaries.right <= next + spaceship.width()){
			next = boundaries.right - spaceship.width();
		}
		spaceship.offset({left: next});
	}
	
	this.moveLeft = function(){
		move(-1);
    };
    
    this.moveRight = function(){
    	move(1);
    };
    
    this.fire = function(){
    	new Bullet({
    		spaceship: spaceship,
    		bullet: bullet
    	}).fire();
    };
};