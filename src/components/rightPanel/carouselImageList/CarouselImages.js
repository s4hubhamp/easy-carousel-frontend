import classes from "./CarouselImages.module.css";
import { CarouselActions } from "../../../store/carousel-slice";
// import { useRef } from "react";

const CarouselImages = ({ photos, currentPhoto, dispatch }) => {
  const setCurrentImage = (photo) => {
    dispatch(CarouselActions.setCurrentPhoto({ current: photo }));
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.preventDefault();
    // event.target.style.backgroundColor = "#fff";
    if (event.dataTransfer.getData("photo") !== "") {
      const photo = JSON.parse(event.dataTransfer.getData("photo"));
      dispatch(CarouselActions.addPhoto({ photo }));
    }
    // else {
    //   const draggedElId = event.dataTransfer.getData("id");
    //   let id;
    //   if (event.target.tagName === "IMG" || event.target.tagName === "P") {
    //     id = event.target.parentElement.id;
    //   } else {
    //     id = event.target.id;
    //   }

    //   // dispatch(CarouselActions.reArrange({ id, draggedElId }));
    // }
  };

  const drag = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  // const dragEnter = (event) => {
  //   console.log("dragEnter");
  //   console.dir(event.target.id);
  //   if (event.dataTransfer.getData("photo") !== "") {
  //     event.target.style.backgroundColor = "rgb(225, 225, 225)";
  //   }
  // };

  // const dragLeave = (event) => {
  //   console.log("dragLeave");
  //   console.dir(event.target.id);
  //   event.target.style.backgroundColor = "#fff";
  // };

  return (
    <div
      id="container"
      className={classes.container}
      onDragOver={allowDrop}
      onDrop={drop}
      // onDragEnter={dragEnter}
      // onDragLeave={dragLeave}
    >
      {photos.map((p) => (
        <div
          className={`${classes.img} ${
            currentPhoto
              ? p.id === currentPhoto.id
                ? classes.current
                : ""
              : ""
          }`}
          key={p.id}
          id={p.id}
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
