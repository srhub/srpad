function PickerModel (id, defaultValue, values) {

	this.id = id;
	this.defaultValue = defaultValue;
	this.values = values;
	
	this.value = this.defaultValue;

	this.size = function() {
		return this.values.length;
	};

	this.peek = function(key) {
		return this.values[key];
	};

	this.select = function(key) {
		this.value = this.values[key];
		this.fireChange();
	};
	
	this.deselect = function() {
		this.value = this.defaultValue;
		this.fireChange();
	};
	
	/* every model need these functions */
	
	this.register= function(rules) {
		this.rules = rules;
	};
	
	this.fireChange = function () {
		this.rules.change(this.id, this.value);
	};
};