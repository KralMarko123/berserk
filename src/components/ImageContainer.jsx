import React from "react";

const ImageContainer = ({ image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="image-container"
    ></div>
  );
};

export default ImageContainer;
