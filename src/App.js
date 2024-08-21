import React from 'react';
import Home from './components/Home.jsx';
import SobreMi from './components/SobreMi.jsx';
import Proyectos from './components/Proyectos.jsx';
import Tecnologias from './components/Tecnologias.jsx';

function App() {
  return (
    <div className="App">
      <Home/>
      <SobreMi/>
      <Proyectos/>
      <Tecnologias/>
    </div>
  );
}

export default App;