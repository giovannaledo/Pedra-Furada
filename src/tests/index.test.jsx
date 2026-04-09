import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../pages/index'; // Importa a página real

describe('Página Inicial da Pousada', () => {
  it('deve exibir a mensagem de boas-vindas', () => {
    render(<Home />);
    expect(screen.getByText(/Bem-vindo à Pousada Pedra Furada/i)).toBeInTheDocument();
  });
});