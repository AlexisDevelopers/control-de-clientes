import React from 'react';

function ModalVer({ clienteSeleccionado, modalVer, setModalVer }) {
  return (
    <div className="modal" tabIndex="-1" role="dialog" id="exampleModalCenterVer" style={{ display: modalVer ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Detalle del Cliente</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setModalVer(false)}>
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
              <input readOnly type="text" className="form-control" name="nombre" value={clienteSeleccionado && clienteSeleccionado.nombre} />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input readOnly type="text" className="form-control" name="telefono" value={clienteSeleccionado && clienteSeleccionado.telefono} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input readOnly type="email" className="form-control" name="email" value={clienteSeleccionado && clienteSeleccionado.email} />
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Direcciones</label>
              <select className="form-control" name="direccion" readOnly>
                {clienteSeleccionado && clienteSeleccionado.direcciones && clienteSeleccionado.direcciones.map((direccion, index) => (
                  <option key={index} value={`${direccion.calle}, ${direccion.ciudad}, ${direccion.pais}`}>
                    {direccion.calle}, {direccion.ciudad}, {direccion.pais}
                  </option>
                ))}

              </select>
            </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setModalVer(false)}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalVer;

