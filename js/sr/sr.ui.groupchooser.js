function GroupChooser(paper, model, properties) {

	this.paper = paper;
	this.model = model;

	this.getDefaultProperties = function() {
		return {
			"x": 125,
			"y": (512-300)/2,
			"radius": 3,
			"width": 510,
			"height": 300,
			"valueTitles": undefined,
			"groups": undefined,
			"backgroundColor": "#f6f7f6",
			"strokeColor": "#262626",
			"strokeThickness": 1,
			"headerStyle": '800 12px "Helvetica Neue Condensed", "Helvetica Neue", "Helvetica", sans-serif',
			"fontStyle": '400 12px "Helvetica Neue Condensed", "Helvetica Neue", "Helvetica", sans-serif',
			"textColor": "#262626",
			"textXOffset": 20,
			"textYOffset": 25
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

	this.hide = function() {
		this.set.hide();
		this.set.toBack();
	};

	this.show = function() {
		this.set.show();
		this.set.toFront();
	};

	this.set = paper.set();

	var groups = properties["groups"];
	var numberOfGroups = 0;
	for (key in groups) {
		numberOfGroups++;
	}
	var valuesTitles = this.properties["valueTitles"];

	this.draw = function() {
		
		this.set.push (
			paper.rect (
			properties["x"],
			properties["y"],
			properties["width"],
			properties["height"],
			properties["radius"]
			).attr({
				fill: properties["backgroundColor"],
				"stroke": properties["strokeColor"],
				"stroke-width": properties["strokeThickness"]
			})
		);
		var i = 0;
		for (key in groups) {
			this.set.push (
				paper.text(
					properties["x"] + properties["textXOffset"] + i * (properties["width"]/numberOfGroups),
					properties["y"] + properties["textYOffset"],
					key
				).attr({
					"text-anchor": "start",
					font: properties["headerStyle"],
					"fill": properties["textColor"]
				})	
			);
			// options for each group
			var options = groups[key];
			var optionsLength = options.length;
			for (j = 0; j < optionsLength; j++ ) {
				var weaponId = options[j];
				var text = paper.text(
					properties["x"] + properties["textXOffset"] + i * (properties["width"]/numberOfGroups),
					properties["y"] + 2 * properties["textYOffset"] + j * properties["textYOffset"],
					properties["valueTitles"][weaponId]
				).attr({
					"text-anchor": "start",
					font: properties["fontStyle"],
					"fill": properties["textColor"]
				});
				this.set.push (
					text
				);
				var parent = this;
				(function(text, weaponId, parent) {
					text.click(function() {
						parent.model.selectValue(weaponId);
						parent.chooser.draw();
						parent.hide();
					});
				})(text, weaponId, parent);
				
			}
			i++;
		}
		
				
	};
};
