var Invader = function(invader) {
	var invader = $(['<div class="invader ', invader,'"></div>'].join('')).hide().appendTo(Space.universe);

	function bindBulletFired(invader){
		$(document).bind("bullet:fired", function(event, options){
			var bullet = options.bullet,
			now = options.now,
			fx = options.fx,
			bulletRight =  bulletLeft + bullet.width(),
			bottom = now + bullet.height(),
			viewport = invader.viewport();
			if (viewport.bottom >= bottom && (viewport.left <= bulletLeft && viewport.right >= bulletRight)) {
				bullet.stop();
				bullet.remove();
				invader.destroy();
			}
		});
	}
	
    function setInvaderPosition(){
    	var left = Math.random() * (Space.getBoundaries().right - invader.width());
		invader.css({left: left}).fadeIn('slow');
    };
    
    this.attack = function(){
		setInvaderPosition();
		bindBulletFired(this);
    };
    
    this.destroy = function(){
    	invader.fadeOut('slow', setInvaderPosition);
    };
    
    this.viewport = function(){
    	var offset = invader.offset();
    	return {
    		right: offset.left + invader.width(), 
    		bottom: offset.top + invader.height(),
    		left: offset.left
    	};
    };
};