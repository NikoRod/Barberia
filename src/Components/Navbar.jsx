import React, { useState, useEffect } from "react";

// STYLES
import "../Styles/Navbar.scss";

// IMAGES
import logo from "../../public/Images/barberia-logo.png";

function Navbar() {

// NAVBAR DISPLAY FUNCTION
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } 
    else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } 
    else setIcon("nav__toggler");
  };

// NAVBAR CHANGE COLOR FUNCTION
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY > 2) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

// SCROLL FUNCTIONS

  const inicio = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  const estilos = () => {
    window.scroll({
      top: 1000,
      behavior: 'smooth'
    });
  }

  const local = () => {
    window.scroll({
      top: 1700,
      behavior: 'smooth'
    });
  }

  const nosotros = () => {
    window.scroll({
      top: 2300,
      behavior: 'smooth'
    });
  }

  const contacto = () => {
    window.scroll({
      top: 2700,
      behavior: 'smooth'
    });
  }

  return (

    <nav className={color ? "nav nav-scroll" : "nav"}>

      <a href="#" className="nav__brand">
        <img src={logo} alt="Logo" />
      </a>

      <ul className={active}>

        <li className="nav__item">
          <a className="nav__link" onClick={inicio}>
            Inicio
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" onClick={estilos}>
            Estilos
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" onClick={local}>
            Local
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" onClick={nosotros}>
            Nosotros
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" onClick={contacto}>
            Contacto
          </a>
        </li>

      </ul>

      <div onClick={navToggle} className={icon}>

        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>

      </div>

    </nav>

  );
}

export default Navbar;
