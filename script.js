(() => {
  "use strict";

  const form = document.getElementById("formContacto");
  const status = document.getElementById("estadoFormulario");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add("was-validated");

    if (form.checkValidity()) {
      status.textContent = "Formulario validado. Esta demostración no envía los datos.";
    } else {
      status.textContent = "";
    }
  });
})();
