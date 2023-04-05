// import React, { useState } from 'react';
// import Navbar from './layout/Navbar';
// import { dataClientes } from './data';


// function App() {
//   const [clientes, setClientes] = useState(dataClientes);
//   const [modalEditar, setModalEditar] = useState(false);
//   const [modalEliminar, setModalEliminar] = useState(false);
//   const [modalInsertar, setModalInsertar] = useState(false);
//   const [modalVer, setModalVer] = useState(false);


//   const [clienteSeleccionado, setClienteseleccionado] = useState({
//     id: '',
//     nombre: '',
//     telefono: '',
//     email: '',
//     direccion: ''
//   });


//   const seleccionarCliente = (cliente, caso) => {
//     setClienteseleccionado(cliente);
//     (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
//   }



//   const handleChange = e => {
//     const { name, value } = e.target;
//     setClienteseleccionado((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   }



//   const editar = () => {
//     var dataNueva = clientes;
//     dataNueva = dataNueva.map(cliente => {
//       if (cliente.id === clienteSeleccionado.id) {
//         cliente.nombre = clienteSeleccionado.nombre;
//         cliente.telefono = clienteSeleccionado.telefono;
//         cliente.email = clienteSeleccionado.email;
//         cliente.direccion = clienteSeleccionado.direccion;
//       }
//       return cliente;
//     });
//     setClientes(dataNueva);
//     setModalEditar(false);
//   }


//   const eliminar = () => {
//     setClientes(clientes.filter(cliente => cliente.id !== clienteSeleccionado.id));
//     setModalEliminar(false);
//   }



//   const abrirModalInsertar = () => {
//     setClienteseleccionado(null);
//     setModalInsertar(true);
//   }

//   const insertar = () => {
//     // Obtener valores del formulario
//     const nuevoCliente = { ...clienteSeleccionado };
//     nuevoCliente.id = clientes[clientes.length - 1].id + 1;
//     // Verificar si se llenaron todos los campos
//     if (!nuevoCliente.nombre || !nuevoCliente.telefono || !nuevoCliente.email || !nuevoCliente.direccion) {
//       alert("Por favor, llene todos los campos requeridos.");
//       return;
//     }
//     // Insertar nuevo cliente en el estado
//     const clientesActualizados = [...clientes, nuevoCliente];
//     setClientes(clientesActualizados);
//     setModalInsertar(false);
//   }



//   return (
//     <div className="App" id='App'>
//       <Navbar />

//       <button className="btn btn-success mt-8 ml-8" data-toggle="modal" data-target="#exampleModalCenterInsertar" onClick={() => abrirModalInsertar()} style={{ marginLeft: '20px', marginTop: '10px' }}>Agregar</button>
//       <br /><br />
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">ID</th>
//             <th scope="col">Nombre</th>
//             <th scope="col">Teléfono</th>
//             <th scope="col">Email</th>
//             <th scope="col">Dirección</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {clientes.map((cliente) => (
//             <tr key={cliente.id}>
//               <td>{cliente.id}</td>
//               <td>{cliente.nombre}</td>
//               <td>{cliente.telefono}</td>
//               <td>{cliente.email}</td>
//               <td>{cliente.direccion}</td>
//               <td>
//                 <button className="btn btn-info" data-toggle="modal" data-target="#exampleModalCenterVer" onClick={() => seleccionarCliente(cliente, 'Ver')}>Ver</button>{"  "}
//                 <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => seleccionarCliente(cliente, 'Editar')}>Editar</button> {"  "}
//                 <button className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenterEliminar" onClick={() => seleccionarCliente(cliente, 'Eliminar')}>Eliminar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* MODAL VER */}
//       <div
//         isOpen={modalVer}
//         class="modal fade"
//         id="exampleModalCenterVer"
//         tabindex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalCenterTitle"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog modal-dialog-centered" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLongTitle">
//                 VER CLIENTE
//               </h5>
//               <button
//                 type="button"
//                 class="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//                 onClick={() => setModalVer(false)}
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               <div className="text-left">
//                 <label>ID</label>
//                 <input
//                   className="form-control"
//                   readOnly
//                   type="text"
//                   name="id"
//                   value={clienteSeleccionado && clienteSeleccionado.id}
//                 />
//                 <br />

//                 <label>Nombre</label>
//                 <input
//                   className="form-control"
//                   readOnly
//                   type="text"
//                   name="nombre"
//                   value={clienteSeleccionado && clienteSeleccionado.nombre}
//                 />
//                 <br />

//                 <label>Teléfono</label>
//                 <input
//                   className="form-control"
//                   readOnly
//                   type="tel"
//                   name="telefono"
//                   value={clienteSeleccionado && clienteSeleccionado.telefono}
//                 />
//                 <br />

