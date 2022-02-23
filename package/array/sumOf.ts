/**
 * Calculate the sum of values
 */
export default function sumOf() {
    var arr = Array.prototype.slice.apply(arguments);
    return arr.reduce(function(x, y) {
        return Number(x) + Number(y);
    });
}