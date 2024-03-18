import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import LogementsData from "../data/logements.json";
import "../assets/css/Logements.css";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";

const LogementDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = LogementsData.find((logement) => logement.id === id);
  let i = logement.rating;

  if (!logement) {
    navigate("/error404");
    return null;
  }

  return (
    <div className="Logements">
      <img className="LogementIMG" src={logement.cover} alt={logement.title} />
      <div className="LogementsDetails">
        <div className="LogementsInfo">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="LogementTagList">
            {logement.tags.map((tag, index) => (
              <p key={index} className="LogementTag">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div>
          <div className="HostDetail">
            <p className="HostText">{logement.host.name}</p>
            <img
              className="HostIMG"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="DropdownDetails">
        <Collapse title={"Description"} content={logement.description} />
        <Collapse title={"Équipements"} content={logement.equipments} />
      </div>
    </div>
  );
};

export default LogementDetail;