//                 <label>Email</label>
//                 <input
//                   className="form-control"
//                   readOnly
//                   type="email"
//                   name="email"
//                   value={clienteSeleccionado && clienteSeleccionado.email}
//                 />
//                 <br />

//                 <label>Dirección</label>
//                 <input
//                   className="form-control"
//                   readOnly
//                   type="text"
//                   name="direccion"
//                   value={clienteSeleccionado && clienteSeleccionado.direccion}
//                 />
//                 <br />
//               </div>
//             </div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-dismiss="modal"
//                 onClick={() => setModalVer(false)}
//               >
//                 Cerrar
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MODAL EDITAR */}
//       <div isOpen={modalEditar} class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//         <div class="modal-dialog modal-dialog-centered" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLongTitle">EDITAR CLIENTE</h5>
//               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               <div className='text-left'>
//                 <label>ID</label>
//                 <input
//                   className="form-control"
//                   readOnly
//                   type="text"
//                   name="id"
//                   value={clienteSeleccionado && clienteSeleccionado.id}
//                 />
//                 <br />

//                 <label>Nombre</label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   name="nombre"
//                   value={clienteSeleccionado && clienteSeleccionado.nombre}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label>Telefono</label>
//                 <input
//                   className="form-control"
//                   type="tel"
//                   name="telefono"
//                   value={clienteSeleccionado && clienteSeleccionado.telefono}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label>Email</label>
//                 <input
//                   className="form-control"
//                   type="email"
//                   name="email"
//                   value={clienteSeleccionado && clienteSeleccionado.email}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label>Direccion</label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   name="direccion"
//                   value={clienteSeleccionado && clienteSeleccionado.direccion}
//                   onChange={handleChange}
//                 />
//                 <br />
//               </div>
//             </div>
//             <div class="modal-footer">
//               <button className="btn btn-primary" data-dismiss="modal" onClick={() => editar()}>Actualizar</button>
//               <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => setModalEditar(false)}>Cerrar</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MODAL ELIMINAR */}
//       <div isOpen={modalEliminar} class="modal fade" id="exampleModalCenterEliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//         <div class="modal-dialog modal-dialog-centered" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLongTitle">ELIMINAR CLIENTE</h5>
//               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               ¿Estás Seguro que deseas eliminar este cliente {clienteSeleccionado && clienteSeleccionado.nombre}?
//             </div>
//             <div class="modal-footer">
//               <button className="btn btn-danger" data-dismiss="modal" onClick={() => eliminar()}>
//                 Sí
//               </button>
//               <button
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//                 onClick={() => setModalEliminar(false)}
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>


//       {/* MODAL AGREGAR */}
//       <div isOpen={modalInsertar} class="modal fade" id="exampleModalCenterInsertar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//         <div class="modal-dialog modal-dialog-centered" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLongTitle">AGREGAR CLIENTE</h5>
//               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               <div className="text-left">
//                 <label>ID</label>
//                 <input
//                   className="form-control"
//                   readOnly
//                   type="text"
//                   name="id"
//                   value={clientes[clientes.length - 1].id + 1}
//                 />
//                 <br />

//                 <label>Nombre</label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   name="nombre"
//                   value={clienteSeleccionado ? clienteSeleccionado.nombre : ''}
//                   onChange={handleChange}
//                   required
//                 />
//                 <br />

//                 <label>Telefono</label>
//                 <input
//                   className="form-control"
//                   type="tel"
//                   name="telefono"
//                   value={clienteSeleccionado ? clienteSeleccionado.telefono : ''}
//                   onChange={handleChange}
//                   required
//                 />
//                 <br />

//                 <label>Email</label>
//                 <input
//                   className="form-control"
//                   type="email"
//                   name="email"
//                   value={clienteSeleccionado ? clienteSeleccionado.email : ''}
//                   onChange={handleChange}
//                   required
//                 />
//                 <br />

//                 <label>Direccion</label>
//                 <input
//                   className="form-control"
//                   type="text"
//                   name="direccion"
//                   value={clienteSeleccionado ? clienteSeleccionado.direccion : ''}
//                   onChange={handleChange}
//                   required
//                 />
//                 <br />
//               </div>
//             </div>
//             <div class="modal-footer">
//               {"  "}<button className="btn btn-primary" data-dismiss="modal"
//                 onClick={() => insertar()}>
//                 Insertar
//               </button>
//               <button
//                 className="btn btn-danger" data-dismiss="modal"
//                 onClick={() => setModalInsertar(false)}
//               >
//                 Cancelar
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import Navbar from './layout/Navbar';
import { dataClientes } from './data';
import ClientTable from './components/ClientTable';
import ModalVer from './components/ModalVer';
import ModalEditar from './components/ModalEditar';
import ModalEliminar from './components/ModalEliminar';
import ModalInsertar from './components/ModalInsertar';

