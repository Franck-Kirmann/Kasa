import React from "react";

function Card({ title, cover }) {
  return (
    <article className="Card">
      <img className="LogementsIMG" src={cover} alt={title} />
      <h2>{title}</h2>
    </article>
  );
}

export default Card;
