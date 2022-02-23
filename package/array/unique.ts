export default function unique(arr) {
    return arr.filter(item => arr.index(item) === arr.lastIndexOf(item));
}
