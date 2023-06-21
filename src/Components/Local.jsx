import React from 'react';

// STYLES
import "../Styles/Local.scss";

// IMAGES
import local from "../../public/Images/barberia-fondo.jpg";

export default function Local() {

  return (

    <div className='local-container'>

      <img src={local} alt="Foto del local" />

      <div className="local-desc">

        <h1>Nuestra barbería</h1>

        <p> <span>Larry's House Barbershop</span> abrió sus puertas el <span>14 de abril del 2023.</span> </p>

        <p>El concepto desde aquel entonces hasta ahora, ha ido migrando año tras año, 
        lo cual hace que hoy en dia se destaque como peluquería y barbería clásica tradicional de los años 20.</p>

        <p>Se caracteriza por sus afeitados clásicos a navaja con toallas calientes y frías como así
        también por sus arreglos de barbas, cortes de estilo europeo y estar siempre a la vanguardia sobre 
        las nuevas tendencias masculinas.</p>

        <p> <span>"Nada dice 'estoy listo para una nueva vida' como un cambio de look."</span> </p>

        <button>Contactanos</button>

      </div>

    </div>

  );
}
