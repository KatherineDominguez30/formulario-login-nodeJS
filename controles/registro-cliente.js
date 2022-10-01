import { clienteServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const usuario = document.querySelector("[data-usuario]").value;
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;
  const password2 = document.querySelector("[data-password2]").value;
  clienteServices.crearCliente(usuario, email, password, password2)
    .then(() => {
      window.location.href = "/html/registro_completado.html";
    })
    .catch((err) => console.log(err));
});
