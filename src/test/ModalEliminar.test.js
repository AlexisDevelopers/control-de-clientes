import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalEliminar from '../components/ModalEliminar';

const mockClienteSeleccionado = {
  id: 1,
  nombre: 'John Doe',
};

const mockEliminar = jest.fn();

describe('ModalEliminar', () => {
  test('renderiza el componente', () => {
    render(
      <ModalEliminar
        modalEliminar={true}
        setModalEliminar={() => {}}
        clienteSeleccionado={mockClienteSeleccionado}
        eliminar={mockEliminar}
      />
    );

    expect(screen.getByText('ELIMINAR CLIENTE')).toBeInTheDocument();
  });

  test('muestra el nombre del cliente seleccionado', () => {
    render(
      <ModalEliminar
        modalEliminar={true}
        setModalEliminar={() => {}}
        clienteSeleccionado={mockClienteSeleccionado}
        eliminar={mockEliminar}
      />
    );

    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
  });

  test('llama a la función eliminar cuando se hace clic en el botón "Sí"', () => {
    render(
      <ModalEliminar
        modalEliminar={true}
        setModalEliminar={() => {}}
        clienteSeleccionado={mockClienteSeleccionado}
        eliminar={mockEliminar}
      />
    );

    const yesButton = screen.getByText('Sí');
    fireEvent.click(yesButton);

    expect(mockEliminar).toHaveBeenCalled();
  });

  test('llama a setModalEliminar cuando se hace clic en el botón "No"', () => {
    const mockSetModalEliminar = jest.fn();

    render(
      <ModalEliminar
        modalEliminar={true}
        setModalEliminar={mockSetModalEliminar}
        clienteSeleccionado={mockClienteSeleccionado}
        eliminar={mockEliminar}
      />
    );

    const noButton = screen.getByText('No');
    fireEvent.click(noButton);

    expect(mockSetModalEliminar).toHaveBeenCalledWith(false);
  });
});
