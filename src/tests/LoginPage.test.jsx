import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import LoginPage from '../pages/LoginPage';

describe('Página de Login', () => {
  it('deve permitir digitar no campo de usuário e senha', () => {
    render(<LoginPage />);
    
    const inputUsuario = screen.getByPlaceholderText(/usuário/i);
    const inputSenha = screen.getByPlaceholderText(/senha/i);
    
    fireEvent.change(inputUsuario, { target: { value: 'admin' } });
    fireEvent.change(inputSenha, { target: { value: '1234' } });
    
    expect(inputUsuario.value).toBe('admin');
    expect(inputSenha.value).toBe('1234');
  });
});