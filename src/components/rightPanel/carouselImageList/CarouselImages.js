import classes from "./CarouselImages.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CarouselActions } from "../../../store/carousel-slice";

const CarouselImages = () => {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.photos.photos);
  const currentImage = useSelector((state) => state.carousel.currentImage);

  const setCurrentImage = (photo) => {
    dispatch(CarouselActions.setCurrentImage({ current: photo }));
  };

  return (
    <div className={classes.container}>
      {photos.map((p) => (
        <div
          className={`${classes.img} ${
            currentImage
              ? p.id === currentImage.id
                ? classes.current
                : ""
              : ""
          }`}
          key={p.id}
          onClick={() => {
            setCurrentImage(p);
          }}
        >
          <img
            draggable="false"
            src={p.regular}
            alt={p.description ? p.description.slice(0, 10) : "carousel-image"}
          />
          <p>{p.id}.jpg</p>
        </div>
      ))}
    </div>
  );
};

export default CarouselImages;
