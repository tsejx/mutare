import { fixZero } from '../math/fixZero';

export default function timeStamp() {
    const d = new Date();
    const time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
    return [d.getDate(), months[d.getMonth()], time].join(' ');
}
