export default function seq() {
    let SEQUENCE = Date.now();
    return (SEQUENCE++).toString(36);
}
