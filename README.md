El código presentado es un componente principal de una aplicación React que gestiona un listado de clientes. La aplicación permite visualizar, agregar, editar y eliminar clientes a través de una interfaz gráfica y modales.

Importación de módulos y componentes
Se importan los módulos y componentes necesarios:

React y useState de la librería react
Navbar (componente de la barra de navegación)
dataClientes (datos de ejemplo para clientes)
Componentes para las acciones y modales: ClientTable, ModalVer, ModalEditar, ModalEliminar y ModalInsertar.
Componente App
El componente principal App contiene el estado de los clientes y de los modales que se utilizan para realizar diferentes acciones. Las funciones y acciones se pasan como props a los componentes hijos para gestionar y modificar el estado de los clientes.

Se definen los siguientes estados:

clientes: un array que contiene los datos de los clientes.
modalEditar, modalEliminar, modalInsertar, modalVer: estados booleanos para controlar la apertura y cierre de los modales.
clienteSeleccionado: objeto que contiene los datos del cliente seleccionado en una acción.
Funciones y acciones
El componente App define varias funciones y acciones que permiten gestionar y modificar el estado de los clientes:

handleChange: función que maneja el cambio en los campos de los formularios de los modales.
seleccionarCliente: función que selecciona un cliente y abre el modal correspondiente según la acción.
editar: función que actualiza los datos de un cliente existente.
eliminar: función que elimina un cliente del listado.
nuevoCliente: función que crea un objeto vacío de cliente para el modal de inserción.
abrirModalInsertar: función que abre el modal de inserción y selecciona un nuevo cliente.
generarIdUnico: función que genera un ID único para un nuevo cliente.
insertar: función que agrega un nuevo cliente al listado de clientes.
Renderizado del componente
El componente App renderiza los componentes hijos y modales, y pasa las funciones, estados y acciones necesarias a través de props.

## Componentes

## Navbar
Este componente muestra una barra de navegación en la parte superior de la página. Utiliza la clase .navbar de Bootstrap para crear la barra.

## ClientTable
Este componente muestra el listado de clientes en una tabla y permite realizar acciones sobre ellos (ver, editar, eliminar). Recibe las propiedades clientes y acciones que contienen los datos y funciones necesarios para manejar los eventos en la tabla.

## ModalVer
Este componente muestra los detalles de un cliente en un modal. Recibe las propiedades clienteSeleccionado, modalVer y setModalVer, que contienen los datos del cliente seleccionado y las funciones para abrir y cerrar el modal.

## ModalEditar
Este componente permite editar los datos de un cliente en un modal. Recibe las propiedades clienteSeleccionado, handleChange, setModalEditar, modalEditar y acciones, que contienen los datos del cliente seleccionado, la función para manejar los cambios en los campos del formulario, las funciones para abrir y cerrar el modal, y las funciones necesarias para realizar la edición del cliente.

## ModalEliminar
Este componente muestra un mensaje de confirmación antes de eliminar un cliente. Recibe las propiedades clienteSeleccionado, modalEliminar, setModalEliminar y eliminar, que contienen los datos del cliente seleccionado, las funciones para abrir y cerrar el modal y la función para eliminar el cliente.

## ModalInsertar
Este componente permite insertar un nuevo cliente en el listado. Recibe las propiedades clienteSeleccionado, handleChange, setModalInsertar, modalInsertar y acciones, que contienen los datos del nuevo cliente, la función para manejar los cambios en los campos del formulario, las funciones para abrir y cerrar el modal, y las funciones necesarias para realizar la inserción del cliente.

## ModalInsertar
Este componente permite insertar un nuevo cliente en el listado. Contiene un formulario con los campos necesarios para agregar un nuevo cliente. Recibe las propiedades clienteSeleccionado, handleChange, setModalInsertar, modalInsertar y acciones.

clienteSeleccionado: objeto que contiene los datos del nuevo cliente.
handleChange: función que maneja los cambios en los campos del formulario.
setModalInsertar: función para abrir y cerrar el modal.
modalInsertar: estado booleano que controla si el modal está abierto o cerrado.
acciones: objeto que contiene las funciones necesarias para manejar las acciones del formulario.
El componente contiene un formulario con los campos de nombre, telefono, email y direccion para agregar un nuevo cliente al listado.

## ClientRow
Este componente es una fila de la tabla de clientes que muestra la información de un cliente y permite realizar acciones sobre él (ver, editar, eliminar). Recibe las propiedades cliente y acciones.

