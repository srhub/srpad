function Avatar(paper, options) {
	this.getOptions = function(options) {
		var defaultOptions = this.getDefaults();
		for (key in defaultOptions) {
			value = options[key];
			if (value == undefined) {
				options[key] = defaultOptions[key];
			}
		};
		return options;
	};
	this.getDefaults = function() {
		var defaults = {
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
		return defaults;
	};

	this.paper = paper;
	this.options = this.getOptions(options);

	this.draw = function() {
		var rect = paper.rect(options["x"], options["y"], options["width"], options["height"]);
		rect.attr({
			fill: options["backgroundColor"],
			"stroke": options["strokeColor"],
			"stroke-width": options["strokeThickness"]
		});
		// TODO if no path is given draw generic character
		// TODO always display character name with black, half opaque on bottom of avatar
		if (options["path"] != undefined) {
			paper.image(options["path"], options["x"] + options["strokeThickness"], options["y"] + options["strokeThickness"], options["width"] - 2 * options["strokeThickness"], options["height"] - 2 * options["strokeThickness"]);
		}
		var box = paper.rect(
		options["x"] + options["strokeThickness"] +1, 
		options["y"] + options["height"] - options["boxHeight"] - 2*options["strokeThickness"] ,
		options["width"] - 2 * options["strokeThickness"] -1, 
		options["boxHeight"] + options["strokeThickness"]);
		box.attr({
			"fill": options["boxColor"],
			"opacity": options["boxOpacity"]
		});
		var name = paper.text(
			options["x"] + options["strokeThickness"] + options["padding-left"],
			options["y"] + options["height"] - options["strokeThickness"] - options["padding-bottom"], 
			options["name"]);
		name.attr({
			"fill": options["textColor"],
			"text-anchor": "start",
			"font": options["fontStyle"]
		});
	};
};