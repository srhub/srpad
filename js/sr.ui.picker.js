function getOptions (options) {
	
	var defaultSelectedBoxColors = {
		"0": "#3b3b3b",
		"1": "#797979"
	};
	
	var defaultNotSelectedBoxColors = {
		"0": "#f6f7f6",
		"1": "#c2c3c3"
	};
	
	var defaultOptions = {
		"x": 0,
		"y": 0,
		"radius": 3,
		"numberOfBoxes": 1,
		"boxWidth": 37,
		"boxHeight": 33,
		"selectedBox": undefined,
		"strokeColor": "#dddedf",
		"strokeThickness": 1, 
		"shadowColor": "#dddedf",
		"shadowThickness": 1,
		"shadowXDisposition": 0,
		"shadowYDisposition": 1,
		"shadowRadiusDisposition": 1,
		"selectedBoxColors": defaultSelectedBoxColors,
		"notSelectedBoxColors": defaultNotSelectedBoxColors,
		"dividerThickness": 1,
		"dividerColor": "#5c5c5f"
	};
	
	for ( key in defaultOptions ) {
		value = options[key];
		if (value == undefined) {
			options[key] = defaultOptions[key];
		}
	}
	
	return options;
}