function CounterModel (id, defaultValue, minValue, maxValue) {
	
	this.id = id;
	this.defaultValue = defaultValue;
	this.minValue = minValue;
	this.maxValue = maxValue;
	
	this.value = defaultValue;

	this.next = function() {
		if (this.value < this.maxValue) {
			this.value++;
			this.fireChange();
		};	
	};

	this.previous = function() {
		if (this.value > this.minValue) {
			this.value--;
			this.fireChange();
		};
	};
	
	/* every model need these functions */
	
	this.register= function(rules) {
		this.rules = rules;
	};
	
	this.fireChange = function () {
		this.rules.change(this.id, this.value);
	};

}