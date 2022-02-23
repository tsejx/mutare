export default function createObject(proto) {
    if (Object.create) return Object.create(proto);
    const fn = function() {};
    return (fn.prototype = proto), new fn();
}
