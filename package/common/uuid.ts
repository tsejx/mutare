export default function uuid() {
    for (var t, e, r = 20, n = new Array(r), o = Date.now().toString(36).split(""); r-- > 0;) {
        e = (t = 36 * Math.random() | 0).toString(36),
        n[r] = t % 3 ? e : e.toUpperCase();
    }

    for (var i = 0; i < 8; i++) {
        n.splice(3 * i + 2, 0, o[i])
    };

    return n.join("");
}