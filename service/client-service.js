//crearemos un fech API, es simplemente una funcion para llamar al servidor(backend), donde este recibira la respuesta y depues la transforma en un json
const listaClientes = () => 
   fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

//crearemos el cliente
const crearCliente = (usuario, email, password, password2) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario, email, password, password2, id: uuid.v4() }),
  });
};

//eliminar cliente
const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
  })
};

//detalle Cliente
const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
};

//actizar cliente
const actualizarCliente = (usuario, email, password, password2, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ usuario, email, password, password2 }),
  })
    .then((respuesta) => respuesta)
    .catch((error) => alert(error))
};

export const clienteServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};











