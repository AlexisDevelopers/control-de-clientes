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
    direcciones: []
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'direcciones') {
      setClienteseleccionado((prevState) => ({
        ...prevState,
        direcciones: [value],
      }));
    } else {
      setClienteseleccionado((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
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

  const editar = (clienteActualizado) => {
    let clientesActualizados = clientes.map((cliente) =>
      cliente.id === clienteActualizado.id ? clienteActualizado : cliente
    );
    setClientes(clientesActualizados);
    setModalEditar(false);
    // Agrega la siguiente línea para actualizar el cliente seleccionado
    setClienteseleccionado(clienteActualizado);
  };



  // Acción para editar la dirección de un cliente
  const editarDireccion = (direccionesActualizadas) => {
    let clientesActualizados = clientes.map((cliente) =>
      cliente.id === clienteSeleccionado.id ? { ...cliente, direcciones: direccionesActualizadas } : cliente
    );
    setClientes(clientesActualizados);
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
      direcciones: []
    };
  };


  const abrirModalInsertar = () => {
    setClienteseleccionado(nuevoCliente());
    setModalInsertar(true);
  };

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
      direccion: clienteSeleccionado.direcciones,
    };

    setClientes([...clientes, nuevoCliente]);
    setModalInsertar(false);
  };

  const agregarDireccion = (nuevaDireccion) => {
    setClienteseleccionado((prevState) => ({
      ...prevState,
      direcciones: [...prevState.direcciones, nuevaDireccion],
    }));
  };

  const acciones = {
    seleccionarCliente,
    editar,
    eliminar,
    abrirModalInsertar,
    insertar,
    handleChange,
    editarDireccion,
    agregarDireccion,
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

