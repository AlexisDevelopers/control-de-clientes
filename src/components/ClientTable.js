import React from 'react';
import ClientRow from './ClientRow';

function ClientTable({ clientes, acciones }) {
  return (
    <>
      <button className="btn btn-success mt-8 ml-8" data-toggle="modal" data-target="#exampleModalCenterInsertar" onClick={() => acciones.abrirModalInsertar()} style={{ marginLeft: '20px', marginTop: '10px' }}>Agregar</button>
      <br /><br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Email</th>
            <th scope="col">Dirección</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <ClientRow key={cliente.id} cliente={cliente} acciones={acciones} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ClientTable;
