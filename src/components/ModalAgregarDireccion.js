import React, { useState } from 'react';

function ModalAgregarDireccion({ modalAgregarDireccion, setModalAgregarDireccion, agregarDireccion }) {
    const [direccion, setDireccion] = useState('');

    // const handleGuardar = () => {
    //     agregarDireccion(direccion);
    //     setModalAgregarDireccion(false);
    // };
    const handleGuardar = () => {
        const [calle, ciudad, pais] = direccion.split(', ');
        agregarDireccion({ calle, ciudad, pais });
        setModalAgregarDireccion(false);
      };
      

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: modalAgregarDireccion ? 'block' : 'none' }}>
            <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: '700px' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Agregar dirección</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setModalAgregarDireccion(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="direccion">Dirección</label>
                            <input type="text" className="form-control" name="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setModalAgregarDireccion(false)}>Cancelar</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleGuardar}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAgregarDireccion;
