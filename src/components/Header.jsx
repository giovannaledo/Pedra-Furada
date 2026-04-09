import React from 'react'; // Adicione aqui
export default function Header() {
  return (
    <header style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
      <h1>Pousada Pedra Furada</h1>
      <nav>
        <a href="/">Home</a> | <a href="/login">Login</a> | <a href="/tarefas">Tarefas</a>
      </nav>
    </header>
  );
}