function SliderModel (id, defaultValue, minimumValue, maximumValue, step, stops) {

	this.id = id;
	this.defaultValue = defaultValue;
	this.minimumValue = minimumValue;
	this.maximumValue = maximumValue;
	this.step = step;
	this.stops = stops;
	
	this.value = defaultValue;
	
	/* every model need these functions */
	
	this.register= function(rules) {
		this.rules = rules;
	};
	
	this.fireChange = function () {
		this.rules.change(this.id, this.value);
	};

};