import React from "react";

function Rating({ rating }) {
  const numberOfStars = 5;
  const fullStars = Math.floor(rating);
  const starArray = [];

  for (let i = 0; i < fullStars; i++) {
    starArray.push(<i key={i} className="fa-solid fa-star Star Color"></i>);
  }

  const remainingStars = numberOfStars - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    starArray.push(
      <i key={`empty-${i}`} className="fa-solid fa-star Star"></i>
    );
  }

  return <div className="Rating">{starArray}</div>;
}

export default Rating;
