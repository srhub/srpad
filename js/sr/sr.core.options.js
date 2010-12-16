function Options (id, defaultValue, values, preSelected) {
	
	this.id = id;
	this.defaultValue = defaultValue;
	this.value = (typeof preSelected === "undefined") ? defaultValue :values[preSelected];
	this.values = values;

	this.size = function() {
		return this.values.length;
	};

	this.peek = function(key) {
		return this.values[key];
	};

	this.select = function(key) {
		this.value = this.values[key];
	};
	
	this.deselect = function() {
		this.value = this.defaultValue;
	};

};