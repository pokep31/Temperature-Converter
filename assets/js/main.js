// Coge los valores de los campos input de Celsius y Fahrenheit
const celsius = document.querySelector("#celsius"),
  fahrenheit = document.querySelector("#fahrenheit");

// Poner el foco en el campo input celsius cuando se cargue la página.
window.addEventListener("load", () => celsius.focus());

// Convertir Celsius en Fahrenheit cuando el valor de Celsius cambie.
celsius.addEventListener("input", () =>{
  fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
  // Borrar el campo Fahrenheit cuando el de Celsius esté vacio.
  if (!celsius.value) fahrenheit.value = ""; 
});

// Convertir Celsius en Fahrenheit cuando el valor de Celsius cambie.
fahrenheit.addEventListener("input", () =>{
  celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
  // Borrar el campo Celsius cuando el de Fahrenheit esté vacio.
  if (!fahrenheit.value) celsius.value = ""; 
});