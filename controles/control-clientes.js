import { clienteServices } from "../service/client-service.js";

//aqui interactuaremos con js y el html
const crearNuevaLinea = (usuario, email, password, password2, id) => {
  const linea = document.createElement("tr");
  const contenido = `  
           <td class="td" data-td> ${usuario}</td>
           <td>${email}</td>
           <td>${password}</td>
           <td>${password2}</td>
           <td>
             <ul class="table__button-control">
               <li>
                 <a
                   href="./editar_cliente.html?id=${id}"
                   class="simple-button simple-button--edit"> Editar</a>
               </li>
               <li>
                 <button
                   class="simple-button simple-button--delete"
                   type="button" id="${id}"
                 >
                   eliminar
                 </button>
               </li>
             </ul>
           </td>
         `;
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    const id = btn.id;
    clienteServices.eliminarCliente(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((error) => alert("Ocurrio un error"));
  });
  return linea;
};

//donde se va a incluir la informacion
const table = document.querySelector("[data-table]");

//mostramos la informacion en la tabla de clientes
clienteServices
  .listaClientes()
  .then((data) => {
    data.forEach(({ usuario, email, password, password2, id }) => {
      const nuevaLinea = crearNuevaLinea(
        usuario,
        email,
        password,
        password2,
        id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrio un error"));
