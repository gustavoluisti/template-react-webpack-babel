import React, { useState } from 'react';

import Header from './components/Header';
import './App.css';
import imgBack from './assets/harley.jpeg';


function App() {
  const [projects, setProjects] = useState([]);

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
  }
  return (
    <>
      <Header title="Projects" />
      <img width={500} src={imgBack} />
      <ul>
        {projects.map((project, index) => <li key={index}>{project}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;
