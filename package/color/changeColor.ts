export default function changeColor(colorInicial) {
  let colores = ['primary', 'success', 'danger', 'warning', 'dark']
  let colorx

  if (colores.includes(colorInicial)) {
    let style = getComputedStyle(document.documentElement)
    colorx = this.getVariable(style, '--vs-' + colorInicial)
  } else {
    if (/[rgb()]/g.test(colorInicial)) {
      colorx = colorInicial.replace(/[rgb()]/g, '')
    } else if (/[#]/g.test(colorInicial)) {
      let rgbx = this.hexToRgb(colorInicial)
      colorx = `${rgbx.r},${rgbx.g},${rgbx.b}`
    } else {
      colorx = '--vs-' + colorInicial
    }
  }
  return colorx
  // this.setCssVariable('--vs-'+clave,colorx)
}
