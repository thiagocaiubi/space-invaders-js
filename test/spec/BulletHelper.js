describe("Bullet", function() {
	
	var spaceship, spaceshipDiv, bullet, bulletDiv;
	
	beforeEach(function() {
		spaceship = new Spaceship({spaceship: 'spaceship',bullet: 'bullet'});
		spaceshipDiv = $(".spaceship");
		bulletDiv = $(".bullet"),
		bullet = new Bullet({
    		spaceship: spaceshipDiv,
    		bullet: bulletDiv
    	});
		
	});
	
	it("should fire", function() {
		expect(true).toBe(true);
	});
	
	afterEach(function(){
		spaceshipDiv.remove();
		bulletDiv.remove();
	});
	
});