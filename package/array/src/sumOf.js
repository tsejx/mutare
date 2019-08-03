/**
 * Calculate the sum of values
 */
function sumOf() {
    var arr = Array.prototype.slice.apply(arguments);
    return arr.reduce(function(x, y) {
        return Number(x) + Number(y);
    });
}

export default sumOf;
