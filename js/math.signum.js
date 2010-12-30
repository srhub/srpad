/**
 * Signum (x) returns -1 if the argument is less than zero, 0 if the argument 
 * is zero, +1 if the argument is greater than zero
 * @param {Number} x 
 */
Math.signum = function(x) {
	if (x > 0) return 1;
	else if (x < 0) return -1;
	else return 0;
};