function Slider(paper, model, properties) {

	this.paper = paper;
	this.model = model;

	this.defaultProperties = {
		"x": 0,
		"y": 0,
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

	this.properties = this.getProperties(properties);
	this.rectangle = this.paper.rect(
	this.properties["x"], this.properties["y"], this.properties["width"], 2 * this.properties["radius"], this.properties["radius"]).attr({
		fill: this.properties["backgroundColor"],
		"stroke": this.properties["strokeColor"],
		"stroke-width": this.properties["strokeThickness"]
	});

	this.sliderScale = function() {
		return (this.properties["width"] - this.properties["radius"]) / (this.model["maximumValue"] - this.model["minimumValue"]);
	};

	// intitial stops
	this.sliderStops = this.paper.set();
	for (i = 0, size = model.stops.length; i < size; i++) {
		this.sliderStops.push(paper.ellipse(this.properties["x"] + this.sliderScale() * this.model.stops[i], this.properties["y"] + this.properties["radius"], this.properties["radius"], this.properties["radius"]));
	}
	this.sliderStops.attr({
		fill: properties["strokeColor"]
	});

	var start = function() {
		this.attr({
			fill: properties["strokeColor"]
		});
	};
	var move = function(dx, dy) {
		tx = Math.signum(dx) * 3;
		if (tx < 0 && (this.attrs.path[0][1] - tx) < this.minX) {
			tx = this.minX - (this.attrs.path[0][1] - tx);
		} else if (tx > 0 && (this.attrs.path[0][1] + tx) > this.maxX) {
			tx = (this.attrs.path[0][1] + tx) - this.maxX;
		} else {
			this.translate(tx, 0);
			this.tipText.translate(tx, 0);

		};

		value = Math.floor(1 / this.sliderScale() * (this.attrs.path[0][1] - this.minX));
		model.set(value);
		this.tipText.attr('text', value);
	};
	var up = function() {
		this.attr({
			fill: properties["backgroundColor"]
		});
	};

	// intitial tip
	this.tip = this.paper.tip(
	this.properties["x"], this.properties["y"], this.properties["boxWidth"], this.properties["boxHeight"], this.properties["triangleWidth"], this.properties["triangleHeight"]).attr({
		fill: properties["backgroundColor"],
		"stroke": properties["strokeColor"],
		"stroke-width": properties["strokeThickness"]
	});
	
	this.tip.minX = this.properties["x"] + 2 * this.properties["radius"]; 
	this.tip.maxX = this.properties["x"] + this.sliderScale()*this.model["maximumValue"];
	this.tip.sliderScale = this.sliderScale.bind(this);
	
	this.tipText = paper.text(this.properties["x"], this.properties["y"] - this.properties["triangleHeight"] - this.properties["boxHeight"] / 2, this.model.value).attr({
		font: this.properties["fontStyle"]
	});
	this.tip.tipText = this.tipText;
	
	this.tip.drag(move, start, up);


	this.draw = function() {
		this.setStops(this.properties["x"], this.properties["y"], this.properties["radius"], this.sliderScale(), model["stops"]);
		this.moveTip();
	};

	this.setStops = function(x, y, radius, scale, stops) {
		this.sliderStops.remove();
		this.sliderStops = this.paper.set();

		for (i = 0, size = stops.length; i < size; i++) {
			this.sliderStops.push(paper.ellipse(x + scale * stops[i], y + radius, radius, radius));
		}
		this.sliderStops.attr({
			fill: properties["strokeColor"]
		});
	};

	this.moveTip = function() {
		// reset maxX
		this.tip.maxX = this.properties["x"] + this.sliderScale()*this.model["maximumValue"];
		
		// get current value
		var currentX = this.tip.attrs.path[0][1];
		var newX = this.properties["x"] + this.sliderScale()*this.model.value;

		var tx = newX - currentX;
		this.tip.translate(tx, 0);
		this.tipText.translate(tx, 0);
		
		// reset text, reset model value
		
		// get current x position
		
		// correct if it is < min or > max
		// calculate new position
		
		
		// translate tip
		// translate text
	};

};
Slider.prototype.getProperties = function(properties) {
	return Widget.prototype.getProperties.call(this, properties);
};
