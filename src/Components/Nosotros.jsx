import React from 'react';

// STYLES
import "../Styles/Nosotros.scss";

// IMAGES
import equipo from "../../public/Images/barberia-fondo.jpg";

export default function Nosotros() {

  return (

    <div className='nosotros-container'>

      <div className="nosotros-desc">

        <h1>Nuestro equipo</h1>

        <p>Nuestro equipo se confroma por 8 barberos cuidadosamente seleccionados para las diferentes áreas, los cuales
          se encargarán de hacerlo sentir como en su propia casa. 
        </p>

        <p> <span>”No hay hombres feos, solo hombres que no conocen un buen barbero.”</span> </p>

        <button>Reservar turno</button>

      </div>

      <img src={equipo} alt="Foto equipo" />

    </div>

  );
}
