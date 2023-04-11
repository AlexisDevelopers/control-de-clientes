import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalInsertar from '../components/ModalInsertar';

const mockClienteSeleccionado = {
  id: 1,
  nombre: '',
  telefono: '',
  email: '',
  direccion: '',
  direcciones: [],
};

const mockHandleChange = jest.fn();
const mockSetModalInsertar = jest.fn();
const mockAcciones = {
  insertar: jest.fn(),
};

describe('ModalInsertar', () => {
  test('renderiza el componente', () => {
    render(
      <ModalInsertar
        clienteSeleccionado={mockClienteSeleccionado}
        handleChange={mockHandleChange}
        setModalInsertar={mockSetModalInsertar}
        modalInsertar={true}
        acciones={mockAcciones}
      />
    );

    expect(screen.getByText('Agregar Cliente')).toBeInTheDocument();
  });

  test('muestra errores de validación cuando los campos obligatorios están vacíos y se hace clic en el botón "Guardar"', () => {
    render(
      <ModalInsertar
        clienteSeleccionado={mockClienteSeleccionado}
        handleChange={mockHandleChange}
        setModalInsertar={mockSetModalInsertar}
        modalInsertar={true}
        acciones={mockAcciones}
      />
    );
  
    const guardarButton = screen.getByText('Guardar');
    fireEvent.click(guardarButton);
  
    const errorMessages = screen.getAllByText('Por favor complete este campo');
    expect(errorMessages.length).toBe(3);
  });  

  test('llama a la función insertar cuando todos los campos obligatorios están llenos y se hace clic en el botón "Guardar"', () => {
    const clienteSeleccionado = {
      ...mockClienteSeleccionado,
      nombre: 'John Doe',
      telefono: '1234567890',
      email: 'john.doe@example.com',
    };

    render(
      <ModalInsertar
        clienteSeleccionado={clienteSeleccionado}
        handleChange={mockHandleChange}
        setModalInsertar={mockSetModalInsertar}
        modalInsertar={true}
        acciones={mockAcciones}
      />
    );

    const guardarButton = screen.getByText('Guardar');
    fireEvent.click(guardarButton);

    expect(mockAcciones.insertar).toHaveBeenCalled();
  });

  test('llama a setModalInsertar cuando se hace clic en el botón "Cancelar"', () => {
    render(
      <ModalInsertar
        clienteSeleccionado={mockClienteSeleccionado}
        handleChange={mockHandleChange}
        setModalInsertar={mockSetModalInsertar}
        modalInsertar={true}
        acciones={mockAcciones}
      />
    );

    const cancelButton = screen.getByText('Cancelar');
    fireEvent.click(cancelButton);

    expect(mockSetModalInsertar).toHaveBeenCalledWith(false);
  });
});
