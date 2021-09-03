import { useState } from "react";
import { useSelector } from "react-redux";

import "./Preview.css";

const Preview = () => {
  const carouselPhotos = useSelector((state) => state.carousel.photos);
  const [currentPhoto, setCurrentPhoto] = useState(carouselPhotos[0]);

  const onExport = () => {};

  return (
    <>
      <div className="carousel-container">
        <div className="slide">
          <img
            src={currentPhoto.regular}
            alt={
              currentPhoto.description
                ? currentPhoto.description.slice(0, 7)
                : "carousel image"
            }
            style={{
              transform: `${
                currentPhoto.angle ? `rotate(${currentPhoto.angle}deg)` : "none"
              }`,
            }}
          />
        </div>
        <div class="dashes">
          {carouselPhotos.map((p) => (
            <button
              className={`dash ${
                p.id === currentPhoto.id ? "active-dash" : ""
              }`}
              key={p.id}
              onClick={() => setCurrentPhoto(p)}
            ></button>
          ))}
        </div>
        <div className="actions">
          <button className="btn import" disabled>
            import
          </button>
          <button className="btn export" onClick={onExport}>
            Export
          </button>
        </div>
      </div>
    </>
  );
};

export default Preview;
