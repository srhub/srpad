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
	var isDrag = false;
	var dragger = function (e)
	{
		this.dx = e.clientX;
		this.dy = e.clientY;
		isDrag = this;
	};

	document.ontouchstart = function () {
		if(isDrag)	{
			isDrag.attr({fill: "#ddd"});	
		}
	};
	
	document.ontouchmove = function (e) {
		e = e || event;
		if (isDrag) {
			
			//var el = document.getElementById("test");
			//el.appendChild(document.createTextNode(isDrag.minX));
			
			var newX = e.touches[0].pageX;
			var middleX = isDrag.getBBox().x + isDrag.getBBox().width; 
			
			//el.appendChild(document.createTextNode(middleX));
			
			if (middleX < isDrag.minX || middleX > isDrag.maxX) {
				return;
			}
			
			value = Math.floor(1 / isDrag.sliderScale() * (isDrag.attrs.path[0][1] - isDrag.minX));
			model.set(value);
			isDrag.tipText.attr('text', value);
			
			isDrag.translate((newX - isDrag.dx), 0);
			isDrag.tipText.translate((newX - isDrag.dx), 0);
			isDrag.dx = newX;
		};
	};

	document.ontouchend = function () {
		if(isDrag) {
			isDrag.attr({fill:properties["backgroundColor"]});
		}
		isDrag = false;
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
	
	this.tip.mousedown(dragger);


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
		
		// reset to highest value
		if (this.model.value > this.model.stops.max()) {
			this.model.set(this.model.stops.max());
			this.tipText.attr('text', this.model.value);
		}
		this.model.set(this.model.value);
		
		// get current value
		var currentX = this.tip.attrs.path[0][1];
		var newX = this.properties["x"] + this.sliderScale()*this.model.value;

		var tx = newX - currentX;
		this.tip.translate(tx, 0);
		this.tipText.translate(tx, 0);
	};

};
Slider.prototype.getProperties = function(properties) {
	return Widget.prototype.getProperties.call(this, properties);
};
