function Counter(paper, options, properties) {

	this.paper = paper;
	this.options = options;

	this.getDefaultProperties = function() {
		return {
			"x": 0,
			"y": 0,
			"radius": 3,
			"outerBoxWidth": 2 * 37,
			"backgroundColor": "#f6f7f6",
			"innerBoxWidth": 37,
			"boxHeight": 33,
			"fontStyle" : '800 20px "Helvetica Neue", Helvetica',
			"strokeColor": "#262626",
			"strokeThickness": 1
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
		
		var textStyle = {
			fill: properties["strokeColor"],
			stroke: "none",
			"font": properties["fontStyle"]
		};
		
		var outerBox = paper.rect(
		properties["x"],
		properties["y"],
		properties["outerBoxWidth"],
		properties["boxHeight"], properties["radius"], properties["radius"]);
		outerBox.attr({
			fill: properties["backgroundColor"],
			"stroke": properties["strokeColor"],
			"stroke-width": properties["strokeThickness"]
		});
		
		var innerBox = paper.rect(
		properties["x"] + (properties["outerBoxWidth"] - properties["innerBoxWidth"])/2,
		properties["y"],
		properties["innerBoxWidth"],
		properties["boxHeight"], properties["radius"], properties["radius"]);
		innerBox.attr({
			fill: properties["backgroundColor"],
			"stroke": properties["strokeColor"],
			"stroke-width": properties["strokeThickness"]
		});
		
		paper.text(properties["x"] + properties["outerBoxWidth"] / 2, properties["y"] + properties["boxHeight"] / 2, "0").attr(textStyle);

		var xOffset = 10;
		var yOffset = 2;
		paper.text(properties["x"] + xOffset, properties["y"] + properties["boxHeight"] / 2 - yOffset, "-").attr(textStyle);
		paper.text(properties["x"] + properties["outerBoxWidth"] - xOffset, properties["y"] + properties["boxHeight"] / 2 - yOffset, "+").attr(textStyle);

	};

};
