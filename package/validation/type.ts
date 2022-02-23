export default function type(value, flag) {
    const t = Object.prototype.toString
        .call(t)
        .substring(8)
        .replace(']', '');
    return flag ? t === flag : t;
}
