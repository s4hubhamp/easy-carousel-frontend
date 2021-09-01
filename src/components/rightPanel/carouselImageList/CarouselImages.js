import classes from "./CarouselImages.module.css";
import { useDispatch, useSelector } from "react-redux";
import { PhotosActions } from "../../../store/photos-slice";

const CarouselImages = () => {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.photos.photos);
  const currentImage = useSelector((state) => state.photos.currentImage);

  const setCurrentImage = (current) => {
    dispatch(PhotosActions.setCurrentImage({ current: current }));
  };

  return (
    <div className={classes.container}>
      {photos.map((p) => (
        <div
          className={`${classes.img} ${
            p.regular === currentImage ? classes.current : ""
          }`}
          key={p.id}
          onClick={() => {
            setCurrentImage(p.regular);
          }}
        >
          <img
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
