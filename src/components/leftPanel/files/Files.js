import { useSelector } from "react-redux";
import "./Files.css";

const Files = () => {
  const images = useSelector((state) => state.photos.photos);

  return (
    <div className="files">
      <p className="files__title">files</p>
      <ul className="files__list">
        {images.map((image) => (
          <li className="file-item" key={image.id} draggable="true">
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
