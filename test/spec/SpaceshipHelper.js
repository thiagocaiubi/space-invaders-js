describe('Spaceship', function() {
	
	var spaceship, spaceshipDiv, bulletDiv;
	
	beforeEach(function() {
		spaceship = new Spaceship({spaceship: 'spaceship',bullet: 'bullet'});
		spaceshipDiv = $('.spaceship');
		bulletDiv = $('.bullet');
	});
	
	it('should create spaceship and bullet', function() {
		expect(spaceshipDiv).toExist();
		expect(bulletDiv).toExist();
	});
	
	it('should move left', function() {
		var previous = spaceshipDiv.offset().left;
		spaceship.moveLeft();
		expect(spaceshipDiv.offset().left).toBe(previous - 25);
	});
	
	it('should respect left boundry', function() {
		var previous = spaceshipDiv.offset({left: 0});
		spaceship.moveLeft();
		expect(spaceshipDiv.offset().left).toBe(0);
	});
	
	it('should move right', function() {
		var previous = spaceshipDiv.offset().left;
		spaceship.moveRight();
		expect(spaceshipDiv.offset().left).toBe(previous + 25);
	});
	
	it('should respect right boundry', function() {
		var left = Space.getBoundaries().right - spaceshipDiv.width();
		var previous = spaceshipDiv.offset({left: left});
		spaceship.moveRight();
		expect(spaceshipDiv.offset().left).toBe(left);
	});
	
	it('should fire', function() {
	});
	
	afterEach(function(){
		spaceshipDiv.remove();
		bulletDiv.remove();
	});
	
});