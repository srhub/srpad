function Widget () {
	this.defaultProperties = {};
}

Widget.prototype.getProperties = function(properties) {
	var defaultProperties = this.defaultProperties;
	if (properties == undefined) return defaultProperties;
	for (key in defaultProperties) {
		value = properties[key];
		if (value == undefined) {
			properties[key] = this.defaultProperties[key];
		}
	};
	return properties;
};