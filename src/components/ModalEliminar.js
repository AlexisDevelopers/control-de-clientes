import React from 'react';

const ModalEliminar = ({
  modalEliminar,
  setModalEliminar,
  clienteSeleccionado,
  eliminar
}) => {
  return (
    <div
      className={`modal fade ${modalEliminar ? 'show' : ''}`}
      id="exampleModalCenterEliminar"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
      style={{ display: modalEliminar ? 'block' : 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              ELIMINAR CLIENTE
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setModalEliminar(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            ¿Estás Seguro que deseas eliminar este cliente{' '}
            {clienteSeleccionado && clienteSeleccionado.nombre}?
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={() => eliminar()}
            >
              Sí
            </button>
            <button
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => setModalEliminar(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEliminar;