function App() {
    const [clientes, setClientes] = useState(dataClientes);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalVer, setModalVer] = useState(false);


    const [clienteSeleccionado, setClienteseleccionado] = useState({
        id: '',
        nombre: '',
        telefono: '',
        email: '',
        direccion: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setClienteseleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Acción para seleccionar un cliente y mostrarlo en el modal
    const seleccionarCliente = (cliente, caso) => {
        setClienteseleccionado(cliente);

        if (caso === 'Editar') {
            setModalEditar(true);
        } else if (caso === 'Eliminar') {
            setModalEliminar(true);
        } else if (caso === 'Ver') {
            setModalVer(true);
        }
    };

    // Acción para editar un cliente
    const editar = () => {
        let clientesActualizados = clientes.map((cliente) =>
            cliente.id === clienteSeleccionado.id ? clienteSeleccionado : cliente
        );
        setClientes(clientesActualizados);
        setModalEditar(false);
    };

    // Acción para eliminar un cliente
    const eliminar = () => {
        setClientes(clientes.filter((cliente) => cliente.id !== clienteSeleccionado.id));
        setModalEliminar(false);
    };

    const nuevoCliente = () => {
        const idNuevoCliente = clientes.length + 1;
        return {
            id: idNuevoCliente,
            nombre: '',
            telefono: '',
            email: '',
            direccion: ''
        };
    }


    // Acción para abrir el modal de inserción
    //   const abrirModalInsertar = () => {
    //     setClienteseleccionado(null);
    //     setModalInsertar(true);
    //   };
    const abrirModalInsertar = () => {
        setClienteseleccionado(nuevoCliente());
        setModalInsertar(true);
    };



    // Acción para insertar un nuevo cliente
    //   const insertar = () => {
    //     const nuevoCliente = {
    //       id: Math.floor(Math.random() * 10000), // Generar un ID aleatorio
    //       ...clienteSeleccionado,
    //     };
    //     setClientes([...clientes, nuevoCliente]);
    //     setModalInsertar(false);
    //   };
    // const insertar = () => {
    //     const idNuevoCliente = clientes.length + 1;
    //     const nuevoCliente = {
    //         ...clienteSeleccionado,
    //         id: idNuevoCliente,
    //     };

    //     setClientes([...clientes, nuevoCliente]);
    //     setModalInsertar(false);
    // };
    // const insertar = () => {
    //     const maxId = Math.max(...clientes.map((cliente) => cliente.id));
    //     const nuevoCliente = {
    //       id: maxId + 1,
    //       nombre: clienteSeleccionado.nombre,
    //       telefono: clienteSeleccionado.telefono,
    //       email: clienteSeleccionado.email,
    //       direccion: clienteSeleccionado.direccion,
    //     };
      
    //     setClientes([...clientes, nuevoCliente]);
    //     setModalInsertar(false);
    //   };
    const generarIdUnico = () => {
        if (clientes.length === 0) {
          return 1;
        }
      
        const idMaximo = Math.max.apply(Math, clientes.map((cliente) => cliente.id));
        return idMaximo + 1;
      };
      
      
      
      const insertar = () => {
        const idUnico = generarIdUnico();
        const nuevoCliente = {
          id: idUnico,
          nombre: clienteSeleccionado.nombre,
          telefono: clienteSeleccionado.telefono,
          email: clienteSeleccionado.email,
          direccion: clienteSeleccionado.direccion,
        };
      
        setClientes([...clientes, nuevoCliente]);
        setModalInsertar(false);
      };
      

    const acciones = {
        seleccionarCliente,
        editar,
        eliminar,
        abrirModalInsertar,
        insertar,
        handleChange
    };

    return (
        <div className="App" id='App'>
            <Navbar />
            <ClientTable clientes={clientes} acciones={acciones} />
            <ModalVer clienteSeleccionado={clienteSeleccionado} modalVer={modalVer} setModalVer={setModalVer} />
            <ModalEditar clienteSeleccionado={clienteSeleccionado} handleChange={handleChange} setModalEditar={setModalEditar} modalEditar={modalEditar} acciones={acciones} />
            <ModalEliminar clienteSeleccionado={clienteSeleccionado} modalEliminar={modalEliminar} setModalEliminar={setModalEliminar} eliminar={eliminar} />
            <ModalInsertar clienteSeleccionado={clienteSeleccionado} handleChange={handleChange} setModalInsertar={setModalInsertar} modalInsertar={modalInsertar} acciones={acciones} />
        </div>
    );

}

export default App;

