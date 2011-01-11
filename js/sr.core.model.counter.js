function CounterModel (id, defaultValue, minValue, maxValue) {
	
	this.id = id;
	this.defaultValue = defaultValue;
	this.minValue = minValue;
	this.maxValue = maxValue;
	
	this.value = defaultValue;

};
CounterModel.prototype.next = function() {
	if (this.value < this.maxValue) {
		this.value++;
		this.fireChange();
	};
};
CounterModel.prototype.previous = function() {
	if (this.value > this.minValue) {
		this.value--;
		this.fireChange();
	};
};
CounterModel.prototype.register = function(rules) {
	this.rules = rules;
};
CounterModel.prototype.fireChange = function () {
	this.rules.change(this.id, this.internalValue);
};