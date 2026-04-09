import { render, screen } from '@testing-library/react';
import React from 'react';
import Layout from '../components/Layout';

describe('Componente de Layout', () => {
  it('deve exibir o cabeçalho e o rodapé em volta do conteúdo', () => {
    render(
      <Layout>
        <p>Conteúdo de Teste</p>
      </Layout>
    );

    // Agora pedimos para procurar o título especificamente no H1 (Header)
    const tituloHeader = screen.getByRole('heading', { name: /Pousada Pedra Furada/i });
    expect(tituloHeader).toBeInTheDocument();

    // Verifica se o conteúdo do meio aparece
    expect(screen.getByText(/Conteúdo de Teste/i)).toBeInTheDocument();

    // Verifica se o rodapé aparece procurando pelo texto do sistema de gestão
    expect(screen.getByText(/Sistema de Gestão/i)).toBeInTheDocument();
  });
});