import React from "react";
import AproposContent from "../data/Apropos.json";
import Collapsible from "../components/Collapse";
import "../assets/css/Apropos.css";

const Apropos = () => {
  return (
    <div className="DropdownApropos">
      {AproposContent.map((item, index) => (
        <Collapsible key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Apropos;
