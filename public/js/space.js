var Space = {
	universe: $(document.body),
	
	setSpaceship: function(spaceship){
		var spaceship = new Spaceship(spaceship),
			action = {
				37: spaceship.moveLeft,
				32: spaceship.fire,
				38: spaceship.fire,
				39: spaceship.moveRight
			};
		$(document).keydown(function(event){
			(action[event.which] || function(){})();
		});
		return this;
	},
	
	addInvaders: function(invaders){
		invaders = invaders || [];
		for (var i = 0; i < invaders.length; i++) {
			var invader = new Invader(invaders[i]).attack();
		}
	},
	
	getBoundaries: function(){
		return {
			left: 0,
			right: Space.universe.width()
		};
	}
};