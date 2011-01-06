/**
 * Filters an array and returns all objects where the given field has the value of the given key.
 * 
 * @param {String} field the name of the field
 * @param {String} key the wishd content of the field
 * @return Returns an  array containing only objects where the given field has the value of the given key
 * @type Array
 */
Array.prototype.filterByField = function(field, key) {
	var newArray = [];
	for (var i = 0; i < this.length; i++) {
		if (this[i][field] == key) {
			newArray.push(this[i]);
		}
	}
	return newArray;
};