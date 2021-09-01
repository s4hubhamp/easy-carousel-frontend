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

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    console.log(id);
  };

  const drag = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  return (
    <div className={classes.container} onDragOver={allowDrop} onDrop={drop}>
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
          draggable="true"
          onDragStart={(event) => {
            drag(event, p.id);
          }}
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
