import { useSelector } from "react-redux";
import "./Files.css";

const Files = () => {
  const images = useSelector((state) => state.photos.photos);

  const drag = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    console.log(id);
  };

  return (
    <div className="files">
      <p className="files__title">files</p>
      <ul className="files__list" onDragOver={allowDrop} onDrop={drop}>
        {images.map((image) => (
          <li
            className="file-item"
            key={image.id}
            draggable="true"
            onDragStart={(event) => {
              drag(event, image.id);
            }}
          >
            <p>{image.id}.jpg</p>
            <div className="image-thumb">
              <img
                draggable="false"
                src={image.thumb}
                alt={
                  image.description
                    ? image.description.slice(0, 15) + "..."
                    : "image"
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Files;
