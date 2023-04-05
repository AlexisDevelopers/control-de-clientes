// import React from 'react';

// function ModalInsertar({ clienteSeleccionado, handleChange, setModalInsertar, modalInsertar, acciones }) {
//     return (
//         <div className="modal" tabIndex="-1" role="dialog" id="exampleModalCenterInsertar" style={{ display: modalInsertar ? 'block' : 'none' }}>
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title">Agregar Cliente</h5>
//                         <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setModalInsertar(false)}>
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <div className="form-group">
//                             <label>ID:</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 name="id"
//                                 value={clienteSeleccionado && clienteSeleccionado.id}
//                                 onChange={handleChange}
//                                 readOnly
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="nombre">Nombre</label>
//                             <input type="text" className="form-control" name="nombre" value={clienteSeleccionado && clienteSeleccionado.nombre} onChange={handleChange} />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="telefono">Teléfono</label>
//                             <input type="text" className="form-control" name="telefono" value={clienteSeleccionado && clienteSeleccionado.telefono} onChange={handleChange} />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="email">Email</label>
//                             <input type="email" className="form-control" name="email" value={clienteSeleccionado && clienteSeleccionado.email} onChange={handleChange} />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="direccion">Dirección</label>
//                             <input type="text" className="form-control" name="direccion" value={clienteSeleccionado && clienteSeleccionado.direccion} onChange={handleChange} />
//                         </div>
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setModalInsertar(false)}>Cancelar</button>
//                         <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { setModalInsertar(false); acciones.insertar(clienteSeleccionado) }}>Guardar</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ModalInsertar;




import React, { useState } from 'react';

function ModalInsertar({ clienteSeleccionado, handleChange, setModalInsertar, modalInsertar, acciones }) {
    const [direcciones, setDirecciones] = useState(clienteSeleccionado && clienteSeleccionado.direcciones ? clienteSeleccionado.direcciones : []);

    const agregarDireccion = () => {
        setDirecciones([...direcciones, '']);
    };

    const handleDireccionChange = (e, index) => {
        const updatedDirecciones = direcciones.map((direccion, i) => {
            if (i === index) {
                return e.target.value;
            }
            return direccion;
        });
        setDirecciones(updatedDirecciones);
        handleChange({ target: { name: 'direcciones', value: updatedDirecciones } });
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
                    <div className="form-group">
                        {direcciones.map((direccion, index) => (
                            <div key={index}>
                                <input type="text" className="form-control" name="direccion" value={direccion} onChange={(e) => handleDireccionChange(e, index)} />
                            </div>
                        ))}
                        <button type="button" className="btn btn-link" onClick={agregarDireccion}>Agregar dirección</button>
                    </div>
                </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setModalInsertar(false)}>Cancelar</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { setModalInsertar(false); acciones.insertar(clienteSeleccionado) }}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalInsertar;

