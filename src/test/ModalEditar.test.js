import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalEditar from '../components/ModalEditar';

const mockClienteSeleccionado = {
  id: 1,
  nombre: 'John Doe',
  telefono: '1234567890',
  email: 'john@example.com',
  direcciones: [
    { id: 1, calle: 'Calle 1', ciudad: 'Ciudad 1', pais: 'País 1' },
    { id: 2, calle: 'Calle 2', ciudad: 'Ciudad 2', pais: 'País 2' },
  ],
};

const mockAcciones = {
  editar: jest.fn(),
};

describe('ModalEditar', () => {
  test('renders the component', () => {
    render(
      <ModalEditar
        clienteSeleccionado={mockClienteSeleccionado}
        handleChange={() => {}}
        setModalEditar={() => {}}
        modalEditar={true}
        acciones={mockAcciones}
      />
    );

    expect(screen.getByText('Editar Cliente')).toBeInTheDocument();
  });

  test('actualiza la dirección seleccionada cuando se selecciona una nueva dirección', () => {
    render(
      <ModalEditar
        clienteSeleccionado={mockClienteSeleccionado}
        handleChange={() => {}}
        setModalEditar={() => {}}
        modalEditar={true}
        acciones={mockAcciones}
      />
    );

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: '2' } });

    expect(screen.getByDisplayValue('Calle 2')).toBeInTheDocument();
  });

  test('llama a la acción editar cuando se hace clic en el botón Guardar', () => {
    render(
      <ModalEditar
        clienteSeleccionado={mockClienteSeleccionado}
        handleChange={() => {}}
        setModalEditar={() => {}}
        modalEditar={true}
        acciones={mockAcciones}
      />
    );

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: '2' } });
    const inputElement = screen.getByDisplayValue('Calle 2');
    fireEvent.change(inputElement, { target: { value: 'Calle 2 Editada' } });
    const saveButton = screen.getByText('Guardar');
    fireEvent.click(saveButton);

    expect(mockAcciones.editar).toHaveBeenCalled();
  });
});
