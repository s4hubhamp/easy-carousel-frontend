import { useState } from "react";
import { useSelector } from "react-redux";
import JsZip from "jszip";
import saveAs from "jszip/vendor/FileSaver";

import "./Preview.css";

import CSS from "./utils/createExportcss";
import JavaScript from "./utils/createExportjs";

const Preview = () => {
  const carouselPhotos = useSelector((state) => state.carousel.photos);
  const [currentPhoto, setCurrentPhoto] = useState(carouselPhotos[0]);

  const onExport = () => {
    const zip = new JsZip();

    zip.file(
      "index.html",
      `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles/styles.css" />
        <title>Document</title>
      </head>
      <body>
        <div id="carousel-container"></div>
        <script src="js/index.js"></script>
      </body>
    </html>`
    );

    const stylesFolder = zip.folder("styles");
    stylesFolder.file("styles.css", CSS);

    let exportData = "";
    carouselPhotos.forEach((p) => {
      exportData += `{id:'${p.id}',regular:'${p.regular}',angle:${
        p.angle ? p.angle : 0
      }},`;
    });

    const jsFolder = zip.folder("js");
    jsFolder.file("index.js", "const photos=[" + exportData + "]" + JavaScript);

    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      saveAs(content, "example.zip");
    });
  };

  return (
    <>
      <div id="carousel-container">
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
              type="button"
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
