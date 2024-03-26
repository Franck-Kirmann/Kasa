import React from "react";
import HomeIMG from "../assets/images/Home.png";
import "../assets/css/Home.css";
import Logements from "../data/logements.json";
import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Home = () => {
  return (
    <section>
      <Banner
        image={HomeIMG}
        title="Chez vous, partout et ailleurs"
        altText="Bord de mer"
        className="HomeIMG"
      />
      <div className="Gallery">
        {Logements.map((logement) => (
          <NavLink to={`/logements/${logement.id}`} key={logement.id}>
            <Card title={logement.title} cover={logement.cover} />
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Home;
