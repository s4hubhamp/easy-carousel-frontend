import { useSelector } from "react-redux";

const Preview = () => {
  const carouselPhotos = useSelector((state) => state.carousel.photos);

  return (
    <div className="carousel-container">
      Preview
      {/* <div className="slide">
        <img src="" alt="" className="slide-image" />
      </div> */}
    </div>
  );
};

export default Preview;
