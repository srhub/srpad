/**
 * Creates an associative array mapping one field to another of an array of objects
 * @param {String} from key of the resulting associative array  
 * @param {String} to value of the resulting associative array
 * @return associative array mapping one field to another of an array of objects
 * @type Array
 * @author  Oliver Schrenk <oliver.schrenk@gmail.com>
 */
Array.prototype.map = function(from, to) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        if (this[i][from] != undefined && this[i][to] != undefined) {
            newArray[this[i][from]] = this[i][to];
        }
    }
    return newArray;
};
