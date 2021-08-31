import Categories from "./categories/Categories";
import Files from "./files/Files";
import classes from "./LeftPanel.module.css";

const LeftPanel = () => {
  return (
    <div className={classes.container}>
      <Categories />
      <Files />
    </div>
  );
};

export default LeftPanel;
