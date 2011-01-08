/**
 * Returns the maximum value of the array
 * @return the maximum value of the array
 */
Array.prototype.max = function() {
	return Math.max.apply(Math, this);
};

/**
 * Returns the minimum value of the array
 * @return the minimum value of the array
 */
Array.prototype.min = function() {
	return Math.min.apply(Math, this);
};