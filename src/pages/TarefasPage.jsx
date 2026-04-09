import React, { useState } from 'react';

export default function TarefasPage() {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: 'Limpar Quarto 101', status: 'Pendente' },
    { id: 2, nome: 'Trocar toalhas do SPA', status: 'Pendente' },
  ]);

  const concluirTarefa = (id) => {
    setTarefas(tarefas.map(t => 
      t.id === id ? { ...t, status: 'Concluído' } : t
    ));
  };

  return (
    <section style={{ padding: '20px' }}>
      <h2>Tarefas de Limpeza</h2>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id} style={{ marginBottom: '10px' }}>
            {tarefa.nome} - <strong>{tarefa.status}</strong>
            {tarefa.status === 'Pendente' && (
              <button onClick={() => concluirTarefa(tarefa.id)} style={{ marginLeft: '10px' }}>
                Concluir
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}