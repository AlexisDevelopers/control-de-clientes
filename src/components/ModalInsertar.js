import React, { useState } from 'react';
import ModalAgregarDireccion from './ModalAgregarDireccion';

function ModalInsertar({ clienteSeleccionado, handleChange, setModalInsertar, modalInsertar, acciones }) {
  const [direcciones, setDirecciones] = useState(clienteSeleccionado && clienteSeleccionado.direcciones ? clienteSeleccionado.direcciones : []);
  const [errores, setErrores] = useState({ nombre: false, telefono: false, email: false });
  const [modalAgregarDireccion, setModalAgregarDireccion] = useState(false);

  const handleDireccionChange = (e, index) => {
    const updatedDirecciones = direcciones.map((direccion, i) => {
      if (i === index) {
        const [calle, ciudad, pais] = e.target.value.split(', ');
        return { calle, ciudad, pais };
      }
      return direccion;
    });
    setDirecciones(updatedDirecciones);
    handleChange({ target: { name: 'direcciones', value: updatedDirecciones } });
  };

  const validarCampos = (clienteSeleccionado) => {
    const erroresActuales = { nombre: false, telefono: false, email: false };
    let hayErrores = false;
    if (!clienteSeleccionado.nombre) {
      erroresActuales.nombre = true;
      hayErrores = true;
    }
    if (!clienteSeleccionado.telefono) {
      erroresActuales.telefono = true;
      hayErrores = true;
    }
    if (!clienteSeleccionado.email) {
      erroresActuales.email = true;
      hayErrores = true;
    }
    setErrores(erroresActuales);
    return !hayErrores;
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" id="exampleModalCenterInsertar" style={{ display: modalInsertar ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Cliente</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setModalInsertar(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>ID:</label>
              <input
                type="text"
                className="form-control"
                name="id"
                value={clienteSeleccionado && clienteSeleccionado.id}
                onChange={handleChange}
                readOnly
              />
            </div>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" className={`form-control ${errores.nombre ? 'is-invalid' : ''}`} name="nombre" value={clienteSeleccionado && clienteSeleccionado.nombre} onChange={handleChange} />
              {errores.nombre && <div className="invalid-feedback">Por favor complete este campo</div>}
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input type="text" className={`form-control ${errores.telefono ? 'is-invalid' : ''}`} name="telefono" value={clienteSeleccionado && clienteSeleccionado.telefono} onChange={handleChange} />
              {errores.telefono && <div className="invalid-feedback">Por favor complete este campo</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className={`form-control ${errores.email ? 'is-invalid' : ''}`} name="email" value={clienteSeleccionado && clienteSeleccionado.email} onChange={handleChange} />
              {errores.email && <div className="invalid-feedback">Por favor complete este campo</div>}
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input type="text" className="form-control" name="direccion" value={clienteSeleccionado && clienteSeleccionado.direccion} onChange={handleChange} />
            </div>
            <div className="form-group">
              {/* {direcciones.map((direccion, index) => (
                <div key={index}>
                  <input type="text" className="form-control" name="direccion" value={direccion} onChange={(e) => handleDireccionChange(e, index)} />
                </div>
              ))} */}
              {direcciones.map((direccion, index) => (
                <div key={index}>
                  <input
                    type="text"
                    className="form-control"
                    name="direccion"
                    value={`${direccion.calle}, ${direccion.ciudad}, ${direccion.pais}`}
                    onChange={(e) => handleDireccionChange(e, index)}
                  />
                </div>
              ))}

              <button type="button" className="btn btn-primary" onClick={() => setModalAgregarDireccion(true)}>Agregar dirección</button>
            </div>
            <ModalAgregarDireccion modalAgregarDireccion={modalAgregarDireccion} setModalAgregarDireccion={setModalAgregarDireccion} agregarDireccion={acciones.agregarDireccion} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setModalInsertar(false)}>Cancelar</button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={() => {
                if (validarCampos(clienteSeleccionado)) {
                  console.log(clienteSeleccionado)
                  acciones.insertar(clienteSeleccionado);
                  setModalInsertar(false);
                  handleChange({ target: { name: "direccion", value: "" } });
                }
              }}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalInsertar;
