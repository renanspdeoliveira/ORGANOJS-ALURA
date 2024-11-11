import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


export const metadata = {
  title: "FinalWeek USP-SP | Grupo MedCof",
  description:
    "A Universidade de São Paulo (USP-SP) é uma das instituições mais renomadas do Brasil, reconhecida por sua excelência acadêmica e vastas oportunidades de formação. Aluno MedCoff: Participe gratuitamente da maior revisão para a 1ª fase da prova da USP-SP com nossos especialistas em São Paulo.",
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

