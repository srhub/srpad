function PickerModel (id, defaultValue, values) {

	this.id = id;
	this.defaultValue = defaultValue;
	this.values = values;

	this.value = this.defaultValue;

};
PickerModel.prototype.size = function() {
	return this.values.length;
};
PickerModel.prototype.peek = function(key) {
	return this.values[key];
};
PickerModel.prototype.selectValue = function(value) {
	if (this.value != value) {
		this.value = value;
		this.fireChange();
	}
};
PickerModel.prototype.select = function(key) {
	if (this.value != this.values[key]) {
			this.value = this.values[key];
			this.fireChange();
	}
};
PickerModel.prototype.deselect = function() {
	this.value = this.defaultValue;
	this.fireChange();
};

PickerModel.prototype.register = function(rules) {
	this.rules = rules;
};
PickerModel.prototype.fireChange = function () {
	this.rules.change(this.id, this.internalValue);
};
