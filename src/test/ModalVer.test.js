import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModalVer from '../components/ModalVer';

describe('ModalVer', () => {
    const mockClienteSeleccionado = {
      id: 1,
      nombre: 'John Doe',
      telefono: '1234567890',
      email: 'john.doe@example.com',
      direcciones: [
        { calle: 'Calle 123', ciudad: 'New York', pais: 'USA' },
        { calle: 'Calle 456', ciudad: 'Los Angeles', pais: 'USA' },
      ],
    };
  
    const mockSetModalVer = jest.fn();
    const modalVer = true;
  
    test('renderiza el componente', () => {
      render(<ModalVer clienteSeleccionado={mockClienteSeleccionado} modalVer={modalVer} setModalVer={mockSetModalVer} />);
  
      expect(screen.getByText('Detalle del Cliente')).toBeInTheDocument();
    });
  
    test('muestra la información del cliente', () => {
      render(<ModalVer clienteSeleccionado={mockClienteSeleccionado} modalVer={modalVer} setModalVer={mockSetModalVer} />);
  
      expect(screen.getByDisplayValue(mockClienteSeleccionado.id.toString())).toBeInTheDocument();
      expect(screen.getByDisplayValue(mockClienteSeleccionado.nombre)).toBeInTheDocument();
      expect(screen.getByDisplayValue(mockClienteSeleccionado.telefono)).toBeInTheDocument();
      expect(screen.getByDisplayValue(mockClienteSeleccionado.email)).toBeInTheDocument();
      expect(screen.getByText(`${mockClienteSeleccionado.direcciones[0].calle}, ${mockClienteSeleccionado.direcciones[0].ciudad}, ${mockClienteSeleccionado.direcciones[0].pais}`)).toBeInTheDocument();
      expect(screen.getByText(`${mockClienteSeleccionado.direcciones[1].calle}, ${mockClienteSeleccionado.direcciones[1].ciudad}, ${mockClienteSeleccionado.direcciones[1].pais}`)).toBeInTheDocument();
    });
  
    test('llama a setModalVer cuando se hace clic en el botón "Cerrar"', () => {
      render(<ModalVer clienteSeleccionado={mockClienteSeleccionado} modalVer={modalVer} setModalVer={mockSetModalVer} />);
  
      const cerrarButton = screen.getByText('Cerrar');
      fireEvent.click(cerrarButton);
  
      expect(mockSetModalVer).toHaveBeenCalledWith(false);
    });
  });
  