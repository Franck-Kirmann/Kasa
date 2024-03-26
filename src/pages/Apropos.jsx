import React from "react";
import AproposContent from "../data/Apropos.json";
import Collapsible from "../components/Collapse";
import "../assets/css/Apropos.css";
import AproposIMG from "../assets/images/Apropos.png";
import Banner from "../components/Banner";

const Apropos = () => {
  return (
    <main>
      <Banner image={AproposIMG} altText="Montagne" className="AproposIMG" />
      <div className="DropdownApropos">
        {AproposContent.map((item, index) => (
          <Collapsible key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </main>
  );
};

export default Apropos;
