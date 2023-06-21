import React from 'react';

// STYLES
import "../Styles/TurnoBanner.scss";

export default function TurnoBanner() {

  return (

    <>

      <div className='turno-banner-container'>

        <div className="desc">

          <h1>Reservá tu próximo <span>turno</span> </h1>

          <p>Reservá una cita con tu barbero de confianza en nuestra web. Te la hacemos fácil, rápido y desde la 
            comodidad de tu casa.</p>

        </div>

        <div className="btn-container">

          <button>Reservar turno</button>

        </div>

      </div>

    </>

  );

}
