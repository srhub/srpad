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
	if (range <= this.stops[0]) {
		return 4;
	}
	if (range > this.stops[0] && range <= this.stops[1]) {
		return 5;
	}
	if (range > this.stops[1] && range <= this.stops[2]) {
		if (this.id == "grenade.launcher") {
			return 8;
		} else {
			return 6;
		}
	}
	if (range > this.stops[2] && range <= this.stops[3]) {
		return 9;
	} 
	// there is a problem
	return Number.NaN;
};