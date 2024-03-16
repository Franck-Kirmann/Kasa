import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/LOGO.png";
import { NavLink, useLocation } from "react-router-dom";
import "../../assets/css/Header.css";

const Header = () => {
  const Location = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(Location.pathname);
  }, [Location]);

  return (
    <header>
      <img className="logo" src={Logo} alt="Logo" />
      <div className="Nav">
        <NavLink
          className={`No-style ${selected === "/" ? "selected" : ""}`}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={`No-style ${selected === "/Apropos" ? "selected" : ""}`}
          to="/Apropos"
        >
          A propos
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
