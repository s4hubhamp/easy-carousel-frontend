import { useDispatch, useSelector } from "react-redux";
import { CarouselActions } from "../../../store/carousel-slice";
import "./Files.css";

const Files = () => {
  const photos = useSelector((state) => state.photos.photos);
  const dispatch = useDispatch();

  const drag = (event, photo) => {
    event.dataTransfer.setData("photo", JSON.stringify(photo));
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    if (id === "") return;
    dispatch(CarouselActions.removePhoto({ id: id }));
  };

  // const dragEnter = (event) => {
  //   if (event.dataTransfer.getData("id") !== "") {
  //     event.target.style.backgroundColor = "rgb(225, 225, 225)";
  //   }
  // };

  // const dragLeave = (event) => {
  //   event.target.style.backgroundColor = "#fff";
  // };

  return (
    <div className="files">
      <p className="files__title">files</p>
      <ul
        className="files__list"
        onDragOver={allowDrop}
        onDrop={drop}
        // onDragEnter={dragEnter}
        // onDragLeave={dragLeave}
      >
        {photos.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            loading...
          </div>
        ) : (
          photos.map((photo) => (
            <li
              className="file-item"
              key={photo.id}
              draggable="true"
              onDragStart={(event) => {
                drag(event, photo);
              }}
            >
              <p>{photo.id}.jpg</p>
              <div className="image-thumb">
                <img
                  draggable="false"
                  src={photo.thumb}
                  alt={
                    photo.description
                      ? photo.description.slice(0, 15) + "..."
                      : "carousel-image"
                  }
                />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Files;
