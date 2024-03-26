import React from "react";

function Banner({ image, title = "", altText = "", className = "" }) {
  return (
    <div className="Banner">
      <img className={className} src={image} alt={altText} />
      {title !== "" && <h1>{title}</h1>}
    </div>
  );
}

export default Banner;
