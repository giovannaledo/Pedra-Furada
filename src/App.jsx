import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './globals.css'; // O CSS também deve subir

// Importando o Layout
import Layout from './components/Layout';

// Importando as páginas
import Home from './pages/index';
import LoginPage from './pages/LoginPage';
import TarefasPage from './pages/TarefasPage';
import RelatoriosPage from './pages/RelatoriosPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tarefas" element={<TarefasPage />} />
          <Route path="/relatorios" element={<RelatoriosPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}