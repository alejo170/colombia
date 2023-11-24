import { useState } from "react"; // Importa el hook useState
import { NavLink } from "react-router-dom";
import "./LinkActive.css";

const LinkActive = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => {
        return isActive ? "is-active" : undefined;
      }}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default LinkActive;
