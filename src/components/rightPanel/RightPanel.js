import { useDispatch, useSelector } from "react-redux";
import CarouselImages from "./carouselImageList/CarouselImages";
import CarouselLoadedImage from "./carouselLoadedImage/CarouselLoadedImage";
import classes from "./RightPanel.module.css";

const RightPanel = () => {
  const photos = useSelector((state) => state.carousel.photos);
  const currentPhoto = useSelector((state) => state.carousel.currentPhoto);

  const dispatchfn = useDispatch();

  return (
    <div className={classes.container}>
      <CarouselLoadedImage
        dispatch={dispatchfn}
        photos={photos}
        currentPhoto={currentPhoto}
      />
      <CarouselImages
        dispatch={dispatchfn}
        photos={photos}
        currentPhoto={currentPhoto}
      />
    </div>
  );
};

export default RightPanel;
