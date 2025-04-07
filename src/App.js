import React from 'react';
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';  
import Home from './components/Home.jsx';
import SobreMi from './components/SobreMi.jsx';
import Proyectos from './components/Proyectos.jsx';
import Tecnologias from './components/Tecnologias.jsx';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

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
