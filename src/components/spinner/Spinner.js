import { useSelector } from "react-redux";
import "./Spinner.css";

const Spinner = () => {
  const showSpinner = useSelector((state) => state.ui.isLoading);

  return (
    <div className="spinner">
      {showSpinner && <div className="lds-hourglass"></div>}
    </div>
  );
};

export default Spinner;
