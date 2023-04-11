import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock('../layout/Navbar.js', () => () => <div data-testid="navbar">Navbar</div>);
jest.mock('../components/ClientTable', () => () => <div data-testid="client-table">ClientTable</div>);
jest.mock('../components/ModalVer', () => () => <div data-testid="modal-ver">ModalVer</div>);
jest.mock('../components/ModalEditar', () => () => <div data-testid="modal-editar">ModalEditar</div>);
jest.mock('../components/ModalInsertar', () => () => <div data-testid="modal-insertar">ModalInsetar</div>);

test('renderiza la aplicación sin bloquearse', () => {
  render(<App />);
  const navbarElement = screen.getByTestId('navbar');
  const clientTableElement = screen.getByTestId('client-table');
  const modalVerElement = screen.getByTestId('modal-ver');
  const modalEditarElement = screen.getByTestId('modal-editar');
  const modalAgregarElement = screen.getByTestId('modal-insertar');

  expect(navbarElement).toBeInTheDocument();
  expect(clientTableElement).toBeInTheDocument();
  expect(modalVerElement).toBeInTheDocument();
  expect(modalEditarElement).toBeInTheDocument();
  expect(modalAgregarElement).toBeInTheDocument();
});
