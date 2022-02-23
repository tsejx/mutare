export default function safetyCall(fn, args, callback) {
    if ('function' != typeof fn) return callback;
    try {
        return fn.apply(this, args);
    } catch (err) {
        return callback;
    }
}
