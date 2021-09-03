import { uiActions } from "../../store/ui-slice";
import "./Header.css";

const Header = ({ dispatch }) => {
  const onPreview = () => {
    dispatch(uiActions.toggleShowModal());
  };

  return (
    <>
      <div className="header">
        <h2>Easy Carousel</h2>
        {/* <button className="btn import">import</button> */}
        <button className="btn preview" onClick={onPreview}>
          Preview
        </button>
      </div>
      <hr />
    </>
  );
};

export default Header;
