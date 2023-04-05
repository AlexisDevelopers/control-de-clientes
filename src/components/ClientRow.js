import React from 'react';

function ClientRow({ cliente, acciones }) {
  return (
    <tr>
      <td>{cliente.id}</td>
      <td>{cliente.nombre}</td>
      <td>{cliente.telefono}</td>
      <td>{cliente.email}</td>
      <td>{cliente.direccion}</td>
      <td>
        <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenterVer" onClick={() => acciones.seleccionarCliente(cliente, 'Ver')}>Ver</button>{" "}
        <button className="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenterEditar" onClick={() => acciones.seleccionarCliente(cliente, 'Editar')}>Editar</button>{" "}
        <button className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenterEliminar" onClick={() => acciones.seleccionarCliente(cliente, 'Eliminar')}>Eliminar</button>
      </td>
    </tr>
  );
}

export default ClientRow;
