/**
 * Ignores the minimum ranges of grenade launcher and missile launcher
 */
function WeaponType (id, type, name, picture, intervals, modifier) {

	this.id = id;
	this.type = type;
	this.name = name;
	this.picture = picture;
	this.intervals = intervals;
	this.modifier = (modifier == undefined) ? 1 : modifier;
};
Weapon.prototype.get =  function(key) {
	if (key <= this.intervals[0] * modifier) return 4;
	if (key > this.intervals[0] * modifier && key <= this.intervals[1] * modifier) return 5;
	if (key > this.intervals[1] * modifier && key <= this.intervals[2] * modifier) {
		if (id == "grenade.launcher")
			return 8;
		else
			return 6;
	};
	if (key > this.intervals[2] * modifier && key <= this.intervals[3] * modifier) return 9;
	// there is a problem
	return Number.NaN;
};