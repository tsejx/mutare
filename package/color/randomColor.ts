export function randomColor() {
    function r() {
        return Math.floor(256 * Math.random())
    }
    return `rgb(${r()},${r()},${r()})`
}