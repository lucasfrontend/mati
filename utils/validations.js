let required = (propertyType) => { 
  return v => v && v.length > 0 || `Debe ingresar un ${propertyType}`
}

let minLength = (propertyType, minLength) => {
  return v => v && v.length >= minLength || `El ${propertyType} debe tener al menos ${minLength} caracteres`
}

let maxLength = (propertyType, maxLength) => {
  return v => v && v.length <= maxLength || `El ${propertyType} debe tener al menos ${maxLength} caracteres`
}

let emailFormat = () => {
  let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,24})+$/
  return v => v && regex.test(v) || "Debe ingresar un correo válido"
}
  
export default {
  required,
  minLength,
  maxLength,
  emailFormat
}