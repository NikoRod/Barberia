import React from 'react';

// STYLES
import "../Styles/Inicio.scss";

// IMAGES
import fondo from "../../public/Images/barberia-fondo.jpg";
import logo from "../../public/Images/barberia-logo.png";

export default function Inicio() {

  const more = () => {
    window.scroll({
      top: 1000,
      behavior: 'smooth'
    });
  }
  
    return (

    <>
    
      <div className='inicio-container'>
          
        <img className='fondo' src={fondo} alt="Barbería fondo" />

        <img className='logo' src={logo} alt="Barbería logo" />

        <button className='more-btn' onClick={more}>Ver más</button>

      </div>

    </>

  );

}
