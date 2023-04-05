import React from 'react';

function ModalEditar({ clienteSeleccionado, handleChange, setModalEditar, modalEditar, acciones }) {
  return (
    <div className="modal" tabIndex="-1" role="dialog" id="exampleModalCenterEditar" style={{ display: modalEditar ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Cliente</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setModalEditar(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input readOnly type="text" className="form-control" name="id" value={clienteSeleccionado && clienteSeleccionado.id} />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" className="form-control" name="nombre" value={clienteSeleccionado && clienteSeleccionado.nombre} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input type="text" className="form-control" name="telefono" value={clienteSeleccionado && clienteSeleccionado.telefono} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" value={clienteSeleccionado && clienteSeleccionado.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input type="text" className="form-control" name="direccion" value={clienteSeleccionado && clienteSeleccionado.direccion} onChange={handleChange} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setModalEditar(false)}>Cancelar</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { setModalEditar(false); acciones.editar(clienteSeleccionado) }}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEditar;
