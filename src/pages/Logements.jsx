import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import LogementsData from "../data/logements.json";

const LogementDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = LogementsData.find((logement) => logement.id === id);

  if (!logement) {
    navigate("/error404");
    return null;
  }

  return (
    <div>
      <h1>Détails du logement : {logement.title}</h1>
    </div>
  );
};

export default LogementDetail;
