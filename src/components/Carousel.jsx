import React, { useState } from "react";

const Carousel = ({ images, alt }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showNavigation = images.length > 1;

  return (
    <div className="Carousel">
      {showNavigation && (
        <button className="CarouselButton" onClick={goToPreviousSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}
      <img className="LogementIMG" src={images[currentImageIndex]} alt={alt} />
      {showNavigation && (
        <button className="CarouselButton" onClick={goToNextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
    </div>
  );
};

export default Carousel;
