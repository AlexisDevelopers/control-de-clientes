import React, { useState } from 'react';
import ModalAgregarDireccion from './ModalAgregarDireccion';

function ModalEditar({ clienteSeleccionado, handleChange, setModalEditar, modalEditar, acciones }) {
  const [direccionSeleccionada, setDireccionSeleccionada] = useState(null);
  const [direccionEditada, setDireccionEditada] = useState('');
  const [modalAgregarDireccion, setModalAgregarDireccion] = useState(false);

  const handleDireccionChange = (e) => {
    const direccionId = parseInt(e.target.value);
    if (!isNaN(direccionId)) {
      const direccion = clienteSeleccionado.direcciones.find((d) => d.id === direccionId);
      setDireccionSeleccionada(direccion);
      setDireccionEditada(direccion.calle);;
    } else {
      setDireccionSeleccionada(null);
      setDireccionEditada('');
    }
  };
  

  const handleDireccionEditadaChange = (e) => {
    setDireccionEditada(e.target.value);
  };

  const guardarDireccionEditada = () => {
    if (direccionSeleccionada) {
      const direccionesActualizadas = clienteSeleccionado.direcciones.map((direccion) =>
        direccion.id === direccionSeleccionada.id
          ? { ...direccion, calle: direccionEditada }
          : direccion
      );
      const clienteActualizado = { ...clienteSeleccionado, direcciones: direccionesActualizadas };
      acciones.editar(clienteActualizado);
      setModalEditar(false);
      limpiarCamposDireccion();
    }
  };
  
  
  const limpiarCamposDireccion = () => {
    setDireccionEditada('');
  };
  

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
              <label htmlFor="direccion">Direcciones</label>
              <select className="form-control" name="direccion" onChange={handleDireccionChange}>
                <option value="">Selecciona una dirección</option>
                {clienteSeleccionado && clienteSeleccionado.direcciones && clienteSeleccionado.direcciones.map((direccion, index) => (
                  <option key={index} value={direccion.id}>
                    {direccion.calle}, {direccion.ciudad}, {direccion.pais}
                  </option>
                ))}
              </select>
              
            </div>
            <div className="form-group">
              <label htmlFor="direccionEditada">Editar dirección seleccionada</label>
              <input
                type="text"
                className="form-control"
                name="direccionEditada"
                value={direccionEditada}
                onChange={handleDireccionEditadaChange}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={() => setModalAgregarDireccion(true)}>Agregar dirección</button>
          </div>
          <ModalAgregarDireccion modalAgregarDireccion={modalAgregarDireccion} setModalAgregarDireccion={setModalAgregarDireccion} agregarDireccion={acciones.agregarDireccion} />
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setModalEditar(false)}>Cancelar</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={guardarDireccionEditada}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEditar;

