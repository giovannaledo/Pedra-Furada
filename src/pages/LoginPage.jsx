import React, { useState } from 'react';

export default function LoginPage() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handlesubmeter = (e) => {
    e.preventDefault();
    alert(`Tentando logar com: ${usuario}`);
  };

  return (
    <section style={{ padding: '20px' }}>
      <h2>Login - Colaborador</h2>
      <form onSubmit={handlesubmeter}>
        <input 
          type="text" 
          placeholder="Usuário" 
          value={usuario} 
          onChange={(e) => setUsuario(e.target.value)} 
        />
        <br />
        <input 
          type="password" 
          placeholder="Senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}