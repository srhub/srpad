function Picker(paper, model, properties) {

	this.paper = paper;
	this.model = model;

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
			"selectedBoxColor": "#585858",
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
		var numberOfBoxes = model.size();
		var valuesPaths = properties["valuePaths"];
		var transparent = {
			fill: "#000",
			opacity: 0
		};

		var boxes = new Array();
		for (i = 0; i < numberOfBoxes; i++) {
			isFirst = (i == 0);
			isSelected = (this.model.value == this.model.peek(i));
			isLast = (i == numberOfBoxes - 1);

			tlRadius = isFirst ? properties["radius"] : 0;
			trRadius = isLast ? properties["radius"] : 0;
			brRadius = isLast ? properties["radius"] : 0;
			blRadius = isFirst ? properties["radius"] : 0;

			boxes[i] = paper.roundedRect(
				properties["x"] + i * properties["boxWidth"],
			 	properties["y"], 
				properties["boxWidth"], 
				properties["boxHeight"], tlRadius, trRadius, brRadius, blRadius).attr({
					fill: isSelected ? properties["selectedBoxColor"] : properties["notSelectedBoxColor"],
					"stroke": properties["strokeColor"],
					"stroke-width": properties["strokeThickness"]
			});

			var iconCanvas = Raphael(properties["x"] + i * properties["boxWidth"] + (properties["boxWidth"] - 32) / 2, properties["y"] + (properties["boxHeight"] - 32) / 2, 32, 32);
			var path = iconCanvas.path(properties["valuePaths"][this.model.peek(i)]).attr({
				fill: properties["strokeColor"],
				stroke: properties["strokeColor"]
			});
			
			(function(boxes, numberOfBoxes, i) {
				iconCanvas.rect(0, 0, 32, 32).attr(transparent).click(function() {
					if (model.value == model.peek(i)) {
						model.deselect();
						boxes[i].attr({
							fill: properties["notSelectedBoxColor"]
						});
					} else {
						for (j = 0; j < numberOfBoxes; j++) {
							if (j == i) {
								boxes[j].attr({
									fill: properties["selectedBoxColor"]
								});
							} else {
								boxes[j].attr({
									fill: properties["notSelectedBoxColor"]
								});
							}		
						}
						model.select(i);	
					};
				});
			})(boxes, numberOfBoxes, i);
		}

	};
};
