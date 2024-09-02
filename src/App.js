import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Importa el Router
import Home from './components/Home.jsx';
import SobreMi from './components/SobreMi.jsx';
import Proyectos from './components/Proyectos.jsx';
import Tecnologias from './components/Tecnologias.jsx';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>  
      <div className="App">
        <Home/>
        <SobreMi/>
        <Proyectos/>
        <Tecnologias/>
        <Form/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
