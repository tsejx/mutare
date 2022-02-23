export default function contrastColor(elementx) {
  let c = elementx;
  if (/[#]/g.test(elementx)) {
      let rgbx = this.hexToRgb(elementx);
      c = `rgb(${rgbx.r},${rgbx.g},${rgbx.b})`;
  }
  var rgb = c
      .replace(/^(rgb|rgba)\(/, '')
      .replace(/\)$/, '')
      .replace(/\s/g, '')
      .split(',');
  var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  if (yiq >= 128) {
      return true;
  } else {
      return false;
  }
}