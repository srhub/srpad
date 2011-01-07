/**
 * Ignores the minimum ranges of grenade launcher and missile launcher
 */
function WeaponType (id, type, name, picture, stops, modifier) {

	this.id = id;
	this.type = type;
	this.name = name;
	this.picture = picture;
	this.stops = stops;
	this.modifier = (modifier == undefined) ? 1 : modifier;
};
WeaponType.prototype.getTargetNumber = function(range) {
	if (range <= this.stops[0] * this.modifier) return 4;
	if (range > this.stops[0] * this.modifier && range <= this.stops[1] * this.modifier) return 5;
	if (range > this.stops[1] * this.modifier && range <= this.stops[2] * this.modifier) {
		if (this.id == "grenade.launcher")
			return 8;
		else
			return 6;
	};
	if (key > this.stops[2] * this.modifier && key <= this.stops[3] * this.modifier) return 9;
	// there is a problem
	return Number.NaN;
};