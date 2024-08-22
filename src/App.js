import React from 'react';
import Home from './components/Home.jsx';
import SobreMi from './components/SobreMi.jsx';
import Proyectos from './components/Proyectos.jsx';
import Tecnologias from './components/Tecnologias.jsx';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Home/>
      <SobreMi/>
      <Proyectos/>
      <Tecnologias/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;