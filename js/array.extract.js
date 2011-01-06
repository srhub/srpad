/**
 * Extracts a new array from the czrent one, iterating over the objects in the array, extracting the field
 * 
 * @param String the name of the field 
 * @return Returns a new array containing only the fields (if defined) with the given name of objects in this array
 */
Array.prototype.extract = function(field) {
	var newArray = [];
	for (var i = 0; i < this.length; i++) {
		if (this[i][field] != undefined) {
			newArray.push(this[i][field]);
		}
	}
	return newArray;
};