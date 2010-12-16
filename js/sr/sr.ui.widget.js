function Widget(paper, options, widget) {
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
			"title": "Title",
			"textColor": "#ccc",
			"fontStyle": '400 12px "Helvetica Neue", Helvetica, sans-serif'
		};
		return defaults;
	};
	
	this.paper = paper;
	this.options = this.getOptions(options);
	this.widget = widget;
	
	this.draw = function() {
		var name = paper.text(
			options["x"],
			options["y"], 
			options["title"]);
		name.attr({
			"fill": options["textColor"],
			"text-anchor": "start",
			"font": options["fontStyle"]
		});
		widget.draw();
	};
};