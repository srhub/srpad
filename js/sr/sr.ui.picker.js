function Picker(paper, options, properties) {

	this.paper = paper;
	this.options = options;

	this.getDefaultProperties = function() {
		return {
			"x": 0,
			"y": 0,
			"radius": 3,
			"boxWidth": 37,
			"boxHeight": 33,
			"valuePaths": undefined,
			"strokeColor": "#262626",
			"strokeThickness": 1,
			"shadowRadiusDisposition": 1,
			"selectedBoxColor": "#262626",
			"notSelectedBoxColor": "#f6f7f6"
		};
	};

	this.getProperties = function(properties) {
		var defaultProperties = this.getDefaultProperties();
		for (key in defaultProperties) {
			value = properties[key];
			if (value == undefined) {
				properties[key] = defaultProperties[key];
			}
		};
		return properties;
	};

	this.properties = this.getProperties(properties);

	this.draw = function() {
		var numberOfBoxes = options.size();
		var valuesPaths = properties["valuePaths"];
		var transparent = {
			fill: "#000",
			opacity: 0
		};

		var boxes = new Array();
		for (i = 0; i < numberOfBoxes; i++) {
			isFirst = (i == 0);
			isSelected = (this.options.value == this.options.peek(i));
			isLast = (i == numberOfBoxes - 1);

			tlRadius = isFirst ? properties["radius"] : 0;
			trRadius = isLast ? properties["radius"] : 0;
			brRadius = isLast ? properties["radius"] : 0;
			blRadius = isFirst ? properties["radius"] : 0;

			var box = paper.roundedRect(
			properties["x"] + i * properties["boxWidth"], properties["y"], properties["boxWidth"], properties["boxHeight"], tlRadius, trRadius, brRadius, blRadius);
			box.attr({
				fill: isSelected ? properties["selectedBoxColor"] : properties["notSelectedBoxColor"],
				"stroke": properties["strokeColor"],
				"stroke-width": properties["strokeThickness"]
			});

			var iconCanvas = Raphael(properties["x"] + i * properties["boxWidth"] + (properties["boxWidth"] - 32) / 2, properties["y"] + (properties["boxHeight"] - 32) / 2, 32, 32);
			var path = iconCanvas.path(properties["valuePaths"][this.options.peek(i)]);
			path.attr({
				fill: isSelected ? properties["notSelectedBoxColor"] : properties["selectedBoxColor"],
				stroke: isSelected ? properties["notSelectedBoxColor"] : properties["selectedBoxColor"]
			});
			(function(box) {
				iconCanvas.rect(0, 0, 32, 32).attr(transparent).click(function() {
					box.attr({
						fill: "#585858"
					});
				});
			})(box);
		}

	};
};
