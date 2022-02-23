export default function getColor(colorx, alphax = 1, defaultx = true) {
  // change color hex to RGB
  if (/^[#]/.test(colorx)) {
      let c = this.hexToRgb(colorx);

      if (alphax == 1) {
          colorx = `rgb(${c.r},${c.g},${c.b})`;
      } else {
          colorx = `rgba(${c.r},${c.g},${c.b},${alphax})`;
      }
  } else if (/^rgba/.test(colorx)) {
      if (colorx.search(/.([0-9]\))$/) == -1 && !defaultx) {
          colorx = colorx.replace(/.?([0-9]\))$/, `${alphax})`);
      }
  } else if (/^(rgb)/.test(colorx)) {
      // change rgb and rgba
      if (alphax != 1) {
          colorx = colorx.replace(/^(rgb)/, `rgba`);
          colorx = colorx.replace(/\)$/, `,${alphax})`);
      }
  }
  return colorx;
}