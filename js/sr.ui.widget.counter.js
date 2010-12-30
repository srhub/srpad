function Counter(paper, model, properties) {

	this.paper = paper;
	this.model = model;

	this.defaultProperties = {
		"x": 0,
		"y": 0,
		"radius": 3,
		"outerBoxWidth": 2 * 37,
		"backgroundColor": "#f6f7f6",
		"innerBoxWidth": 37,
		"boxHeight": 33,
		"fontStyle": '800 20px "Helvetica Neue Condensed", "Helvetica Neue", "Helvetica", sans-serif',
		"strokeColor": "#262626",
		"strokeThickness": 1,
		"xOffset": 10,
		"yOffset": 2
	};

	this.properties = this.getProperties(properties);

	var transparent = {
		fill: "#000",
		opacity: 0
	};

	var textStyle = {
		fill: properties["strokeColor"],
		stroke: "none",
		"font": properties["fontStyle"]
	};

	this.draw = function() {
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

		var value = paper.text(properties["x"] + properties["outerBoxWidth"] / 2, properties["y"] + properties["boxHeight"] / 2, this.model.value).attr(textStyle);
		paper.text(properties["x"] + properties["xOffset"], properties["y"] + properties["boxHeight"] / 2 - properties["yOffset"], "-").attr(textStyle);
		paper.text(properties["x"] + properties["outerBoxWidth"] - properties["xOffset"], properties["y"] + properties["boxHeight"] / 2 - properties["yOffset"], "+").attr(textStyle);

		var leftInvisibleBox = paper.rect(
			properties["x"],
			properties["y"],
			properties["outerBoxWidth"] / 2,
			properties["boxHeight"]
			).attr(transparent);
		var rightInvisibleBox = paper.rect(
			properties["x"] + properties["outerBoxWidth"] / 2,
			properties["y"],
			properties["outerBoxWidth"] / 2,
			properties["boxHeight"]
			).attr(transparent);

		leftInvisibleBox.click(function() {
			model.previous();
			value.attr ({"text" : model.value});
		});

		rightInvisibleBox.click(function() {
			model.next();
			value.attr ({"text" : model.value});
		});

	};

};

Counter.prototype.getProperties = function(properties) {
	return Widget.prototype.getProperties.call(this, properties);
};