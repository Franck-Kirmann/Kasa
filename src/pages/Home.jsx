import React from "react";
import HomeIMG from "../assets/images/Home.png";
import "../assets/css/Home.css";
import Logements from "../data/logements.json";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="Banner">
        <img className="HomeIMG" src={HomeIMG} alt="Bord de mer" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="Gallery">
        {Logements.map((logement) => (
          <NavLink to={`/logements/${logement.id}`} key={logement.id}>
            <article className="Card" key={logement.id}>
              <img
                className="LogementsIMG"
                src={logement.cover}
                alt={logement.title}
              />
              <h2>{logement.title}</h2>
            </article>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Home;
