import React from 'react';

// STYLES
import "../Styles/Contacto.scss";

// COMPONENTS
import ContactForm from './ContactForm';

// ICONS
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contacto() {

  return (

    <div className='container-contact'>

      <div className="contact-info">

        <h1>Contactános</h1>

        <p>Puede contactarnos mediante la info que dejamos abajo o llenando el formulario de contacto.</p>

        <p className='info'> <EmailIcon /> LarrysHouse@contact.com </p>
        <p className='info'> <PhoneIcon /> +54(11) 1111 - 1111</p>
        <p className='info'> <LocationOnIcon /> Av. Cabildo 1234 </p>

      </div>

      <div className="contact-form">

        <ContactForm />

      </div>

    </div>

  );
}
