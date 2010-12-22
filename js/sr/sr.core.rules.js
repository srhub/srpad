function Rules () {
	
	var models = new Array();
	
	// hook the model to the ruleset
	this.register = function(model) {
		model.register(this);
		models[model.id] = model;
	};
	
	this.change = function(id, value) {
		this.calculate();
	};
	
	this.calculate = function() {
		var baseTarget = models["slider"];
		
		// [...]
		
	};

}