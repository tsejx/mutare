export default function setCssVariable(propertyName, value) {
  if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty(propertyName, value);
  }
},