import React, { useState } from "react";
import LinkActive from "../LinkActive/LinkActive";
import "./Navbar.css";

const Header = ({ logo, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar">
      <figure className="nav_logo">
        <img src={logo} alt={alt} width={160} />
      </figure>

      <ul className={`nav_items ${isOpen && "open"}`}>
        <LinkActive to="/" onClick={() => setIsOpen(!isOpen)}>
          Inicio
        </LinkActive>
        <LinkActive to="/departments" onClick={() => setIsOpen(!isOpen)}>
          Departamentos
        </LinkActive>
        <LinkActive to="/touristic" onClick={() => setIsOpen(!isOpen)}>
          Turismo
        </LinkActive>
        <LinkActive to="/presidents" onClick={() => setIsOpen(!isOpen)}>
          Presidentes
        </LinkActive>
        <LinkActive to="/maps" onClick={() => setIsOpen(!isOpen)}>
          Mapas
        </LinkActive>
        <LinkActive to="/invasive" onClick={() => setIsOpen(!isOpen)}>
          Especies
        </LinkActive>
        <LinkActive to="/community" onClick={() => setIsOpen(!isOpen)}>
          Comunidades
        </LinkActive>
      </ul>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};
export default Header;
