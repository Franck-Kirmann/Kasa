import React from "react";
import LogoFooter from "../../assets/images/LogoFooter.png";
import "../../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <img className="LogoFooter" src={LogoFooter} alt="LogoFooter" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
