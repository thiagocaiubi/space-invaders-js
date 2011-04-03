describe("Invader", function() {
	
	var invader, invaderDiv;
	
	beforeEach(function() {
		invader = new Invader('clamps');
	});
	
	it("should create invader", function() {
		invaderDiv = $('.clamps');
		expect(invaderDiv).toExist();
		expect(invaderDiv).toHaveClass('invader');
	});
	
	afterEach(function(){
		invaderDiv.remove();
	});
	
});