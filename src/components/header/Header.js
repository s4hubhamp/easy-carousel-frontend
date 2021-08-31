import Spinner from "../spinner/Spinner";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="carousel">
        <h2>Easy Carousel</h2>
        <Spinner />
      </div>
      <hr />
    </>
  );
};

export default Header;
