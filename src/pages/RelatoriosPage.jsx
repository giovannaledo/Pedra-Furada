import React from "react";

export default function RelatoriosPage() {
  const estatisticas = {
    total: 10,
    concluidas: 6,
    emAndamento: 3,
    pendentes: 1,
  };

  return (
    <section style={{ padding: '20px' }}>
      <h2>Relatórios de Desempenho</h2>
      <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
        <p><strong>Total de tarefas:</strong> {estatisticas.total}</p>
        <p><strong>Concluídas:</strong> {estatisticas.concluidas}</p>
        <p><strong>Em andamento:</strong> {estatisticas.emAndamento}</p>
        <p><strong>Pendentes:</strong> {estatisticas.pendentes}</p>
      </div>
    </section>
  );
}