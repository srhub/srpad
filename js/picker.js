

function draw() {
	var pickerCanvas = document.getElementById("picker"); 
	var pickerContext = pickerCanvas.getContext("2d");
	
	var options = {
		"x": 10,
		"y": 10,
		"radius": 5,
		"numberOfBoxes": 3,
		"boxWidth": 37,
		"boxHeight": 33,
		"selectedBox": 2,
		"shadowColor": "#00f"
	};
	
	drawPicker(pickerContext, options);
}

function drawPicker(context, options) {
	
	options = getOptions(options);
	
	console.log(options);
	
	context.lineWidth = options["shadowThickness"];
	context.strokeStyle = options["shadowColor"];
	context.roundedRectShadow(
		options["x"]+ options["shadowXDisposition"], 
		options["y"] + options["shadowYDisposition"], 
		options["numberOfBoxes"] * options["boxWidth"], 
		options["boxHeight"], 
		options["radius"] - options["shadowRadiusDisposition"], 
		options["radius"] - options["shadowRadiusDisposition"]
	);
	
	context.strokeStyle = options["strokeColor"];
	context.lineWidth = options["strokeThickness"];
	context.roundedRect(
		options["x"], 
		options["y"], 
		options["numberOfBoxes"] * options["boxWidth"], 
		options["boxHeight"], 
		options["radius"], 
		options["radius"], 
		options["radius"], 
		options["radius"]);
	
	for (i=0; i < options["numberOfBoxes"]; i++) {
		drawPickerBox(
			context, 
			options,
			i, 
			(i==options["selectedBox"] - 1), 
			(i==0),
			(i==options["numberOfBoxes"] - 1)
		);
	}
	
}

function drawPickerBox(context, options, boxNumber, isSelectedBox, isFirstBox, isLastBox) {

	var x = options["x"]+options["strokeThickness"] + options["boxWidth"] * boxNumber;
	var y = options["y"]+options["strokeThickness"];
	var width = options["boxWidth"] - (2*options["strokeThickness"] + options["dividerThickness"]);
	var height = options["boxHeight"] - (2*options["strokeThickness"]);

	var gradient = context.createLinearGradient(x, y, x, y + height);
	var colors = (isSelectedBox) ? options["selectedBoxColors"] : options["notSelectedBoxColors"];
	
	for ( var key in colors) {
		gradient.addColorStop(parseInt(key), colors[key]); 
	}

	var bottomLeftRadius = (isFirstBox) ? options["radius"] : 0;
	var bottomRightRadius = (isLastBox) ? options["radius"] : 0;
	var topRightRadius = (isLastBox) ? options["radius"] : 0;
	var topLeftRadius = (isFirstBox) ? options["radius"] : 0;

	try {
		context.fillStyle = gradient;
		context.roundedRect(
			x,
			y,
			width,
			height,
			bottomLeftRadius, 
			bottomRightRadius, 
			topRightRadius, 
			topLeftRadius,
			true,
			false);
	} catch (err) {
		console.log(err);
	}
}

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

