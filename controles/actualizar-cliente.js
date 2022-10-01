import { clienteServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id == null) {
    window.location.href = "/html/error.html";
  }

  const usuario = document.querySelector("[data-usuario]");
  const email = document.querySelector("[data-email]");
  const password = document.querySelector("[data-password]");
  const password2 = document.querySelector("[data-password2]");

  try {
    const perfil = await clienteServices.detalleCliente(id);
    if (perfil) {
      usuario.value = perfil.usuario;
      email.value = perfil.email;
      password.value = perfil.password;
      password2.value = perfil.password2;
    } else {
      throw new Error();
    }
  } catch (error) {
    window.location.href = "/html/error.html";
  }

};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const usuario = document.querySelector("[data-usuario]").value;
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;
  const password2 = document.querySelector("[data-password2]").value;
  clienteServices
    .actualizarCliente(usuario, email, password, password2, id)
    .then(() => {
      window.location.href = "/html/edicion_concluida.html";
    });
});
