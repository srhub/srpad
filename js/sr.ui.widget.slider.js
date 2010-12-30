function Slider (paper, properties, model) {

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

	function drawStops(x, y, radius, scale, stops) {
		var size = stops.length;
		for (i = 0; i < size; i++) {
			paper.ellipse(x + scale*stops[i], y + radius, radius, radius).attr({fill: properties["strokeColor"]});
		}
	}

	function signum(x) {
		if (x > 0) return 1;
		else if (x < 0) return -1;
		else return 0;
	}

	function drawTip(minX, maxX, x, y, boxWidth, boxHeight, triangleWidth, triangleHeight, value, fontStyle) {

		var tip = paper.tip(
				x, y,
				boxWidth, boxHeight,
				triangleWidth, triangleHeight).attr({
					fill:  properties["backgroundColor"],
					"stroke": properties["strokeColor"],
					"stroke-width": properties["strokeThickness"]
				}
			);
		var text = paper.text(x, y - triangleHeight - boxHeight/2, eval(value)).attr({font: fontStyle});

 		var start = function () {
		   // get coordinates
		   //this.ox = this.attrs.path[0][1];
		   //this.oy = this.attrs.path[0][2];
		 	this.attr({fill:  properties["strokeColor"]});
		};
		var move = function (dx, dy) {
			tx = signum(dx)*5;
			if (tx < 0 && (this.attrs.path[0][1] - tx) < minX) {
				tx = minX - (this.attrs.path[0][1] - tx);
			}
			else if (tx > 0 && (this.attrs.path[0][1] + tx) > maxX) {
				tx = (this.attrs.path[0][1] + tx) - maxX;
			}
			else {
				this.translate(tx, 0);
				text.translate(tx, 0);
			};
		};
		var up = function () {
		   // restoring state
		   this.attr({fill:  properties["backgroundColor"]});
		};
		tip.drag(move, start, up);
	}

	this.draw = function() {
		paper.rect(
			this.properties["x"],
			this.properties["y"],
			this.properties["width"],
			2 * this.properties["radius"],
			this.properties["radius"]).attr({
				fill: this.properties["backgroundColor"],
				"stroke": this.properties["strokeColor"],
				"stroke-width": this.properties["strokeThickness"]
		});

		// - radius because the endpoints should be inside the rounded edges
		var scale =  (this.properties["width"] -this.properties["radius"]) / (this.properties["maximumValue"] - this.properties["minimumValue"]);
		drawStops(this.properties["x"], this.properties["y"], this.properties["radius"], scale, properties["stops"]);

		drawTip(
			this.properties["x"] + 2 * this.properties["radius"],
			this.properties["x"] + scale*this.model["maximumValue"],
			this.properties["x"], this.properties["y"],
			this.properties["boxWidth"], this.properties["boxHeight"],
			this.properties["triangleWidth"], this.properties["triangleHeight"],
			model.value,
			this.properties["fontStyle"]
		);
	};
};
Slider.prototype.getProperties = function(properties) {
	return Widget.prototype.getProperties.call(this, properties);
};