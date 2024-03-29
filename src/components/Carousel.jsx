import React, { useState } from "react";

const Carousel = ({ images, alt }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const totalImages = images.length;

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const showNavigation = totalImages > 1;

  return (
    <div className="Carousel">
      {showNavigation && (
        <button className="CarouselButton" onClick={goToPreviousSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}
      <div className="CarouselImageContainer">
        <img
          className="LogementIMG"
          src={images[currentImageIndex]}
          alt={alt}
        />
        <div className="SlideNumber">{`${
          currentImageIndex + 1
        }/${totalImages}`}</div>
      </div>
      {showNavigation && (
        <button className="CarouselButton" onClick={goToNextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
    </div>
  );
};

export default Carousel;
