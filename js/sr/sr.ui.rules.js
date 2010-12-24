function RulesUI (properties) {

	this.getDefaultProperties = function() {
		return {
			"baseTargetNodeId": 0,
			"modifiertCass": 0,
			"radius": 3,
			"width": 200,
			"strokeColor": "#262626",
			"strokeThickness": 1,
			"backgroundColor": "#f6f7f6",
			"boxWidth": 54,
			"boxHeight": 20,
			"triangleWidth": 8,
			"triangleHeight": 8,
			"fontStyle": '400 12px "Helvetica Neue Condensed", "Helvetica Neue", "Helvetica", sans-serif'
		};
	};

	this.getProperties = function(properties) {
		var defaultProperties = this.getDefaultProperties();

		if (properties === undefined) {
			return defaultProperties;
		}

		for (key in defaultProperties) {
			value = properties[key];
			if (value == undefined) {
				properties[key] = defaultProperties[key];
			}
		};
		return properties;
	};

	this.draw = function(baseTarget, modifier) {
		
	};
	
};
