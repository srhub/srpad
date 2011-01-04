function SliderModel (id, defaultValue, minimumValue, maximumValue, step, stops, mapping) {

	this.id = id;
	this.defaultValue = defaultValue;
	this.minimumValue = minimumValue;
	this.maximumValue = maximumValue;
	this.step = step;
	this.stops = stops;
	if (mapping != undefined) {
		this.mapping = mapping;
	}
	
	this.value = defaultValue;

	this.internalValue = mapping(this.value);
	
	this.set = function(value) {
		// set the value
		this.value = value;
		
		// check if internal value changed
		var newInternalValue = this.mapping(value);
		if (this.internalValue != newInternalValue) {
			this.internalValue = newInternalValue;
			this.fireChange();
		}
	};
		
};
SliderModel.prototype.mapping = function(key) {
	return key;
};
SliderModel.prototype.register = function(rules) {
	this.rules = rules;
};
SliderModel.prototype.fireChange = function () {
	this.rules.change(this.id, this.internalValue);
};