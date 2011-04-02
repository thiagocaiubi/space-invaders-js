var Spaceship = function(spaceship) {
	var spaceship = $(spaceship),
		bullet = spaceship.find(".bullet"),
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
    
    this.fire = function(options){
    	new Bullet({
    		spaceship: spaceship,
    		bullet: bullet
    	}).fire();
    };
};