import React from 'react';

// COMPONENTS
import Navbar from './Components/Navbar';
import Inicio from './Components/Inicio';
import TurnoBanner from './Components/TurnoBanner';
import Estilos from './Components/Estilos';
import Local from './Components/Local';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import WspBtn from './Components/WspBtn';
import TopBtn from './Components/TopBtn';

// STYLES
import "./Styles/App.scss";

function App() {

  return (
    
    <>
      
      <Navbar />

      <Inicio />

      <TurnoBanner />

      <Estilos />

      <Local />

      <Nosotros />

      <Contacto />

      <WspBtn />

      <TopBtn />

    </>

  );
}

export default App;