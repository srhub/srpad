function Chooser(paper, model, weaponTypes, strengthModel, slider, properties) {

	this.paper = paper;
	this.model = model;
	this.weaponTypes = weaponTypes;
	this.strengthModel = strengthModel;
	this.slider = slider;

	this.open = false;

	this.defaultProperties = {
		"x": 0,
		"y": 0,
		"radius": 3,
		"boxWidth": 238,
		"boxHeight": 85,
		"imageWidth": 236,
		"imageHeight": 83,
		"chooser": undefined,
		"backgroundColor": "#ddd",
		"strokeColor": "#262626",
		"strokeThickness": 1,
		"fontStyle": '400 12px "Helvetica Neue Condensed", "Helvetica Neue", "Helvetica", sans-serif',
		"textColor": "#262626",
		"textXOffset": 14,
		"textYOffset": 18,
		"notSelectedBoxHeight": 14
	};

	this.properties = this.getProperties(properties);

	var groupChooser = properties["chooser"];
	groupChooser.draw();
	groupChooser.hide();
	groupChooser.chooser = this;

	this.draw = function() {
		var selectedId = this.model.value;
		
		var selectedBox = paper.rect(
			properties["x"],
		 	properties["y"],
			properties["boxWidth"],
			properties["boxHeight"],
			properties["radius"]
		).attr({
			fill: properties["backgroundColor"],
			"stroke": properties["strokeColor"],
			"stroke-width": properties["strokeThickness"]
		});

		var weapon = paper.image(
			weaponTypes.filterByField("id", selectedId)[0]["picture"],
			properties["x"],
			properties["y"],
			properties["imageWidth"],
			properties["imageHeight"]
		);

		paper.text(
			properties["x"] + properties["boxWidth"] - properties["textXOffset"],
			properties["y"] + properties["boxHeight"] - properties["textYOffset"],
			weaponTypes.filterByField("id", selectedId)[0]["name"]
		).attr({
			"text-anchor": "end",
			font: properties["fontStyle"],
			"fill": properties["textColor"]
		});

		weapon.click(function (event) {
		    toggleOptions();
		});

		(toggleOptions = function() {
			open = !open;
			if (open) {
				properties["chooser"].show();
				open = !open;
			}
		})();

	};
	
	this.recalc = function() {
		this.change(this.model.value, true);
	}
	
	this.change = function (weaponTypeId, recalc) {
		this.model.selectValue(weaponTypeId);	
		var weaponType = weaponTypes.filterByField("id", weaponTypeId)[0];
		if (weaponType.type == "projectile") {
				
			for (i = 0, size = weaponType.stops.length; i < size; i++) {
				weaponType.stops[i] = weaponType.stops[i] / weaponType.modifier;
			}
			
			weaponType.modifier = strengthModel.value;
			
			for (i = 0, size = weaponType.stops.length; i < size; i++) {
				weaponType.stops[i] = weaponType.stops[i] * weaponType.modifier;
			}
		}
		this.slider.model.stops = weaponType.stops;
		this.slider.model.maximumValue = weaponType.stops.max();
		this.slider.model.mapping = WeaponType.prototype.getTargetNumber.bind(weaponType);
		
		if (recalc != undefined) {
			this.slider.draw();
		} else {
			this.slider.draw();
			this.draw();
		}
	
	};
	
};

Chooser.prototype.getProperties = function(properties) {
	return Widget.prototype.getProperties.call(this, properties);
};