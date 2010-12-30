function Avatar(paper, properties) {

	this.defaultProperties = {
		"x": 0,
		"y": 0,
		"width": 140,
		"height": 187,
		"backgroundColor": "#ddd",
		"strokeColor": "#ccc",
		"strokeThickness": 2,
		"textColor": "#ccc",
		"fontStyle": '400 12px "Helvetica Neue", Helvetica, sans-serif',
		"padding-left": 5,
		"padding-bottom": 9,
		"boxColor": "#000",
		"boxOpacity": 0.7,
		"boxHeight": 20,
		"name": undefined,
		"path": undefined
	};

	this.paper = paper;
	this.properties = this.getProperties(properties);

	this.draw = function() {
		var rect = paper.rect(properties["x"], properties["y"], properties["width"], properties["height"]);
		rect.attr({
			fill: properties["backgroundColor"],
			"stroke": properties["strokeColor"],
			"stroke-width": properties["strokeThickness"]
		});
		// TODO if no path is given draw generic character
		// TODO always display character name with black, half opaque on bottom of avatar
		if (properties["path"] != undefined) {
			paper.image(properties["path"], properties["x"] + properties["strokeThickness"], properties["y"] + properties["strokeThickness"], properties["width"] - 2 * properties["strokeThickness"], properties["height"] - 2 * properties["strokeThickness"]);
		}
		var box = paper.rect(
		properties["x"] + properties["strokeThickness"] +1, 
		properties["y"] + properties["height"] - properties["boxHeight"] - 2*properties["strokeThickness"] ,
		properties["width"] - 2 * properties["strokeThickness"] -1, 
		properties["boxHeight"] + properties["strokeThickness"]);
		box.attr({
			"fill": properties["boxColor"],
			"opacity": properties["boxOpacity"]
		});
		var name = paper.text(
			properties["x"] + properties["strokeThickness"] + properties["padding-left"],
			properties["y"] + properties["height"] - properties["strokeThickness"] - properties["padding-bottom"], 
			properties["name"]);
		name.attr({
			"fill": properties["textColor"],
			"text-anchor": "start",
			"font": properties["fontStyle"]
		});
	};
};

Avatar.prototype.getProperties = function(properties) {
	return Widget.prototype.getProperties.call(this, properties);
};