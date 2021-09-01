import CarouselImages from "./carouselImageList/CarouselImages";
import CarouselLoadedImage from "./carouselLoadedImage/CarouselLoadedImage";
import classes from "./RightPanel.module.css";

const RightPanel = () => {
  return (
    <div className={classes.container}>
      <CarouselLoadedImage />
      <CarouselImages />
    </div>
  );
};

export default RightPanel;
